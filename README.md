# COVE-fashion-platform
COVE fashion creative platform prototype

## 本地知乎搜索预览

需要 Python 3.9+，无需额外 Python 依赖。安装知乎官方 CLI 并通过
`auth set --secret-stdin` 将 Access Secret 保存到系统密钥链后，在仓库目录运行：

```sh
python3 server.py
```

打开 http://127.0.0.1:8765 ，在「洞察」输入关键词并点击搜索或按回车。
此服务同时提供 `docs/` 静态页面与 `POST /api/insights/search`，请求体为
`{"query":"新中式 时尚"}`，返回 `query`、`items`（title、author、summary、url）、`cached`、`source`。
不要再用纯静态 `http.server` 启动搜索预览；端口占用时先停止旧服务，或使用 `--port 8766`。

默认 CLI 路径为 macOS 的 `~/Library/Application Support/zhihu-cli/current/zhihu-cli`。
其他安装位置可通过 `ZHIHU_CLI_PATH` 指定绝对路径。服务进程必须能访问系统密钥链；
沙箱中运行可能无法读取凭证，可在本机终端运行。不要将 Access Secret 写入网页或仓库。

每次返回最多 6 条摘要；相同查询在进程内缓存 5 分钟（最多 100 项），新查询间隔至少 2 秒，
并串行调用 CLI。CLI 超时 25 秒，后端最迟 30 秒终止调用。搜索会消耗知乎接口额度，
失败时不会自动重试。重启会清空缓存。仅绑定本机地址，不适合作为公网生产服务。

验证：`python3 -m unittest test_server.py`（使用模拟响应，不消耗额度）。


## 开发者首次鉴权（macOS）

每位开发者在自己的电脑上安装知乎 CLI，并配置自己的 Access Secret。
克隆本仓库不会携带密钥或 CLI；项目后端调用 CLI，CLI 从当前系统用户的密钥链读取凭证。
以下命令在本机终端运行，不需要将密钥交给其他开发者。

### 1. 安装并确认 CLI

准备 Python 3.9+，从[知乎开放平台](https://developer.zhihu.com/)获取官方知乎 Skill 安装包并解压。
安装包应包含 `SKILL.md`、`manifest.json` 和 `scripts/setup.sh`；本仓库不包含该安装包。
如果解压目录为 `~/Downloads/zhihu`，运行以下命令；实际目录不同时请替换路径：

```bash
bash "$HOME/Downloads/zhihu/scripts/setup.sh"
```

安装脚本下载匹配当前电脑的 CLI，并校验安装包；不需要 sudo 或修改 PATH。
本项目已验证 CLI 0.6.0。默认安装位置及检查命令如下：

```bash
"$HOME/Library/Application Support/zhihu-cli/current/zhihu-cli" version
```

若安装程序返回不同的 `binary_path`，后续命令请使用该绝对路径，并在启动后端前设置：

```bash
# 将示例替换为安装程序返回的绝对路径
export ZHIHU_CLI_PATH="/absolute/path/to/zhihu-cli"
```

### 2. 申请 Access Secret

打开[知乎开放平台个人中心](https://developer.zhihu.com/profile)，用自己的知乎账号登录，
点击「申请新 Access Secret」。如果账号尚未获得接口权限，请按平台页面提示申请。
Access Secret 是开放平台接口凭证，不是知乎登录密码。

### 3. 安全写入本机密钥链

将下面整段命令复制到终端，然后在提示出现后粘贴密钥并按回车。输入过程不显示字符，属于正常现象。
密钥通过标准输入传给 CLI，不需要替换下方代码中的任何内容。

```bash
/bin/bash -c '
read -r -s -p "请输入知乎 Access Secret: " zhihu_secret
printf "\n"
printf "%s" "$zhihu_secret" |
  "${ZHIHU_CLI_PATH:-$HOME/Library/Application Support/zhihu-cli/current/zhihu-cli}" auth set --secret-stdin
zhihu_result=$?
unset zhihu_secret
exit "$zhihu_result"
'
```

CLI 会发起一次本人内容接口请求验证凭证，这可能消耗接口额度；验证通过后才保存到系统密钥链。
成功结果包含 `ok: true`、`status: READY`、`source: keychain` 和 `verification: valid`，仅显示脱敏密钥。
验证失败不会覆盖原有凭证。若系统要求访问密钥链，请确认请求来自已安装的知乎 CLI。

### 4. 检查配置与在线验证

```bash
# 本地检查：不联网，不消耗业务额度
"${ZHIHU_CLI_PATH:-$HOME/Library/Application Support/zhihu-cli/current/zhihu-cli}" auth status

# 按需在线验证：请求知乎接口，可能消耗额度
"${ZHIHU_CLI_PATH:-$HOME/Library/Application Support/zhihu-cli/current/zhihu-cli}" auth status --verify
```

第 3 步成功即已做过在线验证，无需每次启动都重复执行 `--verify`。
本地检查只能证明存在配置，不能保证密钥未被撤销、网络可用或搜索额度充足。

### 5. 验证项目搜索

在本仓库根目录运行：

```bash
python3 server.py
```

打开[本地预览](http://127.0.0.1:8765/)，进入「洞察」，输入「新中式 时尚」并点击搜索。
看到标题、作者、搜索摘要与知乎原文链接，即完成页面、后端、CLI 的端到端验证。
正常搜索会消耗搜索接口额度；缓存命中的相同查询不会再次调用 CLI。

也可以独立测试 CLI，定位是否为前后端接入问题：

```bash
"${ZHIHU_CLI_PATH:-$HOME/Library/Application Support/zhihu-cli/current/zhihu-cli}" search zhihu --query "新中式 时尚" --count 3
```

### 常见问题

| 现象 | 处理方式 |
| --- | --- |
| CLI 路径不存在 | 完成安装，检查安装程序返回的 `binary_path`；非默认路径设置 `ZHIHU_CLI_PATH`。 |
| `AUTH_REQUIRED` | 当前用户没有可用凭证，重新完成第 3 步。 |
| 密钥无效或被撤销 | 到个人中心申请新密钥，再执行第 3 步替换本地配置。 |
| `KEYCHAIN_UNAVAILABLE` | 在当前登录用户的本机终端操作，确认系统密钥链可用；沙箱或无桌面环境可能无法访问。 |
| `ENV_SHADOWS_KEYCHAIN` 或凭证来源为环境变量 | `ZHIHU_ACCESS_SECRET` 优先于密钥链。如需使用密钥链，在启动服务的同一终端执行 `unset ZHIHU_ACCESS_SECRET`，再重启服务。 |
| 页面提示无法连接搜索服务 | 使用 `python3 server.py` 启动后端；纯静态预览服务不提供搜索接口。 |
| 网络超时、额度或频率限制 | 检查网络或个人中心用量，等待后再试，避免连续重试。 |
| 8765 端口被占用 | 停止旧预览服务，或执行 `python3 server.py --port 8766` 并访问对应端口。 |

### Linux、容器及其他无密钥链环境

本地快速开始按 macOS 编写。Linux 桌面的 CLI 使用 Secret Service/D-Bus；
无桌面容器或 CI 可由运行环境的密钥管理功能注入 `ZHIHU_ACCESS_SECRET`，
同时用 `ZHIHU_CLI_PATH` 指向该平台的 CLI。后端启动的 CLI 子进程会继承环境变量。
本项目没有自动读取 `.env` 的逻辑，也没有验证 Windows 本地流程。

环境变量优先于密钥链；环境变量无效时 CLI 不会自动回退到密钥链。
不要把真实密钥写入代码、README、终端命令参数、提交记录或共享日志。

### 更换与清除凭证

更换密钥时重新执行第 3 步。仅删除本机保存的凭证可执行：

```bash
"${ZHIHU_CLI_PATH:-$HOME/Library/Application Support/zhihu-cli/current/zhihu-cli}" auth logout
```

`auth logout` 不会撤销平台上的密钥，也不会清除 `ZHIHU_ACCESS_SECRET` 环境变量。
如需彻底停用密钥，请到知乎开放平台个人中心处理。
