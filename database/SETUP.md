# COVE 作品与合作机会云端保存

代码已提供 Supabase Auth + Postgres + Storage 接入。执行以下配置后，作品和合作机会才会真实发布。数据库和图片独立于前端/Vercel 部署，正常重新部署不会删除它们。

## 1. 创建或选择 Supabase 项目

在自己的 Supabase 账号中创建项目，保存数据库密码。项目区域按实际访客选择。不要把密码或 service-role/secret key 写入网页。

## 2. 初始化数据库与图片桶

在 SQL Editor 执行本目录的 `community.sql`。它建立 `cove_posts` 表、`cove-media` 图片桶和访问策略：

- 所有人可读取已发布作品和合作机会。
- 登录者只能发布自己的记录、上传自己目录下的图片。
- 只有发布者能删除自己的记录和图片。

图片按用户 ID 分目录，公开内容对应公开图片桶。此脚本只需初始化一次，不要在每次部署时清空表或图片桶。

## 3. 配置邮箱验证码

启用 Email 登录，在 Authentication 的 Email Templates 中，将 Magic Link 模板改为包含验证码 `{{ .Token }}`，例如：

```html
<h2>登录 COVE</h2>
<p>你的验证码：{{ .Token }}</p>
<p>请在 COVE 登录面板输入验证码。如果不是你发起的操作，请忽略此邮件。</p>
```

本网站使用验证码输入，无需 OAuth 回跳。开放给普通用户前需要配置自己的 SMTP 发信服务；Supabase 默认发信服务有收件人和发送额度限制，不能直接作为面向所有访客的生产邮件服务。

官方说明：[邮箱验证码](https://supabase.com/docs/guides/auth/auth-email-passwordless)、[SMTP 配置](https://supabase.com/docs/guides/auth/auth-smtp)。

## 4. 配置 Vercel

为当前后端项目的 Production 环境设置：

| 环境变量 | 内容 |
| --- | --- |
| `SUPABASE_URL` | Supabase Project URL，例如 `https://项目标识.supabase.co` |
| `SUPABASE_PUBLISHABLE_KEY` | 项目 Publishable key（`sb_publishable_...`）；兼容旧版 anon key |

不使用 service-role key。前端需要公开连接信息，`/api/community` 只返回上述公开 URL 和 publishable/anon key；写入权限由数据库和图片桶的策略控制。

重新部署 Vercel 和 GitHub Pages。访问后端 `/api/community` 应返回 `configured: true`。它只验证配置格式，不代表数据库和邮件服务已配置完成。

## 5. 上线验收（必须在真实项目执行）

1. 使用自己的邮箱登录，发布一件带两张图片的作品。
2. 刷新页面，再登录同一账号，确认作品和图片仍在。
3. 在另一浏览器以访客身份打开灵感页，确认能看到作品。
4. 使用另一账号确认无法删除第一个账号的作品；数据库策略也应拒绝越权删除。
5. 发布合作机会，刷新确认职位页和本人主页均可读取。
6. 重新部署前后确认记录与图片未变化。
7. 网络断开时发布不能出现成功页，已有草稿应保留。

本地自动化测试使用模拟云端，无法代替真实项目的数据库策略、邮件投递和重新部署验收。作品/项目保存已接入云端；原站点的合作申请、关注和个人简介编辑是独立功能，不属于本次持久化范围。
