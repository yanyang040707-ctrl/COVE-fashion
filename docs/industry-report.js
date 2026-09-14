/* Additional visuals for palette/trend reports only. Shooting uses its original renderer. */
function industryReportMarkdown(report) {
 if (!['palette', 'trend'].includes(report.type)) return [];
 const lines = [];
 if (report.context?.length) lines.push('\n## 市场与阅读范围', ...report.context.map(item => `${item.name}\n${item.detail}`));
 if (report.visual_stories?.length) {
  lines.push('\n## 色彩与材质灵感', '配图为通用 AI 材质图的配色示意，并非真实秀场、产品图片或趋势证据。',
   ...report.visual_stories.map(item => `${item.name}\n配色：${item.palette.join(' / ')}\n材质：${item.material}\n应用：${item.application}\n分析：${item.reason}\n${item.source_ids?.length ? '参考来源 '+item.source_ids.map(id=>'['+id+']').join(' ') : 'AI 创作建议'}`));
 }
 if (report.watchlist?.length) lines.push('\n## 后续观察与验证', ...report.watchlist);
 return lines;
}

function renderIndustryVisuals(report) {
 const root = document.createElement('section');
 root.className = 'industry-visuals';
 function el(tag, text, cls) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (cls) node.className = cls;
  return node;
 }
 const intro = el('div', null, 'industry-intro');
 intro.append(el('span', 'VISUAL RESEARCH / 视觉研究', 'industry-eyebrow'),
  el('h3', report.type === 'palette' ? '从色彩，到材质与应用' : '把趋势，转化为视觉语言'),
  el('p', '结合下方分析比较色彩、材质与应用方向。点击色点，可切换材质图的配色预览。'));
 root.append(intro);
 if (report.context?.length) {
  const contexts = el('div', null, 'industry-context');
  report.context.forEach(item => {
   const card = el('article');
   card.append(el('h4', item.name), el('p', item.detail));
   if (item.source_ids?.length) card.append(el('small', '参考来源 '+item.source_ids.map(id=>'['+id+']').join(' ')));
   contexts.append(card);
  });
  root.append(contexts);
 }
 let stories = report.visual_stories;
 if (!stories?.length) {
  stories = report.type === 'palette'
   ? report.combinations.map(item => ({ name:item.name, palette:item.hexes, application:item.scene }))
   : (report.visual_refs || []).map(item => ({ name:item.name, palette:item.palette, application:item.mood }));
 }
 const grid = el('div', null, 'industry-moodboards');
 stories.forEach((story, index) => {
  const colors = (story.palette || []).filter(color => /^#[0-9a-f]{6}$/i.test(color));
  if (!colors.length) return;
  const card = el('article', null, 'industry-board');
  const figure = el('figure', null, 'industry-figure');
  const art = el('div', null, 'industry-textile');
  const img = el('img');
  img.src = 'assets/insights/material-study.jpg';
  img.alt = story.name + ' · 通用 AI 材质配色示意';
  img.loading = 'lazy'; img.width = 1536; img.height = 1024;
  img.style.objectPosition = ['left center', 'center', 'right center'][index % 3];
  img.addEventListener('error', () => { img.hidden = true; }, { once: true });
  art.append(img);
  const code = el('span', null, 'industry-preview-code');
  art.append(code);
  figure.append(art, el('figcaption', 'AI 材质配色示意 · 非真实秀场或商品图'));
  const copy = el('div', null, 'industry-board-copy');
  copy.append(el('span', 'DIRECTION '+String(index+1).padStart(2,'0'), 'industry-eyebrow'), el('h4', story.name));
  const swatches = el('div', null, 'industry-swatches');
  swatches.setAttribute('role', 'group'); swatches.setAttribute('aria-label', story.name+'配色预览');
  function selectColor(color) {
   art.style.backgroundColor = color;
   code.textContent = color;
   swatches.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.color === color)));
  }
  colors.forEach(color => {
   const button = el('button'); button.type = 'button';
   button.style.backgroundColor = color; button.dataset.color = color;
   button.title = color; button.setAttribute('aria-label', '预览 '+color);
   button.addEventListener('click', () => selectColor(color)); swatches.append(button);
  });
  selectColor(colors[0]); copy.append(swatches);
  for (const [label, value] of [['材质选择', story.material], ['应用方向', story.application], ['分析与依据', story.reason]]) {
   if (!value) continue;
   const part = el('div', null, 'industry-note'); part.append(el('h5', label), el('p', value)); copy.append(part);
  }
  copy.append(el('small', story.source_ids?.length ? '参考来源 '+story.source_ids.map(id=>'['+id+']').join(' ') : 'AI 创作建议'));
  card.append(figure, copy); grid.append(card);
 });
 root.append(grid, el('p', '图片以同一张通用 AI 材质图演示不同色彩，不代表上述面料的实物效果，也不作为流行趋势依据。受光泽与屏幕影响，图中颜色仅供参考，请以 HEX 色值和实物打样为准。', 'industry-image-note'));
 if (report.watchlist?.length) {
  const watch = el('aside', null, 'industry-watchlist');
  watch.append(el('h4', '后续观察与验证'));
  const list = el('ul'); report.watchlist.forEach(item => list.append(el('li', item))); watch.append(list); root.append(watch);
 }
 return root;
}
