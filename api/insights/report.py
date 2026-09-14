"""Vercel serverless entry point for the COVE insight endpoints.

Why this file exists
--------------------
GitHub Pages is static hosting: it serves files and cannot execute server.py.
The browser therefore has no /api/insights/report to talk to. This function
provides that endpoint on a platform that does run Python, so the static site
can stay on GitHub Pages.

Design notes
------------
- All business logic is imported from server.py. Search, report generation,
  schema validation and error mapping are NOT duplicated here; only the HTTP
  transport and the CORS policy differ.
- server.py's own CORS check expects a single same-origin deployment and
  rejects cross-site requests. A browser on github.io calling this function IS
  cross-site, so this handler implements its own explicit allowlist instead.
- Secrets are read from the platform's environment variables by server.py.
  Never hardcode them here and never return them in a response.
"""
import json
import os
import sys
from http.server import BaseHTTPRequestHandler
from pathlib import Path

# server.py lives at the repository root, one level above this api/ directory.
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

import server  # noqa: E402  (path must be set before this import)


MAX_BODY = 4096


DEFAULT_ORIGINS = (
    "https://franchign.github.io",
    "https://yanyang040707-ctrl.github.io",
    "http://127.0.0.1:8765",
    "http://localhost:8765",
)


def allowed_origins():
    """Origins permitted to call this function.

    Defaults cover the GitHub Pages site and the local preview so a fresh
    deployment works with no dashboard configuration. Set
    COVE_ALLOWED_ORIGINS to a comma-separated list to override.
    """
    raw = os.environ.get("COVE_ALLOWED_ORIGINS", "")
    origins = {item.strip().rstrip("/") for item in raw.split(",") if item.strip()}
    return origins or {o.rstrip("/") for o in DEFAULT_ORIGINS}


class handler(BaseHTTPRequestHandler):
    # Keep the platform logs quiet; request bodies may contain user queries.
    def log_message(self, fmt, *args):
        pass

    def _cors_origin(self):
        origin = (self.headers.get("Origin") or "").rstrip("/")
        if not origin:
            return None
        return origin if origin in allowed_origins() else None

    def _send(self, status, payload, origin=None):
        body = json.dumps(payload, ensure_ascii=False).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        if origin:
            self.send_header("Access-Control-Allow-Origin", origin)
            self.send_header("Vary", "Origin")
        self.end_headers()
        self.wfile.write(body)

    def _error(self, status, code, message, origin=None):
        self._send(status, {"error": {"code": code, "message": message}}, origin)

    def do_OPTIONS(self):
        origin = self._cors_origin()
        if not origin:
            self._error(403, "FORBIDDEN", "不允许此来源访问。")
            return
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", origin)
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Max-Age", "86400")
        self.send_header("Vary", "Origin")
        self.end_headers()

    def do_GET(self):
        # Useful for checking the deployment without burning API quota.
        origin = self._cors_origin()
        configured = bool(os.environ.get("ZHIHU_ACCESS_SECRET", "").strip())
        self._send(200, {
            "ok": True,
            "endpoint": "/api/insights/report",
            "method": "POST",
            "zhihu_secret_configured": configured,
            "allowed_origin_count": len(allowed_origins()),
        }, origin)

    def do_POST(self):
        origin = self._cors_origin()
        if not origin:
            self._error(403, "FORBIDDEN", "不允许此来源访问。")
            return

        if (self.headers.get("Content-Type") or "").split(";")[0].strip() != "application/json":
            self._error(415, "CONTENT_TYPE", "请使用 JSON 请求。", origin)
            return

        try:
            length = int(self.headers.get("Content-Length") or 0)
        except ValueError:
            length = 0
        if not 0 < length <= MAX_BODY:
            self._error(400, "INVALID_BODY", "请求大小无效。", origin)
            return

        try:
            body = json.loads(self.rfile.read(length))
        except (ValueError, OSError):
            self._error(400, "INVALID_JSON", "请求格式无效。", origin)
            return

        query = body.get("query") if isinstance(body, dict) else None
        if not isinstance(query, str) or not 1 <= len(query.strip()) <= 200:
            self._error(400, "INVALID_QUERY", "请输入 1–200 字的搜索词。", origin)
            return

        # Reuse the exact pipeline the local preview runs.
        try:
            result = server.shooting_report(query.strip())
        except server.APIError as exc:
            self._error(exc.status, exc.code, exc.message, origin)
            return
        self._send(200, result, origin)
