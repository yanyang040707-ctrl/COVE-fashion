import io
import json
import os
import unittest
from unittest.mock import patch, MagicMock
import server


def sample():
    return dict(title='拍摄方案', summary='视觉概念', source_note='AI 创作建议', assumptions=['半天'], styling=['银色配件'], schedule=['下午拍摄'], checklist=['查天气'], locations=[dict(name='上海',reason='城市质感',timing='下午',verify='核实许可',source_ids=[])], shots=[dict(title='低角度',location='上海',angle='low',framing='低机位',pose='行走',light='侧光',lens='35mm',source_ids=[]) for _ in range(3)])


class ReportTests(unittest.TestCase):
    def setUp(self):
        server.REPORT_CACHE.clear()

    def test_auth_payload_and_cache(self):
        opener=MagicMock()
        opener.open.return_value.__enter__.return_value.read.return_value=json.dumps({'choices':[{'message':{'content':json.dumps(sample())}}]}).encode()
        with patch.dict(os.environ, {'COVE_AI_API_KEY':'test-ai-secret'}), patch('server.search',return_value={'items':[]}), patch('server.build_opener',return_value=opener):
            result=server.shooting_report('上海 Y2K')
            self.assertTrue(result['warning'])
            self.assertEqual(server.shooting_report('上海 Y2K'),result)
            self.assertEqual(opener.open.call_count,1)
            request=opener.open.call_args.args[0]
            self.assertEqual(request.get_header('Authorization'),'Bearer test-ai-secret')
            self.assertNotIn('test-ai-secret',json.dumps(result))
            self.assertEqual(json.loads(request.data)['model'],'gpt-5.6-sol')

    def test_streaming_response(self):
        opener=MagicMock()
        content=json.dumps(sample())
        events=['data: '+json.dumps({'choices':[{'delta':{'content':part}}]}) for part in (content[:30],content[30:])]
        opener.open.return_value.__enter__.return_value.read.return_value=('\n\n'.join(events)+'\n\ndata: [DONE]\n').encode()
        with patch.dict(os.environ, {'COVE_AI_API_KEY':'test-key'}), patch('server.search',return_value={'items':[]}), patch('server.build_opener',return_value=opener):
            self.assertEqual(server.shooting_report('上海')['report']['title'],'拍摄方案')

    def test_disconnected_upstream(self):
        from http.client import RemoteDisconnected
        opener=MagicMock();opener.open.side_effect=RemoteDisconnected()
        with patch.dict(os.environ, {'COVE_AI_API_KEY':'test-key'}), patch('server.search',return_value={'items':[]}), patch('server.build_opener',return_value=opener):
            with self.assertRaises(server.APIError) as error:server.shooting_report('上海')
            self.assertEqual(error.exception.code,'AI_NETWORK')

    def test_invalid_source_and_angle(self):
        for field,value in [('source_ids',[99]),('angle','unknown')]:
            report=sample();report['shots'][0][field]=value
            with self.assertRaises(ValueError):server.validate_report(report,0)

    def test_missing_key(self):
        with patch.dict(os.environ,{'COVE_AI_API_KEY':''}):
            with self.assertRaises(server.APIError) as result:server.shooting_report('上海')
            self.assertEqual(result.exception.status,503)

    def test_route_and_origin(self):
        body=json.dumps({'query':'上海'}).encode()
        env={'PATH_INFO':'/api/insights/report','REQUEST_METHOD':'POST','HTTP_ORIGIN':'https://cove.example','CONTENT_TYPE':'application/json','CONTENT_LENGTH':str(len(body)),'wsgi.input':io.BytesIO(body)}
        statuses=[]
        with patch.dict(os.environ,{'COVE_PUBLIC_ORIGIN':'https://cove.example'}),patch('server.shooting_report',return_value={'report':sample()}) as generate:
            server.application(env,lambda status,headers:statuses.append(status))
            self.assertEqual(statuses[-1],'200 OK');generate.assert_called_once_with('上海')
            env['HTTP_ORIGIN']='https://other.example'
            server.application(env,lambda status,headers:statuses.append(status))
            self.assertEqual(statuses[-1],'403 Forbidden')

if __name__=='__main__':unittest.main()
