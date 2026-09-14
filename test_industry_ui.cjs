// Run with Playwright installed: node test_industry_ui.cjs
const { chromium } = require('playwright');
const { execFileSync } = require('node:child_process');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
(async () => {
 const fixtures = JSON.parse(execFileSync(process.env.PYTHON || 'python3', ['-c', "import json; from test_industry_report import sample; from test_report import sample as shooting; print(json.dumps([sample(),sample('trend'),dict(shooting(),type='shooting')]))"], {cwd:__dirname,encoding:'utf8'}));
 const browser = await chromium.launch({headless:true,...(process.env.COVE_TEST_CHROME ? {executablePath:process.env.COVE_TEST_CHROME}:{})});
 try {
  const page = await browser.newPage({viewport:{width:1280,height:900}});
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  let report=fixtures[0];
  await page.route('**/*',route=>{
   const url=new URL(route.request().url());
   if(url.origin!=='http://127.0.0.1:8765')return route.abort();
   if(url.pathname==='/api/insights/report')return route.fulfill({json:{report,items:[],warning:''}});
   const file=path.join(__dirname,'docs',url.pathname==='/'?'index.html':url.pathname);
   return fs.existsSync(file)?route.fulfill({path:file}):route.fulfill({status:404,body:''});
  });
  await page.goto('http://127.0.0.1:8765/');
  for(const fixture of fixtures){
   report=fixture;
   await page.locator('#searchInput').fill(fixture.title);
   await page.locator('#searchInput').press('Enter');
   await page.waitForFunction(title=>document.querySelector('.shoot-header h2')?.textContent===title,fixture.title);
   if(fixture.type==='shooting'){
    assert.equal(await page.locator('.industry-visuals').count(),0);
    assert.equal(await page.locator('.shoot-diagram').count(),3);
   }else{
    assert.equal(await page.locator('.industry-board').count(),3);
    await page.locator('.industry-textile').first().scrollIntoViewIfNeeded();
    await page.waitForFunction(()=>document.querySelector('.industry-textile img').naturalWidth>0);
    const swatch=page.locator('.industry-swatches').first().locator('button').nth(1);
    const color=await swatch.getAttribute('data-color');await swatch.click();
    assert.equal(await page.locator('.industry-preview-code').first().textContent(),color);
    const markdown=await page.evaluate(report=>industryReportMarkdown(report).join('\n'),fixture);
    assert.match(markdown,/后续观察与验证/);
    if(fixture.type==='palette'){
     await page.locator('.industry-visuals').screenshot({path:'/tmp/cove-industry-desktop.png'});
     await page.setViewportSize({width:390,height:844});
     assert.equal(await page.locator('.industry-visuals').evaluate(el=>el.scrollWidth<=el.clientWidth),true);
     await page.locator('.industry-board').first().screenshot({path:'/tmp/cove-industry-mobile.png'});
     await page.setViewportSize({width:1280,height:900});
    }
   }
  }
  assert.deepEqual(errors,[]);
  console.log('Industry UI passed: palette/trend rendering, local images, color interaction, mobile layout, export; shooting has original diagrams and no industry UI.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
