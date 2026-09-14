import base64
import json
import unittest
from unittest.mock import patch
from api.community import public_config

class CommunityConfigTests(unittest.TestCase):
    def test_no_configuration(self):
        with patch.dict('os.environ',{},clear=True):self.assertEqual(public_config(),{'configured':False})
    def test_publishable_key(self):
        with patch.dict('os.environ',{'SUPABASE_URL':'https://test.supabase.co','SUPABASE_PUBLISHABLE_KEY':'sb_publishable_test'}):
            self.assertEqual(public_config()['url'],'https://test.supabase.co')
    def test_never_exposes_service_key(self):
        for key in ['sb_secret_test','ey.fake.token','', 'x.'+base64.urlsafe_b64encode(json.dumps({'role':'service_role'}).encode()).decode()+'.x']:
            with self.subTest(key=key),patch.dict('os.environ',{'SUPABASE_URL':'https://test.supabase.co','SUPABASE_PUBLISHABLE_KEY':key}):
                self.assertEqual(public_config(),{'configured':False})
    def test_legacy_anon_key(self):
        key='x.'+base64.urlsafe_b64encode(json.dumps({'role':'anon'}).encode()).decode()+'.x'
        with patch.dict('os.environ',{'SUPABASE_URL':'https://test.supabase.co','SUPABASE_PUBLISHABLE_KEY':key}):
            self.assertTrue(public_config()['configured'])
if __name__=='__main__':unittest.main()
