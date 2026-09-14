const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const path=require('node:path');
const {installCommunityMock}=require('./tests/community-mock.cjs');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.COVE_TEST_CHROME?{executablePath:process.env.COVE_TEST_CHROME}:{})});
 try{
  const page=await browser.newPage();const cloud=await installCommunityMock(page);const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:8765/');
  await page.locator('[data-page="jobs"]').first().click();await page.locator('#publishJob').click();
  for(const [key,value] of Object.entries({title:'云端合作项目',company:'测试工作室',description:'寻找创作者共同拍摄',city:'上海',needs:'有时尚拍摄经验',format:'半天拍摄',date:'十月周末',amount:'2000',fair:'双方保留署名'}))await page.locator(`#publishForm [name="${key}"]`).fill(value);
  await page.locator('#publishForm [name="consent"]').check();
  cloud.failInsert=true;await page.locator('#publishSubmit').click();
  await page.locator('#publishError').filter({hasText:'失败'}).waitFor();
  assert.equal(cloud.posts.length,0);assert.equal(await page.locator('#publishSuccess').isVisible(),false);
  cloud.failInsert=false;await page.locator('#publishSubmit').click();await page.locator('#publishSuccess').waitFor({state:'visible'});
  assert.equal(cloud.posts.length,1);
  await page.reload();await page.waitForFunction(()=>document.querySelector('[data-withdraw="1000000"]'));
  assert.equal(await page.locator('[data-withdraw="1000000"]').count(),1);
  // Another visitor sees the post, but never the owner's delete control.
  const visitor=await browser.newPage();await installCommunityMock(visitor,{signedIn:false,state:cloud});await visitor.goto('http://127.0.0.1:8765/');
  await visitor.waitForFunction(()=>document.querySelector('[data-open="1000000"]'));
  assert.equal(await visitor.locator('[data-withdraw="1000000"]').count(),0);
  const unconfigured=await browser.newPage();await installCommunityMock(unconfigured,{configured:false});await unconfigured.goto('http://127.0.0.1:8765/');
  await unconfigured.locator('[data-page="inspiration"]').first().click();await unconfigured.locator('#publishWorkButton').click();
  await unconfigured.locator('#uploadInput').setInputFiles(path.join(__dirname,'docs/assets/insights/material-study.jpg'));
  await unconfigured.waitForFunction(()=>document.getElementById('uploadCount').textContent.includes('1 / 9'));
  await unconfigured.locator('#uploadForm [name="title"]').fill('不能误报成功');await unconfigured.locator('#uploadForm [name="description"]').fill('尚未配置服务');await unconfigured.locator('#uploadForm [name="consent"]').check();
  await unconfigured.locator('#uploadSubmit').click();await unconfigured.locator('#uploadError').filter({hasText:'暂未就绪'}).waitFor();
  assert.equal(await unconfigured.locator('#uploadSuccess').isVisible(),false);
  await visitor.locator('#profileButton').click();await visitor.locator('#communitySignIn').click();
  await visitor.locator('#communityEmail').fill('test@example.com');await visitor.locator('#communitySendCode').click();
  await visitor.locator('#communityCode').fill('123456');await visitor.locator('#communityVerify').click();
  await visitor.waitForFunction(()=>!document.getElementById('communityLogin').open);
  await visitor.waitForFunction(()=>document.querySelector('[data-withdraw="1000000"]'));
  const retryId='22222222-2222-4222-8222-222222222222';
  const before=cloud.posts.length;
  await page.evaluate(async requestId=>{
   const payload={title:'幂等验证'};
   await CoveCommunity.publish('job',payload,[],requestId);
   await CoveCommunity.publish('job',payload,[],requestId);
  },retryId);
  assert.equal(cloud.posts.length,before+1);
  assert.deepEqual(errors,[]);console.log('Cloud UI passed: failed saves stay editable, job survives reload, public read, owner-only controls, unconfigured publishing cannot show success.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
