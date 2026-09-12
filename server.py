"""Local-only COVE preview and Zhihu CLI bridge (Python 3.9+, no dependencies)."""
import argparse
import json
import os
from pathlib import Path
import subprocess
import threading
import time
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent
CLI = Path(os.environ.get("ZHIHU_CLI_PATH", str(Path.home() / "Library/Application Support/zhihu-cli/current/zhihu-cli")))
CACHE = {}
LOCK = threading.Lock()
LAST_CALL = float("-inf")


class APIError(Exception):
    def __init__(self, status, code, message):
        self.status, self.code, self.message = status, code, message


def search(query):
    global LAST_CALL
    with LOCK:
        now = time.monotonic()
        if query in CACHE and now - CACHE[query][0] < 300:
            return dict(CACHE[query][1], cached=True)
        if now - LAST_CALL < 2:
            raise APIError(429, "RATE_LIMIT", "搜索较频繁，请稍后再试。")
        LAST_CALL = now
        try:
            result = subprocess.run(
                [str(CLI), "search", "zhihu", "--query", query, "--count", "6", "--timeout", "25s"],
                capture_output=True, text=True, timeout=30, stdin=subprocess.DEVNULL,
            )
        except FileNotFoundError:
            raise APIError(503, "CLI_MISSING", "本地搜索服务尚未配置，请联系维护者。")
        except subprocess.TimeoutExpired:
            raise APIError(504, "TIMEOUT", "搜索超时，请稍后重试。")
        except OSError:
            raise APIError(503, "CLI_UNAVAILABLE", "本地搜索服务暂时不可用。")
        try:
            payload = json.loads(result.stdout)
        except (ValueError, TypeError):
            raise APIError(502, "INVALID_RESPONSE", "搜索服务返回异常，请稍后再试。")
        if not isinstance(payload, dict):
            raise APIError(502, "INVALID_RESPONSE", "搜索服务返回异常。")
        if result.returncode or payload.get("Code") != 0:
            error = payload.get("error", {})
            code = str(error.get("code", payload.get("Code", "UPSTREAM_ERROR"))) if isinstance(error, dict) else "UPSTREAM_ERROR"
            if code in ("AUTH_REQUIRED", "KEYCHAIN_UNAVAILABLE", "AUTH_INVALID"):
                raise APIError(503, "AUTH_REQUIRED", "搜索授权不可用，请联系维护者检查配置。")
            # Never relay raw CLI output or upstream diagnostics to the browser.
            raise APIError(502, "UPSTREAM_ERROR", "知乎搜索暂不可用，可能是授权、额度或网络问题，请稍后再试。")
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


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT / "docs"), **kwargs)

    def local_request(self):
        port = self.server.server_port
        return self.headers.get("Host") in (f"127.0.0.1:{port}", f"localhost:{port}")

    def json_response(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.end_headers()
        try:
            self.wfile.write(body)
        except (BrokenPipeError, ConnectionResetError):
            pass

    def do_GET(self):
        if not self.local_request():
            return self.json_response(403, {"error": "仅允许本机访问"})
        if urlsplit(self.path).path.startswith("/api/"):
            return self.json_response(405, {"error": "请使用 POST 搜索"})
        super().do_GET()

    def do_POST(self):
        try:
            allowed = {f"http://{host}:{self.server.server_port}" for host in ("localhost", "127.0.0.1")}
            if not self.local_request() or self.headers.get("Origin", next(iter(allowed))) not in allowed or self.headers.get("Sec-Fetch-Site") == "cross-site":
                raise APIError(403, "FORBIDDEN", "仅允许本机页面访问。")
            if self.path != "/api/insights/search":
                raise APIError(404, "NOT_FOUND", "接口不存在。")
            if self.headers.get_content_type() != "application/json":
                raise APIError(415, "CONTENT_TYPE", "请使用 JSON 请求。")
            try:
                length = int(self.headers.get("Content-Length", "0"))
            except ValueError:
                length = 0
            if not 0 < length <= 4096:
                raise APIError(400, "INVALID_BODY", "请求大小无效。")
            self.connection.settimeout(5)
            try:
                body = json.loads(self.rfile.read(length))
            except (ValueError, OSError):
                raise APIError(400, "INVALID_JSON", "请求格式无效。")
            query = body.get("query") if isinstance(body, dict) else None
            if not isinstance(query, str) or not 1 <= len(query.strip()) <= 200:
                raise APIError(400, "INVALID_QUERY", "请输入 1–200 字的搜索词。")
            self.json_response(200, search(query.strip()))
        except APIError as exc:
            self.json_response(exc.status, {"error": {"code": exc.code, "message": exc.message}})


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=8765)
    args = parser.parse_args()
    server = ThreadingHTTPServer(("127.0.0.1", args.port), Handler)
    print(f"COVE preview: http://127.0.0.1:{args.port}", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
