"""Vercel serverless entry point for Zhihu OAuth and authorized user data.

One function serves every /api/auth/* and /api/user/* route because Vercel's
Hobby plan caps the number of functions; vercel.json rewrites those paths here.
Business logic lives in zhihu_oauth.py, so this file only handles HTTP
transport, routing, cookies and CORS.
"""
import json
import os
import secrets
import sys
from http.server import BaseHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlparse, parse_qs

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

import zhihu_oauth as oauth  # noqa: E402


DEFAULT_ORIGINS = (
    "https://franchign.github.io",
    "https://yanyang040707-ctrl.github.io",
    "http://127.0.0.1:8765",
    "http://localhost:8765",
)


def allowed_origins():
    raw = os.environ.get("COVE_ALLOWED_ORIGINS", "")
    origins = {item.strip().rstrip("/") for item in raw.split(",") if item.strip()}
    return origins or {item.rstrip("/") for item in DEFAULT_ORIGINS}


class handler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass

    # --- helpers ----------------------------------------------------------

    def _origin(self):
        origin = (self.headers.get("Origin") or "").rstrip("/")
        return origin if origin in allowed_origins() else None

    def _environ(self):
        return {"HTTP_COOKIE": self.headers.get("Cookie") or ""}

    def _send(self, status, payload, origin=None, cookie=None, location=None):
        body = json.dumps(payload, ensure_ascii=False).encode() if payload is not None else b""
        self.send_response(status)
        if location:
            self.send_header("Location", location)
        if payload is not None:
            self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        if cookie:
            self.send_header("Set-Cookie", cookie)
        if origin:
            self.send_header("Access-Control-Allow-Origin", origin)
            # Required for the browser to send/accept the session cookie.
            self.send_header("Access-Control-Allow-Credentials", "true")
            self.send_header("Vary", "Origin")
        self.end_headers()
        if body:
            self.wfile.write(body)

    def _error(self, status, code, message, origin=None):
        self._send(status, {"error": {"code": code, "message": message}}, origin)

    def _session(self):
        return oauth.unseal(oauth.read_cookie(self._environ(), oauth.COOKIE_NAME))

    # --- CORS preflight ---------------------------------------------------

    def do_OPTIONS(self):
        origin = self._origin()
        if not origin:
            self._error(403, "FORBIDDEN", "不允许此来源访问。")
            return
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", origin)
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Allow-Credentials", "true")
        self.send_header("Access-Control-Max-Age", "86400")
        self.send_header("Vary", "Origin")
        self.end_headers()

    # --- routing ----------------------------------------------------------

    def do_GET(self):
        parsed = urlparse(self.path)
        route = parsed.path.rstrip("/") or "/"
        query = parse_qs(parsed.query)

        # /login and /callback are full-page browser navigations, not XHR, so
        # they redirect instead of returning JSON and skip the origin check.
        if route.endswith("/auth/login"):
            self._handle_login()
            return
        if route.endswith("/auth/callback"):
            self._handle_callback(query)
            return

        origin = self._origin()
        if route.endswith("/auth/status"):
            self._handle_status(origin)
            return
        if route.endswith("/auth/logout"):
            self._handle_logout(origin)
            return
        if route.endswith("/user/contents"):
            self._handle_user_data(origin, "contents", query)
            return
        if route.endswith("/user/followees"):
            self._handle_user_data(origin, "followees", query)
            return
        self._error(404, "NOT_FOUND", "接口不存在。", origin)

    def do_POST(self):
        self.do_GET()

    # --- handlers ---------------------------------------------------------

    def _handle_login(self):
        # state guards the callback against cross-site request forgery; it is
        # kept in the session cookie so any instance can verify it.
        state = secrets.token_urlsafe(24)
        session = {"state": state}
        try:
            url = oauth.build_authorize_url(state)
        except oauth.AuthError as exc:
            self._error(exc.status, exc.code, exc.message)
            return
        self._send(302, None, cookie=oauth.cookie_header(oauth.seal(session), 600), location=url)

    def _handle_callback(self, query):
        code = (query.get("authorization_code") or query.get("code") or [None])[0]
        returned_state = (query.get("state") or [None])[0]
        session = self._session() or {}

        def fail(reason):
            self._send(302, None, location=oauth.FRONTEND_URL + "?login=error&reason=" + reason)

        if not code:
            fail("missing_code")
            return
        # Zhihu may omit state on callback; only reject a present mismatch.
        if returned_state and session.get("state") and returned_state != session["state"]:
            fail("state_mismatch")
            return
        try:
            token, expires_in = oauth.exchange_code(code)
        except oauth.AuthError:
            fail("token_failed")
            return

        profile = oauth.fetch_profile(token)
        payload = {
            "token": token,
            "exp": __import__("time").time() + min(expires_in, oauth.SESSION_MAX_AGE),
            "profile": profile,
            "stateVerified": bool(returned_state),
        }
        cookie = oauth.cookie_header(oauth.seal(payload), min(expires_in, oauth.SESSION_MAX_AGE))
        self._send(302, None, cookie=cookie, location=oauth.FRONTEND_URL + "?login=success")

    def _handle_status(self, origin):
        session = self._session()
        self._send(200, {
            "authorized": bool(session and session.get("token")),
            "profile": (session or {}).get("profile"),
            "appId": oauth.APP_ID,
            "loginUrl": oauth.REDIRECT_URI.replace("/callback", "/login"),
        }, origin)

    def _handle_logout(self, origin):
        self._send(200, {"ok": True}, origin, cookie=oauth.cookie_header(None, 0))

    def _handle_user_data(self, origin, kind, query):
        if not origin:
            self._error(403, "FORBIDDEN", "不允许此来源访问。")
            return
        session = self._session()
        if not session or not session.get("token"):
            self._error(401, "LOGIN_REQUIRED", "请先使用知乎账号登录。", origin)
            return

        offset = oauth.clamp((query.get("offset") or ["0"])[0], 0, 0, 10_000_000)
        limit = oauth.clamp((query.get("limit") or ["20"])[0], 20, 1, 50)

        if kind == "contents":
            path = "/api/v1/user/contents"
            params = {
                "ContentType": (query.get("type") or ["all"])[0],
                "Offset": offset,
                "Limit": limit,
                "SortField": "ts",
                "SortOrder": "desc",
            }
            if params["ContentType"] not in ("all", "answer", "article", "zvideo", "pin", "question"):
                params["ContentType"] = "all"
        else:
            path = "/api/v1/user/followees"
            params = {"Offset": offset, "Limit": limit}

        try:
            result = oauth.user_api(session["token"], path, params)
        except oauth.AuthError as exc:
            self._error(exc.status, exc.code, exc.message, origin)
            return
        self._send(200, result, origin)
