/* =========================================
   RUNTIME CONFIGURATION
   =========================================

   COVE_API_BASE controls where the insight search/report requests go.

   - Empty string (default): use same-origin relative paths. This is what the
     local `python server.py` preview needs, since it serves both the static
     files and the /api endpoints from 127.0.0.1:8765.

   - Absolute origin: point the browser at a deployed serverless backend, e.g.
     "https://cove-api.vercel.app". Use this for GitHub Pages, which is static
     hosting and cannot execute server.py.

   No secrets belong in this file. It ships to the browser, so anyone can read
   it. API keys live only in the serverless platform's environment variables.
========================================= */

window.COVE_API_BASE = "";
