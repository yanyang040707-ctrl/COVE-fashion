import json
import subprocess
import unittest
from unittest.mock import patch
import server


class SearchTests(unittest.TestCase):
    def setUp(self):
        server.CACHE.clear()
        server.LAST_CALL = float("-inf")

    def result(self, items):
        return subprocess.CompletedProcess([], 0, json.dumps({"Code": 0, "Data": {"Items": items}}), "")

    def test_arguments_cache_and_untrusted_links(self):
        query = '新中式; $(echo unsafe)'
        with patch('server.subprocess.run', return_value=self.result([
            {"Title": "观点", "Url": "https://www.zhihu.com/question/1", "ContentText": "摘要"},
            {"Url": "javascript:alert(1)"}, {"Url": "https://zhihu.com.evil.test/"},
        ])) as run:
            first = server.search(query)
            self.assertEqual(len(first['items']), 1)
            self.assertIn(query, run.call_args.args[0])
            self.assertNotIn('shell', run.call_args.kwargs)
            self.assertTrue(server.search(query)['cached'])
            self.assertEqual(run.call_count, 1)

    def test_timeout(self):
        with patch('server.subprocess.run', side_effect=subprocess.TimeoutExpired('cli', 30)):
            with self.assertRaises(server.APIError) as error:
                server.search('时尚')
            self.assertEqual(error.exception.status, 504)

    def test_errors_do_not_leak_diagnostics(self):
        result = subprocess.CompletedProcess([], 1, '{"ok":false,"error":{"code":"AUTH_REQUIRED","message":"sensitive diagnostic"}}', '')
        with patch('server.subprocess.run', return_value=result):
            with self.assertRaises(server.APIError) as error:
                server.search('时尚')
            self.assertEqual(error.exception.code, 'AUTH_REQUIRED')
            self.assertNotIn('sensitive', error.exception.message)

    def test_rate_limit(self):
        with patch('server.subprocess.run', return_value=self.result([])):
            server.search('时尚')
            with self.assertRaises(server.APIError) as error:
                server.search('摄影')
            self.assertEqual(error.exception.status, 429)


if __name__ == '__main__':
    unittest.main()
