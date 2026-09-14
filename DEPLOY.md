# 部署说明

前端是纯静态站点，搜索功能需要后端。两者可以分开部署。

## 为什么需要这样拆

`/api/insights/report` 需要一个能执行 Python 的服务：它调用知乎搜索、再调用模型生成报告。GitHub Pages 只能返回静态文件，不运行代码，所以线上搜索必须指向一个独立的后端。

---

## 方式一：本地预览（开箱即用）

先在仓库根目录创建 `.env.local`（已被 `.gitignore` 忽略，不会提交）：

```
ZHIHU_ACCESS_SECRET=你的知乎 Access Secret
COVE_AI_API_KEY=你的模型密钥
```

然后启动：

```bash
python server.py --port 8765
```

`docs/config.js` 中 `COVE_API_BASE` 默认为空字符串，前端走同源相对路径，由 `server.py` 同时提供页面和接口。

---

## 方式二：GitHub Pages + Vercel 云函数

静态页面留在 GitHub Pages，接口部署到 Vercel。

### 1. 部署后端

在 [vercel.com](https://vercel.com) 导入本仓库。仓库已包含 `vercel.json` 和 `api/insights/report.py`，Vercel 会自动识别为 Python 函数。

### 2. 配置环境变量

在 Vercel 项目的 **Settings → Environment Variables** 添加：

| 变量名 | 说明 |
|---|---|
| `ZHIHU_ACCESS_SECRET` | 知乎开放平台 Access Secret |
| `COVE_AI_API_KEY` | 模型服务密钥 |
| `COVE_AI_MODEL` | 可选，模型名称 |
| `COVE_ALLOWED_ORIGINS` | 允许调用的前端地址，逗号分隔 |

`COVE_ALLOWED_ORIGINS` 必须填写，否则所有请求都会被拒绝（返回 403）。例如：

```
https://franchign.github.io,http://127.0.0.1:8765
```

注意结尾不要带斜杠。

### 3. 让前端指向后端

部署完成后 Vercel 会给出一个域名。编辑 `docs/config.js`：

```js
window.COVE_API_BASE = "https://你的项目名.vercel.app";
```

提交并推送，GitHub Pages 更新后即可使用。

### 4. 验证

浏览器打开 `https://你的项目名.vercel.app/api/insights/report`，正常应返回：

```json
{
  "ok": true,
  "endpoint": "/api/insights/report",
  "method": "POST",
  "zhihu_secret_configured": true,
  "allowed_origin_count": 2
}
```

`zhihu_secret_configured` 为 `false` 说明环境变量没生效；`allowed_origin_count` 为 `0` 说明来源白名单没配。

---

## 常见问题

**提示「无法连接搜索服务」**

- `config.js` 里的地址是否填对、是否已推送
- Vercel 环境变量是否配置完整
- 浏览器控制台若显示 CORS 错误，检查 `COVE_ALLOWED_ORIGINS` 是否包含当前站点地址

**报告生成超时**

`vercel.json` 已将超时设为 300 秒。免费额度的上限更低，如果经常超时需要升级套餐，或改用 Render、Fly.io 等长时任务更宽松的平台。

---

## 安全提醒

**密钥绝不能放进 `docs/` 里的任何文件。** GitHub Pages 是静态托管，`docs/` 下的所有内容（包括 `config.js`）浏览器都能直接打开查看。任何写进前端的密钥等同于公开发布，且会被爬虫自动扫走。

正确的做法只有一种：密钥存放在后端平台（Vercel）的环境变量中，浏览器只知道后端地址，不接触密钥本身。

### 已泄露密钥的处理

本仓库此前在 `server.py` 中硬编码了 `ZHIHU_ACCESS_SECRET` 和 `COVE_AI_API_KEY` 的默认值。由于仓库是公开的，**这两个值必须视为已泄露**：

1. 到知乎开放平台和模型服务商后台，**吊销旧密钥并重新签发**；
2. 把新密钥只填到 Vercel 的环境变量里；
3. 注意：这些值仍留在 Git 历史记录中，仅删除当前文件无法清除。吊销旧密钥是唯一可靠的补救措施。
