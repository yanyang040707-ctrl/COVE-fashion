/* =========================================
   RUNTIME CONFIGURATION
   =========================================

   COVE_API_BASE controls where the insight search/report requests go.

   The value is chosen automatically by hostname, so the same file works for
   both the local preview and the GitHub Pages deployment:

   - Local preview (127.0.0.1 / localhost): stays empty, so requests use
     same-origin relative paths. `python server.py` serves both the static
     files and the /api endpoints from one port.

   - Any other host (e.g. franchign.github.io): uses BACKEND_ORIGIN below,
     because GitHub Pages is static hosting and cannot execute server.py.

   >>> FILL THIS IN ONCE <<<
   Replace BACKEND_ORIGIN with the domain Vercel gives you after importing
   this repository, e.g. "https://cove-fashion-platform.vercel.app".
   No trailing slash.
========================================= */

var BACKEND_ORIGIN = "https://REPLACE-WITH-YOUR-PROJECT.vercel.app";

(function () {
    var host = window.location.hostname;
    var isLocal = host === "127.0.0.1" || host === "localhost" || host === "";
    window.COVE_API_BASE = isLocal ? "" : BACKEND_ORIGIN.replace(/\/+$/, "");
})();
