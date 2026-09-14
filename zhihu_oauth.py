"""Zhihu OAuth login and authorized-user data endpoints.

Why this module exists
----------------------
GitHub Pages is static hosting, so the browser cannot perform the OAuth token
exchange: that step needs app_key, which must never reach the client. This
module runs on Vercel (which executes Python) and owns the whole server side
of the flow:

    /api/auth/login     -> redirect the browser to Zhihu's authorize page
    /api/auth/callback  -> exchange authorization_code for an access token
    /api/auth/status    -> report whether the current session is signed in
    /api/auth/logout    -> drop the session
    /api/user/contents  -> the signed-in user's own creations (paged)
    /api/user/followees -> the users they follow (paged)

Credential roles (see the Zhihu skill's OAuth boundary notes):
  app_id / app_key        identify THIS application to Zhihu
  authorization_code      one-shot, exchanged for a token in the callback
  OAuth access_token      represents the signed-in Zhihu user
  Access Secret           authenticates us as an open-platform caller

Both the Access Secret and the OAuth token are sent on every user-data call;
app_key is only used at the token exchange and is never a request header.

Session model
-------------
Serverless functions are stateless and may run on different instances, so an
in-memory session dict would not survive. The session is therefore a signed
cookie: the token is stored client-side but sealed with HMAC using a server
secret, so the browser cannot read or forge it.
"""
import base64
import hashlib
import hmac
import json
import os
import time
from urllib.parse import urlencode, urlsplit, urlunsplit, parse_qsl, unquote
from urllib.request import Request, build_opener
from urllib.error import HTTPError, URLError


# --- Application identity -------------------------------------------------
# Hardcoded defaults so a fresh deployment works with no dashboard config.
# Environment variables still win when present.
APP_ID = os.environ.get("ZHIHU_OAUTH_APP_ID", "631").strip()
APP_KEY = os.environ.get("ZHIHU_OAUTH_APP_KEY", "12f62b6df12e47c0b3fee3e541c8f8a1").strip()

# Must byte-for-byte match the callback registered on the Zhihu console.
REDIRECT_URI = os.environ.get(
    "ZHIHU_OAUTH_REDIRECT_URI",
    "https://cove-fashion-platform.vercel.app/api/auth/callback",
).strip()

# Where to send the browser once login finishes. The site lives on Pages.
DEFAULT_FRONTEND_URL = "https://yanyang040707-ctrl.github.io/COVE-fashion/"
FRONTEND_URL = os.environ.get(
    "COVE_FRONTEND_URL",
    DEFAULT_FRONTEND_URL,
).strip() or DEFAULT_FRONTEND_URL


def safe_return_url(value):
    """Only return to this site's deployment, including its Pages subpath."""
    if not value or any(ord(char) < 32 for char in value) or "\\" in value:
        return FRONTEND_URL
    try:
        target = urlsplit(value)
        path = unquote(target.path)
        if target.username or target.password or "\\" in path or any(
            part in (".", "..") for part in path.split("/")
        ):
            return FRONTEND_URL
        for root in (DEFAULT_FRONTEND_URL, FRONTEND_URL):
            base = urlsplit(root)
            prefix = base.path.rstrip("/") + "/"
            if (target.scheme in ("https", "http")
                    and (target.scheme, target.netloc) == (base.scheme, base.netloc)
                    and target.path.startswith(prefix)):
                return value
    except ValueError:
        pass
    return FRONTEND_URL


def login_result_url(return_to, result, reason=None):
    target = urlsplit(safe_return_url(return_to))
    query = [(key, value) for key, value in parse_qsl(target.query, keep_blank_values=True)
             if key not in ("login", "reason")]
    query.append(("login", result))
    if reason:
        query.append(("reason", reason))
    return urlunsplit(target._replace(query=urlencode(query)))

AUTHORIZE_URL = "https://openapi.zhihu.com/authorize"
TOKEN_URL = "https://openapi.zhihu.com/access_token"
PROFILE_URL = "https://openapi.zhihu.com/user"
USER_API_BASE = "https://developer.zhihu.com"

COOKIE_NAME = "cove_zhihu_session"
SESSION_MAX_AGE = 8 * 3600


class AuthError(Exception):
    def __init__(self, status, code, message):
        super().__init__(message)
        self.status = status
        self.code = code
        self.message = message


def session_secret():
    """Key used to sign session cookies.

    A stable value keeps sessions valid across deployments. The fallback is
    derived from app_key so the app still works without extra configuration;
    it is not a user credential.
    """
    configured = os.environ.get("COVE_SESSION_SECRET", "").strip()
    if configured:
        return configured.encode()
    return hashlib.sha256(("cove-session:" + APP_KEY).encode()).digest()


def seal(payload):
    """Serialize a session dict into a tamper-evident cookie value."""
    raw = base64.urlsafe_b64encode(json.dumps(payload).encode()).rstrip(b"=")
    mac = hmac.new(session_secret(), raw, hashlib.sha256).digest()
    tag = base64.urlsafe_b64encode(mac).rstrip(b"=")[:32]
    return (raw + b"." + tag).decode()


def unseal(value):
    """Return the session dict, or None when absent/expired/tampered."""
    if not value or "." not in value:
        return None
    raw, _, tag = value.rpartition(".")
    expected = hmac.new(session_secret(), raw.encode(), hashlib.sha256).digest()
    expected_tag = base64.urlsafe_b64encode(expected).rstrip(b"=")[:32].decode()
    # Constant-time compare: a fast-exit check would leak the signature.
    if not hmac.compare_digest(tag, expected_tag):
        return None
    try:
        padding = "=" * (-len(raw) % 4)
        payload = json.loads(base64.urlsafe_b64decode(raw + padding))
    except (ValueError, TypeError):
        return None
    if not isinstance(payload, dict):
        return None
    if payload.get("exp") and payload["exp"] <= time.time():
        return None
    return payload


def read_cookie(environ, name):
    for part in (environ.get("HTTP_COOKIE") or "").split(";"):
        key, _, value = part.strip().partition("=")
        if key == name:
            return value
    return None


def cookie_header(value, max_age):
    """Build a Set-Cookie for a cross-site XHR session.

    SameSite=None is required because the page (github.io) and this API
    (vercel.app) are different sites; such cookies must also be Secure.
    """
    if value is None:
        return f"{COOKIE_NAME}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=None"
    return (
        f"{COOKIE_NAME}={value}; Path=/; Max-Age={max_age}; "
        "HttpOnly; Secure; SameSite=None"
    )


def http_json(url, method="GET", headers=None, data=None, timeout=20):
    request = Request(url, data=data, method=method)
    for key, value in (headers or {}).items():
        request.add_header(key, value)
    try:
        with build_opener().open(request, timeout=timeout) as response:
            body = response.read()
    except HTTPError as exc:
        detail = exc.read().decode("utf-8", "replace")[:200]
        raise AuthError(502, "UPSTREAM_ERROR", f"知乎接口返回 {exc.code}：{detail}")
    except (URLError, OSError) as exc:
        raise AuthError(502, "UPSTREAM_UNREACHABLE", f"无法连接知乎接口：{exc}")
    try:
        return json.loads(body)
    except ValueError:
        raise AuthError(502, "UPSTREAM_FORMAT", "知乎接口返回了无法解析的响应。")


def access_secret():
    """Open-platform Access Secret, reused from the existing server module."""
    try:
        import server
        return server.credentials()
    except Exception:
        secret = os.environ.get("ZHIHU_ACCESS_SECRET", "").strip()
        if not secret:
            raise AuthError(503, "AUTH_REQUIRED", "搜索服务尚未配置授权。")
        return secret


def build_authorize_url(state):
    return AUTHORIZE_URL + "?" + urlencode({
        "app_id": APP_ID,
        "redirect_uri": REDIRECT_URI,
        "response_type": "code",
        "state": state,
    })


def exchange_code(code):
    """Trade a one-shot authorization_code for an OAuth access token."""
    form = urlencode({
        "app_id": APP_ID,
        "app_key": APP_KEY,
        "grant_type": "authorization_code",
        "redirect_uri": REDIRECT_URI,
        "code": code,
    }).encode()
    payload = http_json(
        TOKEN_URL,
        method="POST",
        headers={"Content-Type": "application/x-www-form-urlencoded"},
        data=form,
    )
    token = (
        payload.get("access_token")
        or (payload.get("data") or {}).get("access_token")
        or (payload.get("Data") or {}).get("access_token")
    )
    if not token:
        message = payload.get("message") or payload.get("Message") or "未获得授权令牌。"
        raise AuthError(502, "TOKEN_FAILED", str(message)[:200])
    expires_in = payload.get("expires_in") or (payload.get("data") or {}).get("expires_in")
    try:
        expires_in = int(expires_in)
    except (TypeError, ValueError):
        expires_in = SESSION_MAX_AGE
    return token, expires_in


def fetch_profile(token):
    """Best-effort profile lookup.

    The platform notes say /user has no published schema, so field names are
    probed defensively and a failure here must not break login itself.
    """
    try:
        payload = http_json(PROFILE_URL, headers={
            "Authorization": "Bearer " + access_secret(),
            "X-OAuth-Token": token,
            "X-Request-Timestamp": str(int(time.time())),
            "Content-Type": "application/json",
        })
    except AuthError:
        return None
    source = payload.get("data") or payload.get("Data") or payload.get("user")
    if not isinstance(source, dict):
        return None
    return {
        "name": source.get("name") or source.get("Fullname") or source.get("fullname"),
        "avatarUrl": source.get("avatar_url") or source.get("AvatarUrl"),
        "headline": source.get("headline") or source.get("Headline"),
        "url": source.get("url") or source.get("Url"),
        "urlToken": source.get("url_token") or source.get("UrlToken"),
    }


def user_api(token, path, query):
    """Call a user-data endpoint on behalf of the signed-in user."""
    url = USER_API_BASE + path + "?" + urlencode(query)
    payload = http_json(url, headers={
        "Authorization": "Bearer " + access_secret(),
        "X-OAuth-Token": token,
        "X-Request-Timestamp": str(int(time.time())),
        "Content-Type": "application/json",
    })
    if payload.get("Code") not in (0, None):
        message = payload.get("Message") or "用户数据接口调用失败。"
        raise AuthError(502, "USER_API_FAILED", str(message)[:200])
    data = payload.get("Data") or {}
    paging = data.get("Paging") or {}
    # NextOffset arrives as a string; parse strictly rather than truncating.
    next_offset = paging.get("NextOffset")
    try:
        next_offset = int(next_offset) if next_offset is not None else None
    except (TypeError, ValueError):
        next_offset = None
    return {
        "items": data.get("Items") or [],
        "paging": {
            "isEnd": bool(paging.get("IsEnd", True)),
            "nextOffset": next_offset,
            "totals": paging.get("Totals"),
        },
    }


def clamp(value, default, low, high):
    try:
        number = int(value)
    except (TypeError, ValueError):
        return default
    return max(low, min(high, number))
