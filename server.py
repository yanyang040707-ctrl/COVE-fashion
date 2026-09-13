"""COVE WSGI application and direct Zhihu HTTP API client."""
import argparse
import json
import mimetypes
import os
from pathlib import Path
import socket
import threading
import time
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode, urlsplit
from urllib.request import Request, build_opener, HTTPRedirectHandler
from wsgiref.simple_server import make_server

ROOT = Path(__file__).resolve().parent
ENDPOINT = "https://developer.zhihu.com/api/v1/content/zhihu_search"
CACHE = {}
LOCK = threading.Lock()
LAST_CALL = float("-inf")


class APIError(Exception):
    def __init__(self, status, code, message):
        self.status, self.code, self.message = status, code, message


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


def credentials():
    secret = os.environ.get("ZHIHU_ACCESS_SECRET", "f77bd9499de76893d0caf727b1cbf47fc70f3d97").strip()
    if not secret:
        raise APIError(503, "AUTH_REQUIRED", "搜索服务尚未配置授权。")
    if any(ord(c) < 33 or ord(c) > 126 for c in secret):
        raise APIError(503, "AUTH_REQUIRED", "搜索服务授权配置无效。")
    return secret


def fetch_zhihu(query):
    request = Request(ENDPOINT + "?" + urlencode({"Query": query, "Count": 6}), headers={
        "Authorization": "Bearer " + credentials(),
        "X-Request-Timestamp": str(int(time.time())),
        "Content-Type": "application/json",
    })
    try:
        # Do not follow redirects with the authorization header.
        with build_opener(NoRedirect()).open(request, timeout=25) as response:
            raw = response.read(2 * 1024 * 1024 + 1)
        if len(raw) > 2 * 1024 * 1024:
            raise APIError(502, "INVALID_RESPONSE", "搜索服务返回异常。")
        payload = json.loads(raw)
    except HTTPError as exc:
        if exc.code in (401, 403):
            raise APIError(503, "AUTH_REQUIRED", "知乎搜索授权无效或无访问权限。")
        if exc.code == 429:
            raise APIError(429, "UPSTREAM_RATE_LIMIT", "知乎接口额度或频率受限，请稍后再试。")
        raise APIError(502, "UPSTREAM_ERROR", "知乎搜索暂不可用，请稍后再试。")
    except (TimeoutError, socket.timeout):
        raise APIError(504, "TIMEOUT", "搜索超时，请稍后重试。")
    except URLError as exc:
        if isinstance(exc.reason, (TimeoutError, socket.timeout)):
            raise APIError(504, "TIMEOUT", "搜索超时，请稍后重试。")
        raise APIError(502, "NETWORK_ERROR", "无法连接知乎搜索服务。")
    except (ValueError, UnicodeError):
        raise APIError(502, "INVALID_RESPONSE", "搜索服务返回异常。")
    if not isinstance(payload, dict):
        raise APIError(502, "INVALID_RESPONSE", "搜索服务返回异常。")
    if payload.get("Code") != 0:
        # Upstream messages may contain diagnostics; never expose them.
        raise APIError(502, "UPSTREAM_ERROR", "知乎搜索暂不可用，请检查授权与额度。")
    return payload


def search(query):
    global LAST_CALL
    credentials()
    # Reject concurrent calls instead of building an unbounded queue.
    if not LOCK.acquire(blocking=False):
        raise APIError(429, "RATE_LIMIT", "搜索服务忙，请稍后再试。")
    try:
        now = time.monotonic()
        if query in CACHE and now - CACHE[query][0] < 300:
            return dict(CACHE[query][1], cached=True)
        if now - LAST_CALL < 2:
            raise APIError(429, "RATE_LIMIT", "搜索较频繁，请稍后再试。")
        LAST_CALL = now
        payload = fetch_zhihu(query)
        data = payload.get("Data")
        if not isinstance(data, dict) or not isinstance(data.get("Items"), list):
            raise APIError(502, "INVALID_RESPONSE", "搜索服务返回异常。")
        items = []
        for item in data["Items"][:6]:
            if not isinstance(item, dict):
                continue
            url = item.get("Url", "")
            try:
                parsed = urlsplit(url)
                host = parsed.hostname or ""
                safe = parsed.scheme == "https" and (host == "zhihu.com" or host.endswith(".zhihu.com")) and not parsed.username
            except (TypeError, ValueError):
                safe = False
            if not safe:
                continue
            def field(name, fallback, limit):
                value = item.get(name)
                return (value if isinstance(value, str) and value else fallback)[:limit]
            items.append({"title": field("Title", "知乎内容", 300),
                          "author": field("AuthorName", "知乎用户", 120),
                          "summary": field("ContentText", "暂无摘要，请查看原文。", 700), "url": url})
        response = {"query": query, "items": items, "cached": False, "source": "知乎"}
        if len(CACHE) >= 100:
            CACHE.pop(next(iter(CACHE)))
        CACHE[query] = (time.monotonic(), response)
        return response

    finally:
        LOCK.release()


def application(environ, start_response):
    from http import HTTPStatus
    def respond(status, body, content_type="application/json; charset=utf-8"):
        if not isinstance(body, bytes):
            body = json.dumps(body, ensure_ascii=False).encode()
        start_response(f"{status} {HTTPStatus(status).phrase}", [
            ("Content-Type", content_type), ("Content-Length", str(len(body))),
            ("Cache-Control", "no-store"), ("X-Content-Type-Options", "nosniff")])
        return [body]
    try:
        path = environ.get("PATH_INFO", "/")
        method = environ.get("REQUEST_METHOD", "GET")
        if path.startswith("/api/"):
            if path != "/api/insights/search":
                raise APIError(404, "NOT_FOUND", "接口不存在。")
            if method != "POST":
                raise APIError(405, "METHOD_NOT_ALLOWED", "请使用 POST 搜索。")
            origin = environ.get("HTTP_ORIGIN")
            configured = os.environ.get("COVE_PUBLIC_ORIGIN", "").rstrip("/")
            allowed = {configured} if configured else {"http://127.0.0.1:8765", "http://localhost:8765"}
            if (origin is not None and origin not in allowed) or environ.get("HTTP_SEC_FETCH_SITE") == "cross-site":
                raise APIError(403, "FORBIDDEN", "不允许此来源访问。")
            if environ.get("CONTENT_TYPE", "").split(";")[0].strip() != "application/json":
                raise APIError(415, "CONTENT_TYPE", "请使用 JSON 请求。")
            try:
                length = int(environ.get("CONTENT_LENGTH", "0"))
            except ValueError:
                length = 0
            if not 0 < length <= 4096:
                raise APIError(400, "INVALID_BODY", "请求大小无效。")
            try:
                body = json.loads(environ["wsgi.input"].read(length))
            except (ValueError, OSError):
                raise APIError(400, "INVALID_JSON", "请求格式无效。")
            query = body.get("query") if isinstance(body, dict) else None
            if not isinstance(query, str) or not 1 <= len(query.strip()) <= 200:
                raise APIError(400, "INVALID_QUERY", "请输入 1–200 字的搜索词。")
            return respond(200, search(query.strip()))
        if method != "GET":
            raise APIError(405, "METHOD_NOT_ALLOWED", "不支持该请求方法。")
        # Explicit assets only: do not serve source, credentials or directory listings.
        assets = {"/": "index.html", "/index.html": "index.html", "/script.js": "script.js", "/styles.css": "styles.css"}
        if path not in assets:
            raise APIError(404, "NOT_FOUND", "页面不存在。")
        file = ROOT / "docs" / assets[path]
        return respond(200, file.read_bytes(), (mimetypes.guess_type(str(file))[0] or "application/octet-stream") + "; charset=utf-8")
    except APIError as exc:
        return respond(exc.status, {"error": {"code": exc.code, "message": exc.message}})


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=8765)
    args = parser.parse_args()
    # Local preview only; deployed WSGI processes use environment variables.
    config = ROOT / ".env.local"
    if "ZHIHU_ACCESS_SECRET" not in os.environ and config.is_file():
        for line in config.read_text(encoding="utf-8").splitlines():
            key, separator, value = line.partition("=")
            if separator and key.strip() == "ZHIHU_ACCESS_SECRET":
                os.environ["ZHIHU_ACCESS_SECRET"] = value.strip()
                break
    try:
        credentials()
    except APIError as exc:
        parser.error(exc.message + " 请设置 ZHIHU_ACCESS_SECRET 环境变量。")
    os.environ.setdefault("COVE_PUBLIC_ORIGIN", f"http://127.0.0.1:{args.port}")
    print(f"COVE preview: http://127.0.0.1:{args.port}", flush=True)
    with make_server("127.0.0.1", args.port, application) as httpd:
        httpd.serve_forever()
