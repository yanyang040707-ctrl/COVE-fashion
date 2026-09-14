import copy
import json
import unittest
from unittest.mock import MagicMock, patch
import server
from test_report import sample as shooting_sample


def sample(kind='palette'):
    colors = ['#AFC7BC', '#E8DDC7', '#818CA8', '#4E4C48']
    report = dict(type=kind, title='配色研究 · 视觉示例',
        summary='以下是用于验证报告呈现的示例配色，并非官方年度流行色结论。以低饱和色彩、材质对比与小面积强调色构建可落地的视觉方向，结合消费场景做小样验证，避免将创意建议误当成市场共识。',
        assumptions=['以都市日常服装为应用范围，以下内容为测试示例。'], source_note='AI 视觉示例，不含已核实的年度趋势结论。',
        cautions=['屏幕色值仅供参考，量产前需进行实物打样。'],
        context=[dict(name=name, detail='先明确使用场景和分析边界，再判断颜色如何落实到面料与品类；这是一份展示报告结构的示例，并不代表某年度已证实的市场趋势。',source_ids=[]) for name in ['研究范围', '目标人群', '阅读方法']],
        visual_stories=[dict(name=name, palette=colors[i:i+2]+[colors[0]], material='以哑光织物为基底，对比柔光缎面或细褶纹理。不同面料的反光会改变色彩观感，建议先在自然光与室内光下对照小样。', application='用主色形成大面积连续轮廓，辅色用于内搭，强调色用于包袋或细节。先以一个单品系列测试不同场景下的接受度，再调整搭配比例。', reason='通过同一通用材质图对照色彩，帮助比较冷暖关系与视觉重量。此图为创作示意，选择依据仍需结合实际用户反馈和可核实资料。',source_ids=[]) for i,name in enumerate(['柔和自然', '温暖层次', '冷静对比'])],
        watchlist=['观察不同材质在同一光源下是否保持预期色相。','比较小批量试穿反馈，而非仅凭社交平台点赞量。'])
    if kind == 'palette':
        report.update(colors=[dict(name='示例色 '+str(i+1),hex=color,mood='低饱和、柔和',usage='可用于日常单品，配合材质反差建立层次；实物打样后再确认。',source_ids=[]) for i,color in enumerate(colors)], combinations=[dict(name='日常组合',hexes=colors[:2],scene='主色约七成，辅色约三成，实际按单品面积调整。'),dict(name='层次组合',hexes=colors[2:],scene='以中性色为基底。')],materials=['对比丝光与哑光表面。'],applications=['从单品小样开始验证。'])
    else:
        report.update(signals=[dict(name='示例信号 '+str(i+1),detail='这是用于验证呈现的分析示例，需要来源进一步验证，不代表市场已形成共识。',confidence='低',source_ids=[]) for i in range(3)], visual_refs=[dict(name='方向 '+str(i+1),palette=colors[:2],mood='柔和、自然',tags=['纹理'],search='织物配色') for i in range(2)],drivers=['以生活方式变化为观察假设。'],keyitems=['用纹理形成细节。'],actions=['进行小规模用户验证。'])
    return report


class IndustryReportTests(unittest.TestCase):
    def test_validate_enhanced_and_legacy_reports(self):
        for kind in ('palette', 'trend'):
            report=sample(kind);server.validate_report(report,0)
            self.assertEqual(len(report['visual_stories']),3)
            for key in server.INDUSTRY_FIELDS: report.pop(key)
            server.validate_report(report,0)

    def test_reject_bad_colors_and_sources(self):
        for field,value in [('palette',['red','blue']),('source_ids',[1])]:
            report=sample();report['visual_stories'][0][field]=value
            with self.assertRaises(ValueError):server.validate_report(report,0)

    def test_shooting_drops_industry_fields(self):
        original=shooting_sample();report=copy.deepcopy(original)
        report.update({key:sample()[key] for key in server.INDUSTRY_FIELDS})
        server.validate_report(report,0)
        self.assertEqual(report,dict(original,type='shooting'))

    def test_prompt_and_budget_are_scoped(self):
        for query,enhanced in [('2026 年流行色报告',True),('2026 春夏女装趋势',True),('2026流行色拍摄方案',False),('上海 Y2K',False)]:
            server.REPORT_CACHE.clear();opener=MagicMock()
            opener.open.return_value.__enter__.return_value.read.return_value=json.dumps({'choices':[{'message':{'content':json.dumps(sample() if enhanced else shooting_sample())}}]}).encode()
            with patch('server.search',return_value={'items':[]}),patch('server.build_opener',return_value=opener):
                server.shooting_report(query)
            payload=json.loads(opener.open.call_args.args[0].data)
            self.assertEqual(payload['max_tokens'],6500 if enhanced else 3500)
            self.assertEqual('visual_stories' in payload['messages'][0]['content'],enhanced)
            self.assertEqual('visual_stories' in json.loads(payload['messages'][1]['content'])['输出结构'],enhanced)

if __name__=='__main__':unittest.main()
