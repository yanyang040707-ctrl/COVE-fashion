"""Public connection settings only; authentication and RLS are enforced by Supabase."""
import os
import json
import base64
from http.server import BaseHTTPRequestHandler
from urllib.parse import urlsplit


def public_config():
    url = os.environ.get('SUPABASE_URL', '').strip().rstrip('/')
    key = os.environ.get('SUPABASE_PUBLISHABLE_KEY', '').strip()
    valid_key = key.startswith('sb_publishable_')
    if not valid_key:
        try:
            part = key.split('.')[1]
            valid_key = json.loads(base64.urlsafe_b64decode(part + '=' * (-len(part) % 4))).get('role') == 'anon'
        except (ValueError, IndexError, TypeError):
            pass
    parsed = urlsplit(url)
    if parsed.scheme != 'https' or not parsed.hostname or parsed.username or parsed.password or not valid_key:
        return {'configured': False}
    return {'configured': True, 'url': url, 'publishableKey': key}


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        body = json.dumps(public_config()).encode()
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)
