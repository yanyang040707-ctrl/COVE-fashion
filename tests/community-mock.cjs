const fs=require('node:fs');
const path=require('node:path');
const owner='11111111-1111-4111-8111-111111111111';
async function installCommunityMock(page,{signedIn=true,configured=true,state={posts:[],images:new Map(),nextId:1000000,failInsert:false}}={}){
 if(signedIn)await page.addInitScript(user=>{if(!localStorage.getItem('cove-account-session-v1'))localStorage.setItem('cove-account-session-v1',JSON.stringify({user:{id:user,email:'test@example.com'},access_token:'test-token',refresh_token:'test-refresh',expires_at:Date.now()/1000+3600}));},owner);
 await page.route('**/*',async route=>{
  const request=route.request(),url=new URL(request.url());
  if(url.origin==='http://127.0.0.1:8765'){
   if(url.pathname==='/api/community')return route.fulfill({json:configured?{configured:true,url:'https://test.supabase.co',publishableKey:'sb_publishable_test'}:{configured:false}});
   const file=path.join(__dirname,'..','docs',url.pathname==='/'?'index.html':url.pathname);
   return fs.existsSync(file)?route.fulfill({path:file}):route.fulfill({status:404,body:''});
  }
  if(url.origin!=='https://test.supabase.co')return route.abort();
  if(url.pathname==='/auth/v1/otp')return route.fulfill({json:{}});
  if(url.pathname==='/auth/v1/verify')return route.fulfill({json:{user:{id:owner,email:request.postDataJSON().email},access_token:'test-token',refresh_token:'test-refresh',expires_in:3600}});
  if(url.pathname==='/auth/v1/token')return route.fulfill({json:{user:{id:owner,email:'test@example.com'},access_token:'refreshed-token',refresh_token:'next-refresh',expires_in:3600}});
  if(url.pathname==='/auth/v1/logout')return route.fulfill({json:{}});
  if(url.pathname==='/rest/v1/cove_posts'){
   if(request.method()==='GET'){
    let rows=state.posts.filter(row=>['kind','user_id','request_id','id'].every(key=>!url.searchParams.has(key)||String(row[key])===url.searchParams.get(key).slice(3)));
    const offset=Number(url.searchParams.get('offset')||0),limit=Number(url.searchParams.get('limit')||100);
    return route.fulfill({json:rows.slice(offset,offset+limit)});
   }
   if(request.method()==='POST'){
    if(state.failInsert)return route.fulfill({status:503,json:{message:'test failure'}});
    const row={...request.postDataJSON(),id:state.nextId++};state.posts.unshift(row);return route.fulfill({status:201,json:[row]});
   }
   if(request.method()==='DELETE'){
    const id=Number(url.searchParams.get('id').slice(3));const row=state.posts.find(row=>row.id===id&&row.user_id===owner);
    state.posts=state.posts.filter(item=>item!==row);return route.fulfill({json:row?[row]:[]});
   }
  }
  if(url.pathname.startsWith('/storage/v1/object/public/cove-media/')){
   const name=url.pathname.split('/cove-media/')[1],image=state.images.get(name);
   return image?route.fulfill({contentType:image.type,body:image.body}):route.fulfill({status:404,body:''});
  }
  if(url.pathname.startsWith('/storage/v1/object/cove-media/')&&request.method()==='POST'){
   state.images.set(url.pathname.split('/cove-media/')[1],{body:request.postDataBuffer(),type:request.headers()['content-type']});return route.fulfill({json:{Key:url.pathname}});
  }
  if(request.method()==='DELETE'&&url.pathname==='/storage/v1/object/cove-media'){
   request.postDataJSON().prefixes.forEach(name=>state.images.delete(name));return route.fulfill({json:[]});
  }
  return route.fulfill({status:404,json:{message:'unsupported mock'}});
 });
 return state;
}
module.exports={installCommunityMock,owner};
