# COVE-fashion-platform

COVE 时尚创意平台。洞察搜索由 Python 后端直接调用知乎官方 HTTP API，
不再依赖知乎 CLI、Mac 或系统密钥链。本地与线上使用相同的前端接口。

## 请求链路

浏览器 → `POST /api/insights/search` → 知乎官方搜索 API。
后端发送 `GET https://developer.zhihu.com/api/v1/content/zhihu_search`，
查询参数为 `Query` 和 `Count=6`，请求头包含 `Authorization: Bearer ...`、
`X-Request-Timestamp`（Unix 秒）和 `Content-Type: application/json`。
后端保留 HTTPS 证书校验，拒绝重定向，不向浏览器暴露凭证或上游诊断信息。

协议依据：[知乎搜索文档](https://developer.zhihu.com/docs?key=zhihu_search)。

## 1. 配置服务器凭证

当前版本按项目所有者要求在 `server.py` 中内置默认 Access Secret，并随代码提交。未设置环境变量时使用内置值；设置 `ZHIHU_ACCESS_SECRET` 可覆盖内置值。可直接运行 `python3 server.py` 启动本地服务。下文环境变量步骤用于覆盖配置。

在[知乎开放平台个人中心](https://developer.zhihu.com/profile)登录并申请 Access Secret。
在部署平台的环境变量或 Secret 管理页面新增 **`ZHIHU_ACCESS_SECRET`**，值为密钥，
仅注入后端运行进程。不同开发环境和生产环境分别配置凭证。

本项目不会读取系统密钥链。直接运行 `python3 server.py` 时，若未设置 `ZHIHU_ACCESS_SECRET` 环境变量，会从项目根目录的 `.env.local` 读取同名配置。该文件已被 Git 忽略，且不会通过网页服务公开。部署使用的 WSGI 入口优先读取环境变量，未设置时使用代码内置值。
内置密钥仅由 Python 后端使用，不写入前端页面。
密钥轮换后重启服务，清除旧进程与缓存。

| 环境变量 | 用途 |
| --- | --- |
| `ZHIHU_ACCESS_SECRET` | 可选，覆盖代码内置的知乎开放平台凭证 |
| `COVE_PUBLIC_ORIGIN` | 线上必需，例如 `https://cove.example.com`，不带路径；用于校验浏览器请求来源 |

显式将密钥环境变量设为空值时搜索返回 HTTP 503 / `AUTH_REQUIRED`；这与空搜索结果不同。
配置存在不代表凭证有效，必须通过第 4 步的真实搜索验证。

## 2. 本地运行

需要 Python 3.9+。本地开发服务无需安装额外依赖。在仓库根目录执行以下整段命令，
提示出现后粘贴密钥并按回车；输入不可见，密钥只进入本次服务进程环境：

```bash
/bin/bash -c '
read -r -s -p "请输入知乎 Access Secret: " ZHIHU_ACCESS_SECRET
printf "\n"
export ZHIHU_ACCESS_SECRET
python3 server.py
'
```

打开 [http://127.0.0.1:8765/](http://127.0.0.1:8765/)，在「洞察」搜索。
如果已经由开发环境注入密钥，直接运行 `python3 server.py`。
端口占用可用 `python3 server.py --port 8766`。开发服务器仅监听本机，不能用于公网生产流量。

## 3. 线上部署

后端提供标准 WSGI 入口 `server:application`。Linux 服务器或容器可使用 Gunicorn，
在 HTTPS 反向代理或部署平台网关后运行：

```bash
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
# 先在部署平台配置 ZHIHU_ACCESS_SECRET；此处仅设置公开站点地址
export COVE_PUBLIC_ORIGIN="https://cove.example.com"
gunicorn --bind 0.0.0.0:8000 --workers 1 --threads 4 --timeout 40 server:application
```

将示例域名替换为真实域名。网关应终止 HTTPS，将同一域名下的页面和 `/api/` 请求转发到服务端口，
并限制请求体至 4 KB、请求读取时间和客户端请求频率。服务端口仅供网关或平台内部网络访问。
页面与接口同源，因此前端代码不需要修改地址，也不需要在浏览器配置密钥。

当前使用单进程内存缓存与限流，部署命令明确只启动一个 worker。增加 worker 或副本前，
需将缓存与限流迁移到共享存储，并在网关加入按用户/IP 的限流或访问控制，避免耗尽共享接口额度。
Origin 检查不是用户身份认证，非浏览器客户端可以直接调用公开接口。

Gunicorn 运行说明：[官方文档](https://gunicorn.org/run/)。
GitHub Pages 只能托管静态文件，无法运行此 Python 后端；需使用支持 Python 服务的部署平台。
本仓库提供接入和启动方案，未自动创建云服务或发布公网地址。

## 4. 鉴权及端到端验证

服务启动后，执行一次真实搜索；它会消耗知乎搜索额度，不会读取本人创作来预检：

```bash
curl --fail-with-body http://127.0.0.1:8765/api/insights/search \
  -H 'Content-Type: application/json' \
  --data '{"query":"新中式 时尚"}'
```

线上将地址替换为 `https://你的域名/api/insights/search`。HTTP 200 且返回 `items` 数组表示链路正常，
数组为空也可能是正常搜索结果。随后在网页确认结果标题、作者、摘要及原文链接。
无需安装 CLI，也无需执行 `auth set` 或 `auth status`。

接口契约保持不变：

```json
{
  "query": "新中式 时尚",
  "items": [{"title": "标题", "author": "作者", "summary": "搜索摘要", "url": "https://www.zhihu.com/question/123"}],
  "cached": false,
  "source": "知乎"
}
```

以上为格式示例，不是真实搜索结果。失败格式为 `{"error":{"code":"错误码","message":"提示"}}`。

## 缓存、限流与错误

每次最多 6 条结果；相同查询缓存 5 分钟，最多 100 项；新查询间隔至少 2 秒。
已有上游搜索进行时，新请求返回 429，不无限排队。每次上游网络操作超时为 25 秒，失败不自动重试。
Gunicorn 的 worker timeout 用于进程管理，不是严格的每请求总时限；网关应另行配置请求超时。

| 状态 / 错误 | 排查 |
| --- | --- |
| 400 | 搜索词须为 1–200 字，JSON 请求体不得超过 4 KB |
| 403 / `FORBIDDEN` | 检查 `COVE_PUBLIC_ORIGIN` 与浏览器实际协议、域名、端口是否一致 |
| 503 / `AUTH_REQUIRED` | 密钥为空、格式无效，或知乎返回 401/403；检查凭证和账号接口权限 |
| 429 | 本地并发/频率受限，或知乎配额/频率受限；停止重复请求并检查平台用量 |
| 502 | 网络故障、上游业务错误或响应异常；检查知乎开放平台与网络 |
| 504 | 上游网络超时，稍后手动重试 |

服务器时钟须准确，否则秒级时间戳鉴权可能失败。日志和浏览器响应不会输出完整 Access Secret。

## 测试

```bash
python3 -B -m unittest test_server.py
```

测试使用模拟 HTTP 响应，不消耗额度；覆盖鉴权请求头、查询编码、缓存、链接过滤、
缺失凭证、HTTP 错误、超时、前端接口契约和来源校验。


## 拍摄方案生成

洞察搜索现在调用 `POST /api/insights/report`，先检索知乎摘要，再通过截图指定的 OpenAI 兼容服务生成结构化拍摄方案。原 `/api/insights/search` 保留。

模型服务固定使用 `https://api.openai-next.com/v1/chat/completions`，模型默认 `gpt-5.6-sol`。按项目所有者要求，模型 API 密钥已内置在 `server.py` 并随仓库提交，无需额外配置即可调用。`COVE_AI_API_KEY` 与 `COVE_AI_MODEL` 环境变量可覆盖默认值；本地也支持 `.env.local` 覆盖。密钥仅供后端调用，不返回前端。

报告包含策划假设、真实地点建议、待核实事项、造型、分镜、通用机位示意、行程和准备清单，以及知乎摘要原文链接。机位图为构图示意，不是实景图。没有知乎结果或检索失败时明确标注 AI 建议；不将其呈现为知乎结论。方案支持下载 Markdown。

单次生成允许最多 150 秒模型等待，加上知乎搜索时间；部署应将 Gunicorn 的 `--timeout` 和网关请求超时调整为至少 210 秒。前端等待上限 190 秒。报告按问题缓存 10 分钟，仅允许一次模型生成并发；该限流和缓存为单进程设计。

验证：`python3 -B -m unittest test_server.py test_report.py`。模型未授权、额度受限、超时或返回格式不完整时页面显示失败原因，可再次点击生成重试。
