// Run with Playwright installed: node test_profile_ui.cjs
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');

(async () => {
 const browser = await chromium.launch({
  headless: true,
  ...(process.env.COVE_TEST_CHROME ? { executablePath: process.env.COVE_TEST_CHROME } : {}),
 });
 try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  let authorized = true;
  let account = { name: '知乎测试用户', avatarUrl: 'https://avatar.test/user.svg' };
  await page.route('**/*', async route => {
   const url = new URL(route.request().url());
   if (url.hostname === 'avatar.test') {
    return route.fulfill({ contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="96" height="96" fill="#b8a2d8"/><circle cx="48" cy="38" r="20" fill="#30263b"/></svg>' });
   }
   if (url.origin !== 'http://127.0.0.1:8765') return route.abort();
   if (url.pathname === '/api/auth/status') {
    return route.fulfill({ json: { authorized, profile: authorized ? account : null } });
   }
   if (url.pathname === '/api/auth/logout') {
    authorized = false;
    return route.fulfill({ json: { ok: true } });
   }
   const file = path.join(__dirname, 'docs', url.pathname === '/' ? 'index.html' : url.pathname);
   if (!fs.existsSync(file)) return route.fulfill({ status: 404, body: '' });
   return route.fulfill({ path: file });
  });
  await page.goto('http://127.0.0.1:8765/?login=success');
  await page.waitForFunction(() => document.getElementById('panelProfileName').textContent === '知乎测试用户');
  await page.locator('#profileButton').click();
  assert.equal(await page.locator('#panelProfileAvatar img').getAttribute('src'), account.avatarUrl);
  await page.waitForFunction(() => document.querySelector('#panelProfileAvatar img').naturalWidth > 0);
  if (process.env.COVE_TEST_SCREENSHOT) await page.screenshot({ path: process.env.COVE_TEST_SCREENSHOT });
  await page.locator('#profileEnter').click();
  assert.equal(await page.locator('#profileDisplayName').textContent(), account.name);
  assert.equal(await page.locator('#profileAvatar img').getAttribute('src'), account.avatarUrl);
  await page.reload();
  await page.waitForFunction(() => document.getElementById('panelProfileName').textContent === '知乎测试用户');
  // Viewing another creator must not change the owner's side panel.
  await page.evaluate(() => {
   viewingProfile = { name: '另一位创作者', avatar: '', role: '模特', city: '北京', bio: '', works: [] };
   renderProfileHero();
  });
  assert.equal(await page.locator('#profileDisplayName').textContent(), '另一位创作者');
  assert.equal(await page.locator('#panelProfileName').textContent(), account.name);
  await page.locator('#profileButton').click();
  await page.locator('#zhihuSignOut').click();
  await page.waitForFunction(() => document.getElementById('panelProfileName').textContent === 'COVE Member');
  assert.equal(await page.locator('#panelProfileAvatar img').count(), 0);
  // Switching accounts with a missing avatar must not retain the prior photo.
  authorized = true;
  account = { name: '第二位用户', avatarUrl: null };
  await page.reload();
  await page.waitForFunction(() => document.getElementById('panelProfileName').textContent === '第二位用户');
  assert.equal(await page.locator('#panelProfileAvatar img').count(), 0);
  assert.equal(await page.locator('#profileDisplayName').textContent(), account.name);
  assert.deepEqual(errors, []);
  console.log('Profile UI passed: login, avatar, full profile, reload, guest profile, logout, account switch.');
 } finally {
  await browser.close();
 }
})().catch(error => { console.error(error); process.exitCode = 1; });
