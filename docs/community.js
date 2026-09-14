/* Durable public posts and images live outside GitHub Pages/Vercel deployments. */
const CoveCommunity = (() => {
 let config, session, refreshing;
 const sessionKey = 'cove-account-session-v1';
 try { session = JSON.parse(localStorage.getItem(sessionKey) || 'null'); } catch { session = null; }
 function saveSession(value) {
  session = value;
  if (value && !value.expires_at) value.expires_at = Date.now()/1000 + (value.expires_in || 3600);
  try { if(value)localStorage.setItem(sessionKey, JSON.stringify(value)); else localStorage.removeItem(sessionKey); } catch { /* Cloud content still persists even if this browser cannot remember sign-in. */ }
 }
 async function request(url, options={}) {
  const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),60000);
  try{return await fetch(url,{...options,signal:controller.signal});}
  catch(error){throw new Error(error.name==='AbortError'?'连接超时，请检查网络后重试。':'网络连接失败，请检查网络后重试。');}
  finally{clearTimeout(timeout);}
 }
 async function setup() {
  if (config) return config;
  const response = await request((window.COVE_API_BASE || '') + '/api/community', {cache:'no-store'});
  const value = await response.json();
  if (!response.ok || !value.configured) throw new Error('发布服务暂未就绪，请稍后再试。');
  config = value; return config;
 }
 async function api(path, options = {}, authenticated = false) {
  const conf = await setup();
  if (authenticated) await requireSession();
  const response = await request(conf.url + path, {
   ...options, headers: {apikey:conf.publishableKey, ...(session?.access_token && (!path.startsWith('/auth/v1/') || path==='/auth/v1/logout') ? {Authorization:'Bearer '+session.access_token}:{}), ...options.headers}
  });
  const data = await response.json().catch(() => null);
  if (!response.ok) {
   const error = new Error(response.status === 401 ? '登录已过期，请重新登录。' : response.status === 429 ? '操作太频繁，请稍后再试。' : '云端保存失败，请检查网络后重试。');
   error.status = response.status; throw error;
  }
  return data;
 }
 async function requireSession() {
  if (!session?.refresh_token) throw new Error('请先登录，再发布你的作品或合作机会。');
  if (session.expires_at > Date.now()/1000 + 60) return session;
  if (!refreshing) refreshing = api('/auth/v1/token?grant_type=refresh_token', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({refresh_token:session.refresh_token})})
   .then(value => { saveSession(value); return value; }).catch(error => {if(error.status===400||error.status===401)saveSession(null);throw error;}).finally(()=>{refreshing=null;});
  return refreshing;
 }
 async function sendCode(email) {
  await api('/auth/v1/otp', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,create_user:true})});
 }
 async function verifyCode(email, token) {
  const value = await api('/auth/v1/verify', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,token,type:'email'})});
  if(!value?.user || !value.access_token)throw new Error('验证码无效，请重新获取。');
  saveSession(value); return value.user;
 }
 async function signOut() {
  if(session?.access_token)await api('/auth/v1/logout',{method:'POST'},true);
  saveSession(null);
 }
 async function list(kind) {
  const all=[];
  for(let offset=0;;offset+=100){
   const rows=await api('/rest/v1/cove_posts?select=*&kind=eq.'+kind+'&order=created_at.desc&limit=100&offset='+offset);
   all.push(...rows);if(rows.length<100)break;
  }
  return all;
 }
 function mediaUrl(path) {
  if(!config || typeof path!=='string' || !/^[a-f0-9-]+\/[a-f0-9-]+\.[a-z]+$/.test(path))return '';
  return config.url+'/storage/v1/object/public/cove-media/'+path;
 }
 async function publish(kind, payload, images, requestId) {
  const account=await requireSession(); await setup();
  // A retry after a lost response must not create the same post twice.
  const existing=await api('/rest/v1/cove_posts?select=*&user_id=eq.'+account.user.id+'&request_id=eq.'+requestId,{},true);
  if(existing.length)return existing[0];
  const paths=[];
  try {
   for(const image of images){
    const src=typeof image==='string'?image:image.src;
    const match=/^data:(image\/(?:jpeg|png|webp|gif));base64,/.exec(src);
    if(!match)throw new Error('图片格式不支持，请重新选择图片。');
    const blob=await (await fetch(src)).blob();
    if(blob.size>8388608)throw new Error('单张图片不能超过 8MB。');
    const name=account.user.id+'/'+crypto.randomUUID()+'.'+match[1].split('/')[1];
    await api('/storage/v1/object/cove-media/'+name,{method:'POST',headers:{'Content-Type':blob.type,'Cache-Control':'3600'},body:blob},true);
    paths.push(name);
   }
   const rows=await api('/rest/v1/cove_posts',{method:'POST',headers:{'Content-Type':'application/json',Prefer:'return=representation'},body:JSON.stringify({kind,user_id:account.user.id,payload,media:paths,request_id:requestId})},true);
   return rows[0];
  }catch(error){
   // Keep uploaded files on ambiguous failures: the database write may have succeeded.
   // Re-check the idempotency key before deleting anything.
   try{
    const saved=await api('/rest/v1/cove_posts?select=*&user_id=eq.'+account.user.id+'&request_id=eq.'+requestId,{},true);
    if(saved.length)return saved[0];
    if(paths.length)await api('/storage/v1/object/cove-media',{method:'DELETE',headers:{'Content-Type':'application/json'},body:JSON.stringify({prefixes:paths})},true);
   }catch{/* Retry checks for an existing post before re-uploading. */}
   throw error;
  }
 }
 async function remove(row) {
  await requireSession();
  const rows=await api('/rest/v1/cove_posts?id=eq.'+row.id,{method:'DELETE',headers:{Prefer:'return=representation'}},true);
  if(!rows?.length)throw new Error('无法删除这条内容，请确认登录的是发布账号。');
  if(row.media?.length)try{await api('/storage/v1/object/cove-media',{method:'DELETE',headers:{'Content-Type':'application/json'},body:JSON.stringify({prefixes:row.media})},true);}catch{/* The post is removed; unreferenced storage objects can be cleaned up separately. */}
 }
 return {setup,requireSession,sendCode,verifyCode,signOut,list,publish,remove,mediaUrl,user:()=>session?.user||null};
})();
