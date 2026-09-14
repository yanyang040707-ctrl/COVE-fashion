"""Regression tests for the Pages migration and the OAuth redirect round trip."""
import unittest
from unittest.mock import Mock, patch
from urllib.parse import parse_qs, urlsplit

import zhihu_oauth as oauth
from api.auth.index import handler


class RedirectTests(unittest.TestCase):
    def setUp(self):
        frontend = patch.object(oauth, 'FRONTEND_URL', oauth.DEFAULT_FRONTEND_URL)
        frontend.start()
        self.addCleanup(frontend.stop)

    def request(self, path, cookie=''):
        request = handler.__new__(handler)
        request.path = path
        request.headers = {'Cookie': cookie}
        request._send = Mock()
        return request

    def test_login_preserves_target_in_signed_cookie_and_provider_callback(self):
        target = oauth.DEFAULT_FRONTEND_URL + '?view=saved#profile'
        request = self.request('/api/auth/login?return_to=' + oauth.urlencode({'': target})[1:])
        request.do_GET()
        response = request._send.call_args.kwargs
        session = oauth.unseal(response['cookie'].split(';')[0].split('=', 1)[1])
        self.assertEqual(session['return_to'], target)
        self.assertIn('exp', session)
        query = parse_qs(urlsplit(response['location']).query)
        self.assertEqual(query['redirect_uri'], [oauth.REDIRECT_URI])
        self.assertEqual(query['state'], [session['state']])

    def callback(self, query, session=None):
        cookie = oauth.COOKIE_NAME + '=' + oauth.seal(session or {})
        request = self.request('/api/auth/callback?' + oauth.urlencode(query), cookie)
        with patch.object(oauth, 'exchange_code', return_value=('test-token', 3600)), \
                patch.object(oauth, 'fetch_profile', return_value={'name': 'Test'}):
            request.do_GET()
        return request._send.call_args

    def test_success_returns_to_original_url_with_query_and_fragment(self):
        response = self.callback({'code': 'test-code', 'state': 'test-state'}, {
            'state': 'test-state',
            'return_to': oauth.DEFAULT_FRONTEND_URL + '?view=saved&login=error&reason=old#profile',
        })
        self.assertEqual(response.args[0], 302)
        target = urlsplit(response.kwargs['location'])
        self.assertEqual(target.path, '/COVE-fashion/')
        self.assertEqual(target.fragment, 'profile')
        self.assertEqual(parse_qs(target.query), {'view': ['saved'], 'login': ['success']})
        self.assertNotIn('test-token', response.kwargs['location'])
        self.assertIn('HttpOnly', response.kwargs['cookie'])

    def test_missing_session_uses_new_pages_site(self):
        response = self.callback({'code': 'test-code'})
        self.assertEqual(response.kwargs['location'], oauth.DEFAULT_FRONTEND_URL + '?login=success')

    def test_errors_return_to_same_page(self):
        target = oauth.DEFAULT_FRONTEND_URL + '?view=saved#profile'
        for query, reason in (({}, 'missing_code'),
                              ({'code': 'test', 'state': 'wrong'}, 'state_mismatch')):
            with self.subTest(reason=reason):
                response = self.callback(query, {'return_to': target, 'state': 'expected'})
                self.assertEqual(response.kwargs['location'],
                                 oauth.DEFAULT_FRONTEND_URL + '?view=saved&login=error&reason=' + reason + '#profile')

    def test_failed_exchange_returns_to_same_page(self):
        target = oauth.DEFAULT_FRONTEND_URL + '?view=saved#profile'
        request = self.request('/api/auth/callback?code=test', oauth.COOKIE_NAME + '=' +
                               oauth.seal({'return_to': target}))
        with patch.object(oauth, 'exchange_code', side_effect=oauth.AuthError(502, 'ERROR', 'test')):
            request.do_GET()
        self.assertEqual(request._send.call_args.kwargs['location'],
                         oauth.DEFAULT_FRONTEND_URL + '?view=saved&login=error&reason=token_failed#profile')

    def test_untrusted_destinations_fall_back(self):
        for value in (None, '//evil.example/', 'javascript:alert(1)',
                      'https://evil.example/',
                      'https://yanyang040707-ctrl.github.io.evil.example/COVE-fashion/',
                      'https://evil@yanyang040707-ctrl.github.io/COVE-fashion/',
                      'https://yanyang040707-ctrl.github.io/other-repo/',
                      oauth.DEFAULT_FRONTEND_URL + '../other-repo/',
                      oauth.DEFAULT_FRONTEND_URL + '%2e%2e/other-repo/',
                      oauth.DEFAULT_FRONTEND_URL + '\r\nLocation: https://evil.example',
                      'https://[invalid'):
            with self.subTest(value=value):
                self.assertEqual(oauth.safe_return_url(value), oauth.DEFAULT_FRONTEND_URL)

    def test_configured_frontend_retains_its_path(self):
        with patch.object(oauth, 'FRONTEND_URL', 'https://cove.example/site/'):
            target = 'https://cove.example/site/index.html?q=test#saved'
            self.assertEqual(oauth.safe_return_url(target), target)
            self.assertEqual(oauth.safe_return_url(oauth.DEFAULT_FRONTEND_URL), oauth.DEFAULT_FRONTEND_URL)
            self.assertEqual(oauth.login_result_url(None, 'success'),
                             'https://cove.example/site/?login=success')


if __name__ == '__main__':
    unittest.main()
