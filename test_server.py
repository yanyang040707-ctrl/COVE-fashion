import io
import json
import os
import unittest
from urllib.error import HTTPError
from urllib.parse import parse_qs, urlsplit
from unittest.mock import patch, MagicMock
import server


class SearchTests(unittest.TestCase):
    def setUp(self):
        server.CACHE.clear()
        server.LAST_CALL = float('-inf')
        self.env = patch.dict(os.environ, {'ZHIHU_ACCESS_SECRET': 'test-placeholder', 'COVE_PUBLIC_ORIGIN': 'https://cove.example'})
        self.env.start()
        self.addCleanup(self.env.stop)

    def payload(self):
        return {'Code': 0, 'Data': {'Items': [
            {'Title': '观点', 'Url': 'https://www.zhihu.com/question/1', 'ContentText': '摘要'},
            {'Url': 'javascript:alert(1)'}, {'Url': 'https://zhihu.com.evil.test/'}]}}

    def test_http_auth_and_query(self):
        opener = MagicMock()
        opener.open.return_value.__enter__.return_value.read.return_value = json.dumps(self.payload()).encode()
        with patch('server.build_opener', return_value=opener), patch('server.time.time', return_value=1234567890):
            result = server.fetch_zhihu('新中式 & 时尚')
        request = opener.open.call_args.args[0]
        self.assertEqual(request.get_header('Authorization'), 'Bearer test-placeholder')
        self.assertEqual(request.get_header('X-request-timestamp'), '1234567890')
        self.assertEqual(parse_qs(urlsplit(request.full_url).query)['Query'], ['新中式 & 时尚'])
        self.assertNotIn('test-placeholder', request.full_url)
        self.assertEqual(result['Code'], 0)

    def test_cache_and_links(self):
        with patch('server.fetch_zhihu', return_value=self.payload()) as fetch:
            self.assertEqual(len(server.search('时尚')['items']), 1)
            self.assertTrue(server.search('时尚')['cached'])
            self.assertEqual(fetch.call_count, 1)

    def test_missing_secret(self):
        with patch.dict(os.environ, {'ZHIHU_ACCESS_SECRET': ''}), patch('server.build_opener') as open_mock:
            with self.assertRaises(server.APIError) as error:
                server.search('时尚')
            self.assertEqual(error.exception.status, 503)
            open_mock.assert_not_called()

    def test_upstream_errors(self):
        for upstream, expected in [(401,503), (403,503), (429,429), (500,502), (302,502)]:
            opener = MagicMock()
            opener.open.side_effect = HTTPError(server.ENDPOINT, upstream, 'sensitive diagnostic', {}, None)
            with patch('server.build_opener', return_value=opener):
                with self.assertRaises(server.APIError) as error:
                    server.fetch_zhihu('时尚')
                self.assertEqual(error.exception.status, expected)
                self.assertNotIn('sensitive', error.exception.message)

    def test_timeout(self):
        opener = MagicMock()
        opener.open.side_effect = TimeoutError()
        with patch('server.build_opener', return_value=opener):
            with self.assertRaises(server.APIError) as error:
                server.fetch_zhihu('时尚')
            self.assertEqual(error.exception.status, 504)

    def call_app(self, path, body, origin='https://cove.example'):
        raw = json.dumps(body).encode()
        env = {'PATH_INFO': path, 'REQUEST_METHOD': 'POST', 'CONTENT_TYPE': 'application/json',
               'CONTENT_LENGTH': str(len(raw)), 'wsgi.input': io.BytesIO(raw), 'HTTP_ORIGIN': origin}
        response = []
        output = server.application(env, lambda status, headers: response.append(status))
        return response[0], json.loads(b''.join(output))

    def test_frontend_contract_and_origin(self):
        with patch('server.fetch_zhihu', return_value=self.payload()):
            status, body = self.call_app('/api/insights/search', {'query': '时尚'})
            self.assertEqual(status, '200 OK')
            self.assertEqual(set(body), {'query','items','cached','source'})
            self.assertEqual(set(body['items'][0]), {'title','author','summary','url'})
        self.assertTrue(self.call_app('/api/insights/search', {'query':'x'}, 'https://other.example')[0].startswith('403'))
        self.assertTrue(self.call_app('/api/insights/search', {'query':''})[0].startswith('400'))

    def test_rate_limit(self):
        with patch('server.fetch_zhihu', return_value=self.payload()):
            server.search('时尚')
            with self.assertRaises(server.APIError) as error:
                server.search('摄影')
            self.assertEqual(error.exception.status, 429)


if __name__ == '__main__':
    unittest.main()
