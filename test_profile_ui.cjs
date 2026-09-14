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
  const accountRequests = [];
  await page.route('**/*', async route => {
   const url = new URL(route.request().url());
   if (/^\/api\/(auth|user)\//.test(url.pathname)) accountRequests.push(url.pathname);
   if (url.origin !== 'http://127.0.0.1:8765') return route.abort();
   const file = path.join(__dirname, 'docs', url.pathname === '/' ? 'index.html' : url.pathname);
   if (!fs.existsSync(file)) return route.fulfill({ status: 404, body: '' });
   return route.fulfill({ path: file });
  });
  await page.goto('http://127.0.0.1:8765/');
  await page.locator('#profileButton').click();
  assert.equal(await page.locator('#panelProfileName').textContent(), 'COVE Member');
  assert.equal(await page.locator('#zhihuLoginButton, #zhihuAccount, #zhihuPage').count(), 0);
  if (process.env.COVE_TEST_SCREENSHOT) await page.screenshot({ path: process.env.COVE_TEST_SCREENSHOT });
  await page.locator('#profileEnter').click();
  assert.equal(await page.locator('#profileDisplayName').textContent(), 'COVE Member');
  await page.locator('#profileEditButton').click();
  await page.locator('#profileEditForm [name="name"]').fill('测试创作者');
  await page.locator('#profileEditSubmit').click();
  assert.equal(await page.locator('#profileDisplayName').textContent(), '测试创作者');
  assert.equal(await page.locator('#panelProfileName').textContent(), '测试创作者');
  await page.reload();
  await page.locator('#profileButton').click();
  assert.equal(await page.locator('#zhihuLoginButton, #zhihuAccount, #zhihuPage').count(), 0);
  assert.equal(await page.locator('#zhihuResults').count(), 1);
  assert.deepEqual(accountRequests, []);
  assert.deepEqual(errors, []);
  console.log('Profile UI passed: panel, full profile, edit, reload, no account UI or requests; insight results retained.');
 } finally {
  await browser.close();
 }
})().catch(error => { console.error(error); process.exitCode = 1; });
