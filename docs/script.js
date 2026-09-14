/* =========================================
   COVE APPLICATION
========================================= */


/* =========================================
   INSIGHTS DATA
========================================= */

const trendData = {
    "trend-report": {
        number: "01",
        title: "2026趋势报告",
        description:
            "探索正在塑造时尚创意行业的视觉趋势、工作方式与审美变化。",
        visualClass: "visual-report"
    },

    "ai-photography": {
        number: "02",
        title: "AI摄影",
        description:
            "从生成式影像到智能工作流，AI正在重新定义摄影创作与视觉生产方式。",
        visualClass: "visual-ai"
    },

    "new-chinese": {
        number: "03",
        title: "新中式",
        description:
            "东方文化、传统材质与当代设计语言的融合，正在持续影响全球时尚视觉。",
        visualClass: "visual-chinese"
    },

    "street-fashion": {
        number: "04",
        title: "商业街拍",
        description:
            "真实场景、即时情绪与城市生活方式，正在成为品牌视觉表达的重要语言。",
        visualClass: "visual-street"
    },

    "quiet-luxury": {
        number: "05",
        title: "Quiet Luxury",
        description:
            "低调材质、克制色彩与精细剪裁，构成当代高级感视觉的核心表达。",
        visualClass: "visual-quiet"
    },

    "brand-visual": {
        number: "06",
        title: "品牌视觉",
        description:
            "从品牌识别到广告影像，视觉系统正在成为品牌建立文化影响力的关键。",
        visualClass: "visual-brand"
    }
};


/* =========================================
   INSPIRATION DATA
========================================= */

const inspirationWorks = [
    {
        image:
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=max&w=1000&q=85",
        title: "Soft Structures",
        creator: "Mia Chen",
        avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
        category: "造型",
        tags: ["造型", "Editorial", "editorial", "latest", "Quiet Luxury"],
        likes: 248,
        saved: false
    },

    {
        image:
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=max&w=1000&q=85",
        title: "After Midnight",
        creator: "Lena Wu",
        avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
        category: "摄影",
        tags: ["摄影", "Photography", "latest", "editorial", "未来复古"],
        likes: 391,
        saved: false
    },

    {
        image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=max&w=1000&q=85",
        title: "Urban Uniform",
        creator: "Noah Studio",
        avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
        category: "品牌视觉",
        tags: ["品牌视觉", "Commercial", "latest", "商业街拍"],
        likes: 176,
        saved: false
    },

    {
        image:
            "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=max&w=1000&q=85",
        title: "New Romantic",
        creator: "Iris Atelier",
        avatar:
            "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=100&q=80",
        category: "妆发",
        tags: ["妆发", "Beauty", "editorial", "Y2K"],
        likes: 512,
        saved: false
    },

    {
        image:
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=max&w=1000&q=85",
        title: "Chrome Memory",
        creator: "Ava Kim",
        avatar:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
        category: "摄影",
        tags: ["摄影", "AI 摄影", "未来复古", "editorial"],
        likes: 634,
        saved: false
    },

    {
        image:
            "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=max&w=1000&q=85",
        title: "The New Classic",
        creator: "Studio Form",
        avatar:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
        category: "造型",
        tags: ["造型", "Quiet Luxury", "latest"],
        likes: 289,
        saved: false
    },

    {
        image:
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=max&w=1000&q=85",
        title: "Concrete Bloom",
        creator: "June Park",
        avatar:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
        category: "摄影",
        tags: ["摄影", "商业街拍", "Photography"],
        likes: 427,
        saved: false
    },

    {
        image:
            "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=max&w=1000&q=85",
        title: "Material Study 01",
        creator: "Object Department",
        avatar:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80",
        category: "品牌视觉",
        tags: ["品牌视觉", "editorial", "新中式"],
        likes: 205,
        saved: false
    },

    {
        image:
            "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=max&w=1000&q=85",
        title: "City as a Stage",
        creator: "Frame 02",
        avatar:
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=100&q=80",
        category: "摄影",
        tags: ["摄影", "商业街拍", "latest"],
        likes: 348,
        saved: false
    },

    {
        image:
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=max&w=1000&q=85",
        title: "Quiet Form",
        creator: "Nora Lee",
        avatar:
            "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=100&q=80",
        category: "造型",
        tags: ["造型", "Quiet Luxury", "editorial"],
        likes: 463,
        saved: false
    },

    {
        image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=max&w=1000&q=85",
        title: "Skin / Light",
        creator: "Morrow Beauty",
        avatar:
            "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80",
        category: "妆发",
        tags: ["妆发", "Beauty", "latest", "Y2K"],
        likes: 587,
        saved: false
    },

    {
        image:
            "https://images.unsplash.com/photo-1506629905607-d9b1e7f8b0a5?auto=format&fit=max&w=1000&q=85",
        title: "Eastern Echoes",
        creator: "Lin Studio",
        avatar:
            "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80",
        category: "品牌视觉",
        tags: ["品牌视觉", "新中式", "editorial"],
        likes: 319,
        saved: false
    },

    {
        image:
            "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=max&w=1000&q=85",
        title: "Digital Muse",
        creator: "Synthetic Club",
        avatar:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=100&q=80",
        category: "摄影",
        tags: ["摄影", "AI 摄影", "latest", "未来复古"],
        likes: 729,
        saved: false
    },

    {
        image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=max&w=1000&q=85",
        title: "Reconstructed Youth",
        creator: "Youth Archive",
        avatar:
            "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=100&q=80",
        category: "妆发",
        tags: ["妆发", "Y2K", "未来复古", "latest"],
        likes: 444,
        saved: false
    },

    {
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=max&w=1000&q=85",
        title: "Street Signal",
        creator: "North Block",
        avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        category: "品牌视觉",
        tags: ["品牌视觉", "商业街拍", "editorial"],
        likes: 263,
        saved: false
    },

    {
        image:
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=max&w=1000&q=85",
        title: "Future Vintage",
        creator: "Archive Tomorrow",
        avatar:
            "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=100&q=80",
        category: "造型",
        tags: ["造型", "未来复古", "Y2K", "latest"],
        likes: 552,
        saved: false
    }
];


/* =========================================
   DOM REFERENCES
========================================= */

const navItems = document.querySelectorAll(".nav-item");

const pageSections = {
    insights: document.getElementById("insightsPage"),
    inspiration: document.getElementById("inspirationPage"),
    jobs: document.getElementById("jobsPage")
};

const brand = document.getElementById("brand");

const searchInput = document.getElementById("searchInput");
const searchSubmit = document.getElementById("searchSubmit");

const trendCards = document.querySelectorAll(".daily-card");
const trendCarousel = document.getElementById("trendCarousel");
const searchEmpty = document.getElementById("searchEmpty");
const resetSearch = document.getElementById("resetSearch");

const profileButton = document.getElementById("profileButton");
const profilePanel = document.getElementById("profilePanel");
const profileClose = document.getElementById("profileClose");

const trendDetailPage = document.getElementById("trendDetailPage");
const backButton = document.getElementById("backButton");

const detailNumber = document.getElementById("detailNumber");
const detailTitle = document.getElementById("detailTitle");
const detailDescription = document.getElementById("detailDescription");
const detailVisual = document.getElementById("detailVisual");

const toast = document.getElementById("toast");


/* INSPIRATION DOM */

const inspirationGrid =
    document.getElementById("inspirationGrid");

const inspirationFilters =
    document.querySelectorAll(".inspiration-filter");

const subFilters =
    document.querySelectorAll(".sub-filter");

const moreFilterButton =
    document.querySelector(".more-filter");

const moreFilterPanel =
    document.getElementById("moreFilterPanel");

const publishWorkButton =
    document.getElementById("publishWorkButton");


/* =========================================
   STATE
========================================= */

let currentPage = "insights";
let previousPage = "insights";
let currentInspirationFilter = "recommended";
let toastTimer;


/* =========================================
   PAGE NAVIGATION
========================================= */

function switchPage(pageName) {
    // profilePage / workPage are registered later in the file; resolve them lazily.
    if (pageName === 'profile' && !pageSections.profile) {
        pageSections.profile = document.getElementById('profilePage');
    }
    if (pageName === 'work' && !pageSections.work) {
        pageSections.work = document.getElementById('workPage');
    }
    if (pageName === 'report' && !pageSections.report) {
        pageSections.report = document.getElementById('reportPage');
    }
    if (!pageSections[pageName]) return;

    currentPage = pageName;

    Object.keys(pageSections).forEach((page) => {
        pageSections[page].classList.remove("active-page");
    });

    pageSections[pageName].classList.add("active-page");

    navItems.forEach((item) => {
        const itemPage = item.dataset.page;

        item.classList.toggle(
            "active",
            itemPage === pageName
        );
    });

    // Let the auto-hiding header reset itself whenever the section changes.
    window.dispatchEvent(new CustomEvent("cove:pagechange", {
        detail: { page: pageName }
    }));
}


/* =========================================
   NAVIGATION EVENTS
========================================= */

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        const pageName = item.dataset.page;

        if (trendDetailPage.classList.contains("open")) {
            closeTrendDetail();
        }

        switchPage(pageName);
    });
});


/* =========================================
   BRAND CLICK
========================================= */

brand.addEventListener("click", () => {
    closeTrendDetail();
    switchPage("insights");

    if (searchInput) {
        searchInput.value = "";
    }

    resetTrendCards();
});


/* =========================================
   INSIGHTS SEARCH
========================================= */

const zhihuResults = document.getElementById("zhihuResults");
const zhihuStatus = document.getElementById("zhihuStatus");
const zhihuResultList = document.getElementById("zhihuResultList");
const reportHeading = document.getElementById("reportHeading");
const trendSection = document.querySelector(".trend-section");
let searchController;
let searchVersion = 0;

const REPORT_META = {
 shooting:{label:'COVE / SHOOTING PLAN',file:'COVE-拍摄方案.md',heading:'你的拍摄方案',done:'方案已生成'},
 palette:{label:'COVE / COLOR REPORT',file:'COVE-配色报告.md',heading:'你的配色报告',done:'配色报告已生成'},
 trend:{label:'COVE / TREND REPORT',file:'COVE-趋势报告.md',heading:'你的趋势报告',done:'趋势报告已生成'},
 general:{label:'COVE / INSIGHT REPORT',file:'COVE-洞察报告.md',heading:'你的洞察报告',done:'洞察报告已生成'}
};

function renderShootingReport(data) {
 const report=data.report;
 const kind=REPORT_META[report.type]?report.type:'shooting';
 const meta=REPORT_META[kind];
 const root=document.createElement('div');root.className='shoot-report';
 function el(tag,text,className){const node=document.createElement(tag);if(text)node.textContent=text;if(className)node.className=className;return node;}
 function section(title){const part=el('section',null,'shoot-section');part.append(el('h3',title));root.append(part);return part;}
 function list(title,items){if(!items||!items.length)return;const part=section(title),ul=el('ul');items.forEach(item=>ul.append(el('li',item)));part.append(ul);}
 function refs(item){return item.source_ids&&item.source_ids.length?'参考知乎来源 '+item.source_ids.map(id=>'['+id+']').join(' '):'AI 创作建议';}
 let step=0;const no=()=>String(++step).padStart(2,'0')+' / ';
 const header=el('header',null,'shoot-header');header.append(el('span',meta.label,'shoot-label'),el('h2',report.title),el('p',report.summary));
 const download=el('button','下载报告 ↓','shoot-download');download.type='button';download.onclick=()=>{
  const block=(title,items)=>items&&items.length?['\n## '+title,...items]:[];
  let lines=['# '+report.title,report.summary,...block('策划假设',report.assumptions)];
  if(kind==='shooting')lines=lines.concat(block('选址',report.locations.map(l=>`${l.name}\n${l.reason}\n时间：${l.timing}\n核实：${l.verify}\n${refs(l)}`)),block('造型',report.styling),block('分镜',report.shots.map((s,i)=>`${i+1}. ${s.title} · ${s.location}\n机位：${s.framing}\n动作：${s.pose}\n用光：${s.light}\n焦段：${s.lens}\n${refs(s)}`)),block('行程',report.schedule),block('准备清单',report.checklist));
  if(kind==='palette')lines=lines.concat(block('核心色彩',report.colors.map(c=>`${c.name} ${c.hex}\n调性：${c.mood}\n应用：${c.usage}\n${refs(c)}`)),block('配色组合',report.combinations.map(c=>`${c.name}：${c.hexes.join(' + ')}\n${c.scene}\n${refs(c)}`)),block('材质呼应',report.materials),block('落地应用',report.applications),block('风险提示',report.cautions));
  if(kind==='trend')lines=lines.concat(block('趋势信号',report.signals.map(s=>`${s.name}（确定性 ${s.confidence}）\n${s.detail}\n${refs(s)}`)),block('驱动因素',report.drivers),block('关键单品与元素',report.keyitems),block('落地建议',report.actions),block('风险提示',report.cautions));
  if(kind==='general')lines=lines.concat(block('分析要点',report.points.map(p=>`${p.name}\n${p.detail}\n${refs(p)}`)),block('建议',report.actions),block('风险提示',report.cautions));
  lines=lines.concat(['\n## 来源说明',report.source_note],data.warning?[data.warning]:[],data.items.map((s,i)=>`[${i+1}] ${s.title}\n${s.url}`));
  const url=URL.createObjectURL(new Blob([lines.join('\n\n')],{type:'text/markdown;charset=utf-8'}));const a=el('a');a.href=url;a.download=meta.file;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 };header.append(download);root.append(header);
 if(data.warning)root.append(el('p',data.warning,'shoot-notice'));
 list(no()+'策划假设',report.assumptions);
 if(kind==='shooting'){
  const locations=section(no()+'去哪里拍');const grid=el('div',null,'shoot-location-grid');report.locations.forEach((item,i)=>{const card=el('article',null,'shoot-location');card.append(el('span',String(i+1).padStart(2,'0'),'shoot-label'),el('h4',item.name),el('p',item.reason),el('p','建议时间 · '+item.timing),el('p','出发前核实 · '+item.verify,'shoot-muted'),el('small',refs(item)));grid.append(card);});locations.append(grid);
  list(no()+'造型与视觉',report.styling);
  const shots=section(no()+'分镜与角度');shots.append(el('p','构图示意为通用机位图，不是场地实景；实际效果随焦段、距离与环境变化。','shoot-muted'));
  const shotGrid=el('div',null,'shoot-shot-grid');
  const diagrams={low:['低机位 · 仰拍','M30 105 145 38','M0 104 260 75'],eye:['平视 · 视线高度','M30 70 145 70','M0 86 260 86'],high:['高机位 · 俯拍','M30 25 145 84','M0 64 260 99'],detail:['近景 · 局部特写','M55 63 136 63','M0 92 260 92']};
  report.shots.forEach((shot,i)=>{const card=el('article',null,'shoot-shot');const art=el('div',null,'shoot-diagram');const [label,ray,horizon]=diagrams[shot.angle]||diagrams.eye;
  art.innerHTML=`<svg viewBox="0 0 260 145" role="img" aria-label="${label}构图示意"><path d="M86 0V145M174 0V145M0 48H260M0 97H260" stroke="#39313f" stroke-dasharray="3 5" fill="none"/><path d="${horizon}" stroke="#75627e" fill="none"/><circle cx="151" cy="40" r="11" fill="none" stroke="#cbb7de" stroke-width="2"/><path d="M151 52v41m0-30-25 16m25-16 22 17m-22 13-16 34m16-34 24 29" stroke="#cbb7de" stroke-width="2" fill="none"/><path d="${ray}" stroke="#d4bbf4" stroke-width="2" stroke-dasharray="5 4" fill="none"/><text x="10" y="137" fill="#bda7d1" font-size="9">CAMERA → MODEL</text></svg>`;
  art.append(el('span',label));card.append(art,el('h4',String(i+1).padStart(2,'0')+' / '+shot.title),el('small',shot.location));
  for(const [name,value] of [['机位',shot.framing],['动作',shot.pose],['用光',shot.light],['焦段',shot.lens]]){const p=el('p');p.append(el('strong',name+' · '),document.createTextNode(value));card.append(p);}card.append(el('small',refs(shot)));shotGrid.append(card);
  });shots.append(shotGrid);list(no()+'拍摄行程',report.schedule);list(no()+'出发清单',report.checklist);
 }
 if(kind==='palette'){
  const palette=section(no()+'核心色彩');const grid=el('div',null,'shoot-color-grid');
  report.colors.forEach(color=>{const card=el('article',null,'shoot-color');const chip=el('div',null,'shoot-chip');chip.style.background=color.hex;
   const code=el('span',color.hex,'shoot-chip-code');chip.append(code);card.append(chip,el('h4',color.name));
   for(const [name,value] of [['调性',color.mood],['应用',color.usage]]){const p=el('p');p.append(el('strong',name+' · '),document.createTextNode(value));card.append(p);}
   card.append(el('small',refs(color)));grid.append(card);});palette.append(grid);
  const combos=section(no()+'配色组合');report.combinations.forEach(combo=>{const card=el('article',null,'shoot-combo');
   const bar=el('div',null,'shoot-combo-bar');combo.hexes.forEach(hex=>{const cell=el('span');cell.style.background=hex;cell.title=hex;bar.append(cell);});
   card.append(el('h4',combo.name),bar,el('small',combo.hexes.join('  ·  ')),el('p',combo.scene),el('small',refs(combo)));combos.append(card);});
  list(no()+'材质呼应',report.materials);list(no()+'落地应用',report.applications);list(no()+'风险提示',report.cautions);
 }
 if(kind==='trend'){
  const signals=section(no()+'趋势信号');report.signals.forEach((item,i)=>{const card=el('article',null,'shoot-signal');
   const head=el('div',null,'shoot-signal-head');head.append(el('span',String(i+1).padStart(2,'0'),'shoot-label'),el('span','确定性 '+item.confidence,'shoot-confidence shoot-confidence-'+({'高':'high','中':'mid','低':'low'}[item.confidence]||'mid')));
   card.append(head,el('h4',item.name),el('p',item.detail),el('small',refs(item)));signals.append(card);});
  list(no()+'驱动因素',report.drivers);list(no()+'关键单品与元素',report.keyitems);list(no()+'落地建议',report.actions);list(no()+'风险提示',report.cautions);
 }
 if(kind==='general'){
  const points=section(no()+'分析要点');report.points.forEach((item,i)=>{const card=el('article',null,'shoot-point');
   card.append(el('span',String(i+1).padStart(2,'0'),'shoot-label'),el('h4',item.name),el('p',item.detail),el('small',refs(item)));points.append(card);});
  list(no()+'建议',report.actions);list(no()+'风险提示',report.cautions);
 }
 const sourceSection=section(no()+'知乎参考与创作说明');sourceSection.append(el('p',report.source_note,'shoot-muted'));data.items.forEach((item,i)=>{const card=el('article',null,'shoot-source'),a=el('a',`[${i+1}] ${item.title}`);a.href=item.url;a.target='_blank';a.rel='noopener noreferrer';card.append(a,el('small',item.author+' · 知乎'),el('p',item.summary));sourceSection.append(card);});
 zhihuResultList.append(root);
 return meta;
}

async function performSearch() {
    const query = searchInput.value.trim();
    if (!query) { resetTrendCards(); return; }
    searchController?.abort();
    const version = ++searchVersion;
    const controller = new AbortController();
    searchController = controller;
    const timeout = setTimeout(() => controller.abort(), 190000);
    zhihuResults.hidden = false;
    trendSection.hidden = true;
    searchEmpty.classList.remove("visible");
    zhihuResultList.replaceChildren();
    reportHeading.textContent = "你的报告";
    zhihuStatus.textContent = `正在检索知乎内容并生成「${query}」的报告，通常需要 1–3 分钟…`;
    zhihuResults.setAttribute("aria-busy", "true");
    try {
        // COVE_API_BASE is empty for the local preview (same-origin) and set to
        // the serverless origin when the static site is hosted on GitHub Pages.
        const apiBase = (window.COVE_API_BASE || "").replace(/\/+$/, "");
        const response = await fetch(apiBase + "/api/insights/report", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query }),
            signal: controller.signal
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || "搜索服务暂不可用。");
        if (version !== searchVersion) return;
        const meta = renderShootingReport(data);
        reportHeading.textContent = meta.heading;
        zhihuStatus.textContent = `${meta.done} · ${data.items.length} 条知乎参考 · AI 创作建议`;
    } catch (error) {
        if (version !== searchVersion) return;
        zhihuStatus.textContent = error.name === "AbortError"
            ? "方案生成超时，请重新点击生成。"
            : (error instanceof SyntaxError || error instanceof TypeError)
                ? "无法连接搜索服务，请稍后重试。" : error.message;
    } finally {
        clearTimeout(timeout);
        if (version === searchVersion) zhihuResults.setAttribute("aria-busy", "false");
    }
}

 document.getElementById("clearZhihuSearch").addEventListener("click", resetTrendCards);


/* =========================================
   SEARCH EVENTS
========================================= */

searchSubmit.addEventListener("click", performSearch);

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        performSearch();
    }
});

searchInput.addEventListener("input", () => {
    if (searchInput.value.trim() === "") {
        resetTrendCards();
    }
});


/* =========================================
   RESET SEARCH
========================================= */

function resetTrendCards() {
    searchVersion++;
    searchController?.abort();
    zhihuResults.hidden = true;
    zhihuResults.setAttribute("aria-busy", "false");
    zhihuResultList.replaceChildren();
    trendSection.hidden = false;
    trendCards.forEach((card) => {
        // Cards are flex containers; clear the inline override instead of forcing block.
        card.style.removeProperty("display");
    });

    searchEmpty.classList.remove("visible");

    if (searchInput) {
        searchInput.value = "";
    }
}

resetSearch.addEventListener("click", () => {
    resetTrendCards();
    showToast("已返回全部趋势");
});


/* =========================================
   TREND DETAIL
========================================= */

function openTrendDetail(trendId) {
    const data = trendData[trendId];

    if (!data) return;

    previousPage = currentPage;

    detailNumber.textContent = data.number;
    detailTitle.textContent = data.title;
    detailDescription.textContent = data.description;

    detailVisual.className = "detail-visual";
    detailVisual.classList.add(data.visualClass);

    trendDetailPage.classList.add("open");

    document.body.style.overflow = "hidden";
}

function closeTrendDetail() {
    trendDetailPage.classList.remove("open");
    document.body.style.overflow = "";
}


/* =========================================
   TREND CARD EVENTS
========================================= */

document.querySelectorAll('[data-insight-query]').forEach(button => {
    button.addEventListener('click', () => {
        searchInput.value = button.dataset.insightQuery;
        performSearch();
        searchInput.focus({preventScroll:true});
        searchInput.scrollIntoView({behavior:'smooth',block:'center'});
    });
});


/* =========================================
   BACK BUTTON
========================================= */

backButton.addEventListener("click", () => {
    closeTrendDetail();
});


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    if (trendDetailPage.classList.contains("open")) {
        closeTrendDetail();
    }

    if (profilePanel.classList.contains("open")) {
        closeProfile();
    }
});


/* =========================================
   PROFILE
========================================= */

function openProfile() {
    profilePanel.classList.add("open");
    document.body.style.overflow = "hidden";
    // Sync panel role line with current user data each time the panel opens.
    const panelRole = document.getElementById('panelProfileRole');
    if (panelRole && profileData && profileData.role) {
        panelRole.textContent = profileData.role;
    }
}

function closeProfile() {
    profilePanel.classList.remove("open");
    document.body.style.overflow = "";
}

profileButton.addEventListener("click", openProfile);
profileClose.addEventListener("click", closeProfile);


/* =========================================
   AUTO-HIDING TOP NAVIGATION
========================================= */

/* Keep the section menu reachable during long reads: hide the bar while the
   user scrolls down, reveal it the moment they scroll back up.
   NOTE: body has `overflow-y:auto`, so body — not window — is the scrolling
   element. Its scroll events do not bubble to window, so listen on the real
   container and read the offset from whichever element actually moves. */
(function initAutoHideNav() {
    const nav = document.querySelector(".top-nav");
    if (!nav) return;

    const HIDE_AFTER = 60;    // start hiding just below the header itself
    const THRESHOLD = 4;      // ignore sub-pixel and trackpad jitter

    function offset() {
        return document.body.scrollTop
            || document.documentElement.scrollTop
            || window.scrollY
            || 0;
    }

    let lastY = offset();
    let ticking = false;

    function update() {
        ticking = false;
        const y = offset();

        // A locked body (open profile panel) must never strand the bar hidden.
        if (document.body.style.overflow === "hidden") {
            nav.classList.remove("nav-hidden");
            lastY = y;
            return;
        }

        const delta = y - lastY;
        if (Math.abs(delta) < THRESHOLD) return;

        if (delta > 0 && y > HIDE_AFTER) {
            nav.classList.add("nav-hidden");
        } else if (delta < 0) {
            nav.classList.remove("nav-hidden");
        }
        lastY = y;
    }

    function onScroll() {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(update);
        }
    }

    // Cover both models: body as scroller, and window/document as scroller.
    document.body.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    // Switching sections resets scroll to the top, so always show the bar again.
    window.addEventListener("cove:pagechange", () => {
        nav.classList.remove("nav-hidden");
        lastY = offset();
    });
})();


/* =========================================
   TOAST
========================================= */

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}


/* =========================================
   INSPIRATION HELPERS
========================================= */

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function getHeartIcon() {
    return `
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            aria-hidden="true"
        >
            <path
                d="M20.8 8.7c0 5.2-8.8 10.1-8.8 10.1S3.2 13.9 3.2 8.7
                   C3.2 5.8 5.1 4 7.7 4c1.6 0 3.1.8 4.3 2.2
                   C13.2 4.8 14.7 4 16.3 4c2.6 0 4.5 1.8 4.5 4.7Z"
            ></path>
        </svg>
    `;
}

function matchesInspirationFilter(work, filter) {
    if (filter === "recommended") {
        return true;
    }

    if (filter === "latest") {
        return work.tags.includes("latest");
    }

    if (filter === "editorial") {
        return work.tags.includes("editorial");
    }

    if (work.category === filter) {
        return true;
    }

    return work.tags.includes(filter);
}


/* =========================================
   RENDER INSPIRATION
========================================= */

function renderInspirationWorks(filter = "recommended") {
    if (!inspirationGrid) return;

    currentInspirationFilter = filter;

    const filteredWorks = inspirationWorks.filter((work) => {
        return matchesInspirationFilter(work, filter);
    });

    inspirationGrid.innerHTML = "";

    if (filteredWorks.length === 0) {
        inspirationGrid.innerHTML = `
            <div class="inspiration-empty">
                <div class="empty-symbol">⌕</div>
                <p>暂时没有相关灵感</p>
            </div>
        `;

        return;
    }

    filteredWorks.forEach((work, index) => {
        const card = document.createElement("article");

        card.className = "inspiration-card";
        card.dataset.index = index;
        card.dataset.category = work.category;
        card.dataset.tags = work.tags.join(" ");

        card.innerHTML = `
            <div class="inspiration-image-wrap">

                <img
                    class="inspiration-image"
                    src="${escapeHTML(work.image)}"
                    alt="${escapeHTML(work.title)} by ${escapeHTML(work.creator)}"
                    loading="lazy"
                >

                <div class="inspiration-overlay">

                    <div class="inspiration-like">
                        ${getHeartIcon()}
                        <span>${escapeHTML(work.likes)}</span>
                    </div>

                    <div class="inspiration-card-info">

                        <div class="inspiration-title">
                            ${escapeHTML(work.title)}
                        </div>

                        <div class="inspiration-creator">

                            <img
                                src="${escapeHTML(work.avatar)}"
                                alt="${escapeHTML(work.creator)}"
                                loading="lazy"
                            >

                            <span>
                                ${escapeHTML(work.creator)}
                            </span>

                        </div>

                    </div>

                    <button
                        class="inspiration-save-button${work.saved ? " saved" : ""}"
                        type="button"
                        aria-pressed="${work.saved}"
                    >
                        ${work.saved ? "已收藏" : "收藏"}
                    </button>

                </div>

            </div>
        `;

        const saveButton =
            card.querySelector(".inspiration-save-button");

        saveButton.addEventListener("click", (event) => {
            event.stopPropagation();

            work.saved = !work.saved;

            saveButton.classList.toggle(
                "saved",
                work.saved
            );

            saveButton.textContent =
                work.saved ? "已收藏" : "收藏";

            saveButton.setAttribute(
                "aria-pressed",
                String(work.saved)
            );

            showToast(
                work.saved ? "已收藏作品" : "已取消收藏"
            );
        });

        inspirationGrid.appendChild(card);

        // Cards are filtered, so resolve the index in the source array.
        const sourceIndex = inspirationWorks.indexOf(work);
        card.classList.add('inspiration-card-clickable');
        card.addEventListener('click', () => {
            if (typeof openWorkDetail === 'function') openWorkDetail(sourceIndex);
        });
    });
}


/* =========================================
   INSPIRATION FILTER STATE
========================================= */

function updatePrimaryFilterState(filter) {
    inspirationFilters.forEach((button) => {
        const buttonFilter = button.dataset.filter;

        if (buttonFilter === "more") {
            return;
        }

        button.classList.toggle(
            "active",
            buttonFilter === filter
        );
    });

    subFilters.forEach((button) => {
        button.classList.toggle(
            "active",
            button.dataset.filter === filter
        );
    });
}

function setInspirationFilter(filter) {
    updatePrimaryFilterState(filter);
    renderInspirationWorks(filter);
}


/* =========================================
   PRIMARY FILTER EVENTS
========================================= */

inspirationFilters.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        if (filter === "more") {
            const isExpanded =
                moreFilterButton.getAttribute("aria-expanded") === "true";

            moreFilterPanel.hidden = isExpanded;

            moreFilterButton.setAttribute(
                "aria-expanded",
                String(!isExpanded)
            );

            return;
        }

        setInspirationFilter(filter);
    });
});


/* =========================================
   SECONDARY FILTER EVENTS
========================================= */

subFilters.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        setInspirationFilter(filter);
    });
});


/* =========================================
   PUBLISH WORK
========================================= */

if (publishWorkButton) {
    publishWorkButton.addEventListener("click", () => {
        showToast("发布作品功能即将开放");
    });
}


/* =========================================
   HORIZONTAL DRAG SCROLL
========================================= */

/* =========================================
   INITIALIZE
========================================= */

function initializeApp() {
    switchPage("insights");
    resetTrendCards();
    renderInspirationWorks("recommended");
}

initializeApp();

/* Jobs prototype: sample opportunities, saved locally on this browser. */
const jobData = [
 {id:1,company:"FORME STUDIO",logo:"F.",kind:"独立设计品牌",title:"秋冬 Campaign 摄影师",role:"摄影师",city:"上海",type:"paid",pay:"¥8,000–12,000 / 项目",amount:8000,format:"项目制 · 2 天拍摄",time:"2 小时前",date:"10 月上旬 · 档期待协商",description:"为新一季秋冬系列寻找独具视角的摄影师。以城市建筑与身体的关系为出发点，共同完成一组克制、真实而富有张力的品牌影像。",needs:["擅长时装人像与自然光，有完整的视觉叙事能力","提供 2–3 组相关作品及个人作品集","参与前期创意沟通，交付约定数量的精修照片"],host:"专注当代日常衣着的独立设计工作室，相信服装与人的真实连接。",fair:"费用、交付及使用范围在开拍前书面确认。"},
 {id:2,company:"UNBOUND COLLECTIVE",logo:"u",kind:"创作者共创小组",title:"城市漫游 · 模特测试拍摄",role:"模特",city:"上海",type:"tfp",pay:"互勉共创 / TFP",amount:0,format:"共创 · 半天拍摄",time:"今天",date:"9 月下旬 · 周末",description:"一场没有标准答案的城市漫游。我们希望与新面孔一起，在街角、天台和日常场景中寻找自然的情绪，完成可用于双方作品集的编辑影像。",needs:["欢迎新人参与，不限定经纪公司及从业年限","愿意参与情绪板讨论，表达自己的创作想法","双方均获得约定精修图，发布时相互署名"],host:"由摄影、造型与视觉创作者组成的自由共创小组，欢迎不同经验的伙伴。",fair:"无现金报酬；交通、餐饮及肖像使用范围须事先协商。"},
 {id:3,company:"ÉDIT ATELIER",logo:"é",kind:"时尚内容工作室",title:"独立杂志 Editorial 造型师",role:"造型师",city:"北京",type:"paid",pay:"¥3,000–5,000 / 项目",amount:3000,format:"自由职业 · 1 天拍摄",time:"今天",date:"10 月中旬",description:"为一期关于当代青年与个人身份的时装专题寻找造型搭档。希望你对材质、比例与复古单品有独立判断，能与摄影团队一起打磨完整造型。",needs:["具备编辑拍摄或品牌 Lookbook 造型经验","可参与服装搭配、试装与现场执行","请提供近期造型作品及可合作档期"],host:"聚焦独立文化与时装表达的内容工作室，制作杂志专题与品牌故事。",fair:"服装借还、交通与制作费用独立确认。"},
 {id:4,company:"MUSE BEAUTY",logo:"M",kind:"美妆创意团队",title:"美妆创意大片 · 妆发师",role:"妆发师",city:"杭州",type:"paid",pay:"¥5,000–7,000 / 项目",amount:5000,format:"商业合作 · 1 天拍摄",time:"1 天前",date:"10 月上旬",description:"以柔和金属与肌肤光泽为灵感，创作一组美妆视觉。寻找擅长清透底妆与创意细节的妆发师，一起完成从概念到现场的视觉落地。",needs:["具备美妆近景拍摄经验","能够根据情绪板进行妆容试样","提供妆发作品集与工具材料需求"],host:"连接美妆品牌与独立创作者的小型视觉团队。",fair:"材料费与加班费用在合作前明确。"},
 {id:5,company:"AFTER SCHOOL",logo:"a/s",kind:"学生创作计划",title:"一起拍一本独立杂志",role:"摄影师",city:"广州",type:"tfp",pay:"互勉共创 / 作品交换",amount:0,format:"共创 · 周末项目",time:"1 天前",date:"档期共同商议",description:"面向学生与新创作者的独立杂志计划。从选题、拍摄到排版一起参与，用一组作品记录我们对城市与青春的观察。",needs:["无需商业履历，欢迎带着想法加入","愿意共同商议分工与制作进度","所有参与者署名，作品集使用权事先约定"],host:"一个开放的学生创作计划，让第一次合作也拥有清晰、公平的约定。",fair:"无现金报酬；制作成本透明协商，不以付费入组为条件。"},
 {id:6,company:"STILL MOTION",logo:"sm",kind:"影像制作工作室",title:"品牌短片导演 / 创意策划",role:"导演 / 策划",city:"北京",type:"paid",pay:"¥15,000–20,000 / 项目",amount:15000,format:"项目制 · 前期可远程",time:"2 天前",date:"10 月下旬",description:"为生活方式品牌创作一支 60 秒短片。寻找有叙事感的创意伙伴，以细腻的日常片段呈现人与物的情感连接。",needs:["有品牌短片或独立影像作品","可完成创意提案、分镜及拍摄指导","提交导演作品集与项目合作方式"],host:"专注品牌故事与生活方式影像的制作工作室。",fair:"创意、拍摄、后期职责与版权范围分别约定。"}
];
// Additional fictional projects cover every filter combination.
jobData.push(...[
  {
    "id": 7,
    "company": "SOUTH WINDOW / OPEN LAB",
    "logo": "sw",
    "kind": "开放共创计划",
    "title": "沪上 · 城市光影 · 摄影共创",
    "role": "摄影师",
    "city": "上海",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "2 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以梧桐街区与城市建筑为创作场景。通过人像与环境的关系完成一组有叙事感的影像。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供一组相关人像或生活方式摄影作品",
      "参与情绪板与拍摄路线讨论",
      "约定底片、精修张数及交付时间"
    ],
    "host": "位于上海的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  },
  {
    "id": 8,
    "company": "SOUTH WINDOW / PROJECTS",
    "logo": "sw",
    "kind": "独立创意工作室",
    "title": "沪上 · 新季 Lookbook 造型企划",
    "role": "造型师",
    "city": "上海",
    "type": "paid",
    "pay": "¥3,500–5,500 / 项目",
    "amount": 3500,
    "format": "项目制 · 1–2 天拍摄",
    "time": "3 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以梧桐街区与城市建筑为创作场景。以材质叠搭与身体比例为线索，探索衣着的日常表达。项目包含前期沟通与现场执行，欢迎具有个人视角的创作者。",
    "needs": [
      "提供搭配作品或个人风格参考",
      "共同确认服装来源、尺码和借还安排",
      "参与试装与现场造型调整"
    ],
    "host": "位于上海的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "报酬、制作支出、交付与使用范围在合作前书面确认。"
  },
  {
    "id": 9,
    "company": "SOUTH WINDOW / OPEN LAB",
    "logo": "sw",
    "kind": "开放共创计划",
    "title": "沪上 · 旧衣新生 · 造型实验",
    "role": "造型师",
    "city": "上海",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "3 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以梧桐街区与城市建筑为创作场景。以材质叠搭与身体比例为线索，探索衣着的日常表达。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供搭配作品或个人风格参考",
      "共同确认服装来源、尺码和借还安排",
      "参与试装与现场造型调整"
    ],
    "host": "位于上海的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  },
  {
    "id": 10,
    "company": "SOUTH WINDOW / PROJECTS",
    "logo": "sw",
    "kind": "独立创意工作室",
    "title": "沪上 · 独立品牌形象片模特招募",
    "role": "模特",
    "city": "上海",
    "type": "paid",
    "pay": "¥2,500–4,500 / 项目",
    "amount": 2500,
    "format": "项目制 · 1–2 天拍摄",
    "time": "4 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以梧桐街区与城市建筑为创作场景。寻找表达自然、愿意参与创作讨论的面孔，记录真实的动作与情绪。项目包含前期沟通与现场执行，欢迎具有个人视角的创作者。",
    "needs": [
      "提供近期自然光照片或模特卡",
      "说明可合作档期与镜头表达兴趣",
      "拍摄前共同确认服装、场景与肖像使用范围"
    ],
    "host": "位于上海的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "报酬、制作支出、交付与使用范围在合作前书面确认。"
  },
  {
    "id": 11,
    "company": "SOUTH WINDOW / PROJECTS",
    "logo": "sw",
    "kind": "独立创意工作室",
    "title": "沪上 · 护肤系列视觉妆发合作",
    "role": "妆发师",
    "city": "上海",
    "type": "paid",
    "pay": "¥4,500–6,500 / 项目",
    "amount": 4500,
    "format": "项目制 · 1–2 天拍摄",
    "time": "5 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以梧桐街区与城市建筑为创作场景。围绕肌肤质感与细节色彩，完成适合近景呈现的妆发视觉。项目包含前期沟通与现场执行，欢迎具有个人视角的创作者。",
    "needs": [
      "提供清晰妆发近景作品",
      "根据情绪板沟通妆容试样",
      "提前确认材料、卫生要求及过敏信息"
    ],
    "host": "位于上海的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "报酬、制作支出、交付与使用范围在合作前书面确认。"
  },
  {
    "id": 12,
    "company": "SOUTH WINDOW / OPEN LAB",
    "logo": "sw",
    "kind": "开放共创计划",
    "title": "沪上 · 色彩与肌理 · 创意妆发",
    "role": "妆发师",
    "city": "上海",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "5 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以梧桐街区与城市建筑为创作场景。围绕肌肤质感与细节色彩，完成适合近景呈现的妆发视觉。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供清晰妆发近景作品",
      "根据情绪板沟通妆容试样",
      "提前确认材料、卫生要求及过敏信息"
    ],
    "host": "位于上海的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  },
  {
    "id": 13,
    "company": "SOUTH WINDOW / PROJECTS",
    "logo": "sw",
    "kind": "独立创意工作室",
    "title": "沪上 · 生活方式品牌短片策划",
    "role": "导演 / 策划",
    "city": "上海",
    "type": "paid",
    "pay": "¥12,000–14,000 / 项目",
    "amount": 12000,
    "format": "项目制 · 1–2 天拍摄",
    "time": "6 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以梧桐街区与城市建筑为创作场景。从日常人物与城市节奏出发，将一个简单想法转化为完整的短片故事。项目包含前期沟通与现场执行，欢迎具有个人视角的创作者。",
    "needs": [
      "提供短片、分镜或创意提案样例",
      "共同确认叙事方向、拍摄分工与进度",
      "协商后期交付、音乐授权与作品署名"
    ],
    "host": "位于上海的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "报酬、制作支出、交付与使用范围在合作前书面确认。"
  },
  {
    "id": 14,
    "company": "SOUTH WINDOW / OPEN LAB",
    "logo": "sw",
    "kind": "开放共创计划",
    "title": "沪上 · 一分钟城市诗 · 短片共创",
    "role": "导演 / 策划",
    "city": "上海",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "6 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以梧桐街区与城市建筑为创作场景。从日常人物与城市节奏出发，将一个简单想法转化为完整的短片故事。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供短片、分镜或创意提案样例",
      "共同确认叙事方向、拍摄分工与进度",
      "协商后期交付、音乐授权与作品署名"
    ],
    "host": "位于上海的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  },
  {
    "id": 15,
    "company": "NORTH FRAME / PROJECTS",
    "logo": "nf",
    "kind": "独立创意工作室",
    "title": "京城 · 品牌生活方式影像摄影",
    "role": "摄影师",
    "city": "北京",
    "type": "paid",
    "pay": "¥6,500–8,500 / 项目",
    "amount": 6500,
    "format": "项目制 · 1–2 天拍摄",
    "time": "3 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以胡同街巷与当代艺术空间为创作场景。通过人像与环境的关系完成一组有叙事感的影像。项目包含前期沟通与现场执行，欢迎具有个人视角的创作者。",
    "needs": [
      "提供一组相关人像或生活方式摄影作品",
      "参与情绪板与拍摄路线讨论",
      "约定底片、精修张数及交付时间"
    ],
    "host": "位于北京的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "报酬、制作支出、交付与使用范围在合作前书面确认。"
  },
  {
    "id": 16,
    "company": "NORTH FRAME / OPEN LAB",
    "logo": "nf",
    "kind": "开放共创计划",
    "title": "京城 · 城市光影 · 摄影共创",
    "role": "摄影师",
    "city": "北京",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "3 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以胡同街巷与当代艺术空间为创作场景。通过人像与环境的关系完成一组有叙事感的影像。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供一组相关人像或生活方式摄影作品",
      "参与情绪板与拍摄路线讨论",
      "约定底片、精修张数及交付时间"
    ],
    "host": "位于北京的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  },
  {
    "id": 17,
    "company": "NORTH FRAME / OPEN LAB",
    "logo": "nf",
    "kind": "开放共创计划",
    "title": "京城 · 旧衣新生 · 造型实验",
    "role": "造型师",
    "city": "北京",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "4 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以胡同街巷与当代艺术空间为创作场景。以材质叠搭与身体比例为线索，探索衣着的日常表达。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供搭配作品或个人风格参考",
      "共同确认服装来源、尺码和借还安排",
      "参与试装与现场造型调整"
    ],
    "host": "位于北京的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  },
  {
    "id": 18,
    "company": "NORTH FRAME / PROJECTS",
    "logo": "nf",
    "kind": "独立创意工作室",
    "title": "京城 · 独立品牌形象片模特招募",
    "role": "模特",
    "city": "北京",
    "type": "paid",
    "pay": "¥3,000–5,000 / 项目",
    "amount": 3000,
    "format": "项目制 · 1–2 天拍摄",
    "time": "5 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以胡同街巷与当代艺术空间为创作场景。寻找表达自然、愿意参与创作讨论的面孔，记录真实的动作与情绪。项目包含前期沟通与现场执行，欢迎具有个人视角的创作者。",
    "needs": [
      "提供近期自然光照片或模特卡",
      "说明可合作档期与镜头表达兴趣",
      "拍摄前共同确认服装、场景与肖像使用范围"
    ],
    "host": "位于北京的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "报酬、制作支出、交付与使用范围在合作前书面确认。"
  },
  {
    "id": 19,
    "company": "NORTH FRAME / OPEN LAB",
    "logo": "nf",
    "kind": "开放共创计划",
    "title": "京城 · 自然表情 · 新面孔测试",
    "role": "模特",
    "city": "北京",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "5 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以胡同街巷与当代艺术空间为创作场景。寻找表达自然、愿意参与创作讨论的面孔，记录真实的动作与情绪。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供近期自然光照片或模特卡",
      "说明可合作档期与镜头表达兴趣",
      "拍摄前共同确认服装、场景与肖像使用范围"
    ],
    "host": "位于北京的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  },
  {
    "id": 20,
    "company": "NORTH FRAME / PROJECTS",
    "logo": "nf",
    "kind": "独立创意工作室",
    "title": "京城 · 护肤系列视觉妆发合作",
    "role": "妆发师",
    "city": "北京",
    "type": "paid",
    "pay": "¥5,000–7,000 / 项目",
    "amount": 5000,
    "format": "项目制 · 1–2 天拍摄",
    "time": "6 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以胡同街巷与当代艺术空间为创作场景。围绕肌肤质感与细节色彩，完成适合近景呈现的妆发视觉。项目包含前期沟通与现场执行，欢迎具有个人视角的创作者。",
    "needs": [
      "提供清晰妆发近景作品",
      "根据情绪板沟通妆容试样",
      "提前确认材料、卫生要求及过敏信息"
    ],
    "host": "位于北京的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "报酬、制作支出、交付与使用范围在合作前书面确认。"
  },
  {
    "id": 21,
    "company": "NORTH FRAME / OPEN LAB",
    "logo": "nf",
    "kind": "开放共创计划",
    "title": "京城 · 色彩与肌理 · 创意妆发",
    "role": "妆发师",
    "city": "北京",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "6 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以胡同街巷与当代艺术空间为创作场景。围绕肌肤质感与细节色彩，完成适合近景呈现的妆发视觉。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供清晰妆发近景作品",
      "根据情绪板沟通妆容试样",
      "提前确认材料、卫生要求及过敏信息"
    ],
    "host": "位于北京的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  },
  {
    "id": 22,
    "company": "NORTH FRAME / OPEN LAB",
    "logo": "nf",
    "kind": "开放共创计划",
    "title": "京城 · 一分钟城市诗 · 短片共创",
    "role": "导演 / 策划",
    "city": "北京",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "7 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以胡同街巷与当代艺术空间为创作场景。从日常人物与城市节奏出发，将一个简单想法转化为完整的短片故事。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供短片、分镜或创意提案样例",
      "共同确认叙事方向、拍摄分工与进度",
      "协商后期交付、音乐授权与作品署名"
    ],
    "host": "位于北京的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  },
  {
    "id": 23,
    "company": "LAKE STUDIO / PROJECTS",
    "logo": "ls",
    "kind": "独立创意工作室",
    "title": "湖畔 · 品牌生活方式影像摄影",
    "role": "摄影师",
    "city": "杭州",
    "type": "paid",
    "pay": "¥7,000–9,000 / 项目",
    "amount": 7000,
    "format": "项目制 · 1–2 天拍摄",
    "time": "4 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以湖岸自然与独立设计空间为创作场景。通过人像与环境的关系完成一组有叙事感的影像。项目包含前期沟通与现场执行，欢迎具有个人视角的创作者。",
    "needs": [
      "提供一组相关人像或生活方式摄影作品",
      "参与情绪板与拍摄路线讨论",
      "约定底片、精修张数及交付时间"
    ],
    "host": "位于杭州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "报酬、制作支出、交付与使用范围在合作前书面确认。"
  },
  {
    "id": 24,
    "company": "LAKE STUDIO / OPEN LAB",
    "logo": "ls",
    "kind": "开放共创计划",
    "title": "湖畔 · 城市光影 · 摄影共创",
    "role": "摄影师",
    "city": "杭州",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "4 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以湖岸自然与独立设计空间为创作场景。通过人像与环境的关系完成一组有叙事感的影像。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供一组相关人像或生活方式摄影作品",
      "参与情绪板与拍摄路线讨论",
      "约定底片、精修张数及交付时间"
    ],
    "host": "位于杭州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  },
  {
    "id": 25,
    "company": "LAKE STUDIO / PROJECTS",
    "logo": "ls",
    "kind": "独立创意工作室",
    "title": "湖畔 · 新季 Lookbook 造型企划",
    "role": "造型师",
    "city": "杭州",
    "type": "paid",
    "pay": "¥4,500–6,500 / 项目",
    "amount": 4500,
    "format": "项目制 · 1–2 天拍摄",
    "time": "5 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以湖岸自然与独立设计空间为创作场景。以材质叠搭与身体比例为线索，探索衣着的日常表达。项目包含前期沟通与现场执行，欢迎具有个人视角的创作者。",
    "needs": [
      "提供搭配作品或个人风格参考",
      "共同确认服装来源、尺码和借还安排",
      "参与试装与现场造型调整"
    ],
    "host": "位于杭州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "报酬、制作支出、交付与使用范围在合作前书面确认。"
  },
  {
    "id": 26,
    "company": "LAKE STUDIO / OPEN LAB",
    "logo": "ls",
    "kind": "开放共创计划",
    "title": "湖畔 · 旧衣新生 · 造型实验",
    "role": "造型师",
    "city": "杭州",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "5 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以湖岸自然与独立设计空间为创作场景。以材质叠搭与身体比例为线索，探索衣着的日常表达。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供搭配作品或个人风格参考",
      "共同确认服装来源、尺码和借还安排",
      "参与试装与现场造型调整"
    ],
    "host": "位于杭州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  },
  {
    "id": 27,
    "company": "LAKE STUDIO / PROJECTS",
    "logo": "ls",
    "kind": "独立创意工作室",
    "title": "湖畔 · 独立品牌形象片模特招募",
    "role": "模特",
    "city": "杭州",
    "type": "paid",
    "pay": "¥3,500–5,500 / 项目",
    "amount": 3500,
    "format": "项目制 · 1–2 天拍摄",
    "time": "6 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以湖岸自然与独立设计空间为创作场景。寻找表达自然、愿意参与创作讨论的面孔，记录真实的动作与情绪。项目包含前期沟通与现场执行，欢迎具有个人视角的创作者。",
    "needs": [
      "提供近期自然光照片或模特卡",
      "说明可合作档期与镜头表达兴趣",
      "拍摄前共同确认服装、场景与肖像使用范围"
    ],
    "host": "位于杭州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "报酬、制作支出、交付与使用范围在合作前书面确认。"
  },
  {
    "id": 28,
    "company": "LAKE STUDIO / OPEN LAB",
    "logo": "ls",
    "kind": "开放共创计划",
    "title": "湖畔 · 自然表情 · 新面孔测试",
    "role": "模特",
    "city": "杭州",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "6 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以湖岸自然与独立设计空间为创作场景。寻找表达自然、愿意参与创作讨论的面孔，记录真实的动作与情绪。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供近期自然光照片或模特卡",
      "说明可合作档期与镜头表达兴趣",
      "拍摄前共同确认服装、场景与肖像使用范围"
    ],
    "host": "位于杭州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  },
  {
    "id": 29,
    "company": "LAKE STUDIO / OPEN LAB",
    "logo": "ls",
    "kind": "开放共创计划",
    "title": "湖畔 · 色彩与肌理 · 创意妆发",
    "role": "妆发师",
    "city": "杭州",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "7 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以湖岸自然与独立设计空间为创作场景。围绕肌肤质感与细节色彩，完成适合近景呈现的妆发视觉。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供清晰妆发近景作品",
      "根据情绪板沟通妆容试样",
      "提前确认材料、卫生要求及过敏信息"
    ],
    "host": "位于杭州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  },
  {
    "id": 30,
    "company": "LAKE STUDIO / PROJECTS",
    "logo": "ls",
    "kind": "独立创意工作室",
    "title": "湖畔 · 生活方式品牌短片策划",
    "role": "导演 / 策划",
    "city": "杭州",
    "type": "paid",
    "pay": "¥13,000–15,000 / 项目",
    "amount": 13000,
    "format": "项目制 · 1–2 天拍摄",
    "time": "8 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以湖岸自然与独立设计空间为创作场景。从日常人物与城市节奏出发，将一个简单想法转化为完整的短片故事。项目包含前期沟通与现场执行，欢迎具有个人视角的创作者。",
    "needs": [
      "提供短片、分镜或创意提案样例",
      "共同确认叙事方向、拍摄分工与进度",
      "协商后期交付、音乐授权与作品署名"
    ],
    "host": "位于杭州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "报酬、制作支出、交付与使用范围在合作前书面确认。"
  },
  {
    "id": 31,
    "company": "LAKE STUDIO / OPEN LAB",
    "logo": "ls",
    "kind": "开放共创计划",
    "title": "湖畔 · 一分钟城市诗 · 短片共创",
    "role": "导演 / 策划",
    "city": "杭州",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "8 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以湖岸自然与独立设计空间为创作场景。从日常人物与城市节奏出发，将一个简单想法转化为完整的短片故事。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供短片、分镜或创意提案样例",
      "共同确认叙事方向、拍摄分工与进度",
      "协商后期交付、音乐授权与作品署名"
    ],
    "host": "位于杭州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  },
  {
    "id": 32,
    "company": "SOUTHERN EDIT / PROJECTS",
    "logo": "se",
    "kind": "独立创意工作室",
    "title": "南方 · 品牌生活方式影像摄影",
    "role": "摄影师",
    "city": "广州",
    "type": "paid",
    "pay": "¥7,500–9,500 / 项目",
    "amount": 7500,
    "format": "项目制 · 1–2 天拍摄",
    "time": "5 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以骑楼街区与热带城市光影为创作场景。通过人像与环境的关系完成一组有叙事感的影像。项目包含前期沟通与现场执行，欢迎具有个人视角的创作者。",
    "needs": [
      "提供一组相关人像或生活方式摄影作品",
      "参与情绪板与拍摄路线讨论",
      "约定底片、精修张数及交付时间"
    ],
    "host": "位于广州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "报酬、制作支出、交付与使用范围在合作前书面确认。"
  },
  {
    "id": 33,
    "company": "SOUTHERN EDIT / PROJECTS",
    "logo": "se",
    "kind": "独立创意工作室",
    "title": "南方 · 新季 Lookbook 造型企划",
    "role": "造型师",
    "city": "广州",
    "type": "paid",
    "pay": "¥5,000–7,000 / 项目",
    "amount": 5000,
    "format": "项目制 · 1–2 天拍摄",
    "time": "6 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以骑楼街区与热带城市光影为创作场景。以材质叠搭与身体比例为线索，探索衣着的日常表达。项目包含前期沟通与现场执行，欢迎具有个人视角的创作者。",
    "needs": [
      "提供搭配作品或个人风格参考",
      "共同确认服装来源、尺码和借还安排",
      "参与试装与现场造型调整"
    ],
    "host": "位于广州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "报酬、制作支出、交付与使用范围在合作前书面确认。"
  },
  {
    "id": 34,
    "company": "SOUTHERN EDIT / OPEN LAB",
    "logo": "se",
    "kind": "开放共创计划",
    "title": "南方 · 旧衣新生 · 造型实验",
    "role": "造型师",
    "city": "广州",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "6 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以骑楼街区与热带城市光影为创作场景。以材质叠搭与身体比例为线索，探索衣着的日常表达。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供搭配作品或个人风格参考",
      "共同确认服装来源、尺码和借还安排",
      "参与试装与现场造型调整"
    ],
    "host": "位于广州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  },
  {
    "id": 35,
    "company": "SOUTHERN EDIT / PROJECTS",
    "logo": "se",
    "kind": "独立创意工作室",
    "title": "南方 · 独立品牌形象片模特招募",
    "role": "模特",
    "city": "广州",
    "type": "paid",
    "pay": "¥4,000–6,000 / 项目",
    "amount": 4000,
    "format": "项目制 · 1–2 天拍摄",
    "time": "7 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以骑楼街区与热带城市光影为创作场景。寻找表达自然、愿意参与创作讨论的面孔，记录真实的动作与情绪。项目包含前期沟通与现场执行，欢迎具有个人视角的创作者。",
    "needs": [
      "提供近期自然光照片或模特卡",
      "说明可合作档期与镜头表达兴趣",
      "拍摄前共同确认服装、场景与肖像使用范围"
    ],
    "host": "位于广州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "报酬、制作支出、交付与使用范围在合作前书面确认。"
  },
  {
    "id": 36,
    "company": "SOUTHERN EDIT / OPEN LAB",
    "logo": "se",
    "kind": "开放共创计划",
    "title": "南方 · 自然表情 · 新面孔测试",
    "role": "模特",
    "city": "广州",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "7 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以骑楼街区与热带城市光影为创作场景。寻找表达自然、愿意参与创作讨论的面孔，记录真实的动作与情绪。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供近期自然光照片或模特卡",
      "说明可合作档期与镜头表达兴趣",
      "拍摄前共同确认服装、场景与肖像使用范围"
    ],
    "host": "位于广州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  },
  {
    "id": 37,
    "company": "SOUTHERN EDIT / PROJECTS",
    "logo": "se",
    "kind": "独立创意工作室",
    "title": "南方 · 护肤系列视觉妆发合作",
    "role": "妆发师",
    "city": "广州",
    "type": "paid",
    "pay": "¥6,000–8,000 / 项目",
    "amount": 6000,
    "format": "项目制 · 1–2 天拍摄",
    "time": "8 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以骑楼街区与热带城市光影为创作场景。围绕肌肤质感与细节色彩，完成适合近景呈现的妆发视觉。项目包含前期沟通与现场执行，欢迎具有个人视角的创作者。",
    "needs": [
      "提供清晰妆发近景作品",
      "根据情绪板沟通妆容试样",
      "提前确认材料、卫生要求及过敏信息"
    ],
    "host": "位于广州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "报酬、制作支出、交付与使用范围在合作前书面确认。"
  },
  {
    "id": 38,
    "company": "SOUTHERN EDIT / OPEN LAB",
    "logo": "se",
    "kind": "开放共创计划",
    "title": "南方 · 色彩与肌理 · 创意妆发",
    "role": "妆发师",
    "city": "广州",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "8 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以骑楼街区与热带城市光影为创作场景。围绕肌肤质感与细节色彩，完成适合近景呈现的妆发视觉。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供清晰妆发近景作品",
      "根据情绪板沟通妆容试样",
      "提前确认材料、卫生要求及过敏信息"
    ],
    "host": "位于广州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  },
  {
    "id": 39,
    "company": "SOUTHERN EDIT / PROJECTS",
    "logo": "se",
    "kind": "独立创意工作室",
    "title": "南方 · 生活方式品牌短片策划",
    "role": "导演 / 策划",
    "city": "广州",
    "type": "paid",
    "pay": "¥13,500–15,500 / 项目",
    "amount": 13500,
    "format": "项目制 · 1–2 天拍摄",
    "time": "9 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以骑楼街区与热带城市光影为创作场景。从日常人物与城市节奏出发，将一个简单想法转化为完整的短片故事。项目包含前期沟通与现场执行，欢迎具有个人视角的创作者。",
    "needs": [
      "提供短片、分镜或创意提案样例",
      "共同确认叙事方向、拍摄分工与进度",
      "协商后期交付、音乐授权与作品署名"
    ],
    "host": "位于广州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "报酬、制作支出、交付与使用范围在合作前书面确认。"
  },
  {
    "id": 40,
    "company": "SOUTHERN EDIT / OPEN LAB",
    "logo": "se",
    "kind": "开放共创计划",
    "title": "南方 · 一分钟城市诗 · 短片共创",
    "role": "导演 / 策划",
    "city": "广州",
    "type": "tfp",
    "pay": "互勉共创 / TFP",
    "amount": 0,
    "format": "共创 · 周末半天",
    "time": "9 天前",
    "date": "10 月 · 具体档期待协商",
    "description": "以骑楼街区与热带城市光影为创作场景。从日常人物与城市节奏出发，将一个简单想法转化为完整的短片故事。欢迎学生与新创作者参加，以作品交换为目标，共同商议创意与分工。",
    "needs": [
      "提供短片、分镜或创意提案样例",
      "共同确认叙事方向、拍摄分工与进度",
      "协商后期交付、音乐授权与作品署名"
    ],
    "host": "位于广州的示例创作团队，关注独立时装、青年文化与跨领域合作。本项目用于界面体验。",
    "fair": "无现金报酬；交通和材料成本、精修交付、署名与非商业使用权限须事先约定。"
  }
]);

let jobView = "all";
let jobType = "all", jobSavedOnly = false, selectedJob = 1;
let savedJobIds;
try { savedJobIds = new Set(JSON.parse(localStorage.getItem("cove-saved-jobs") || "[]")); } catch { savedJobIds = new Set(); }
const jobList = document.getElementById("jobList");
const jobDetail = document.getElementById("jobDetail");
const jobDialog = document.getElementById("jobActionDialog");
function jobAction(title, text, destructive) {
 document.getElementById("jobDialogTitle").textContent = title;
 document.getElementById("jobDialogText").textContent = text;
 const confirm = document.getElementById("confirmJobDialog");
 const close = document.getElementById("closeJobDialog");
 // Reuse one dialog for plain notices and for destructive confirmations.
 jobDialog.dataset.mode = destructive ? 'withdraw' : 'notice';
 confirm.textContent = destructive ? '确认撤销' : '知道了';
 confirm.classList.toggle('job-dialog-danger', Boolean(destructive));
 close.textContent = destructive ? '再想想' : '关闭';
 jobDialog.showModal();
}
function toggleJobSave(id) {
 savedJobIds.has(id) ? savedJobIds.delete(id) : savedJobIds.add(id);
 try { localStorage.setItem("cove-saved-jobs", JSON.stringify([...savedJobIds])); } catch { showToast("收藏已暂存，本次关闭页面后可能无法保留"); }
 renderJobs();
}
let jobBrowseScroll = 0;
function jobGallery(job) {
 if (job.images && job.images.length) {
  return job.images.map(image => `<img src="${image.src}" alt="${escapeHTML(image.name || job.title)}" loading="lazy">`).join('');
 }
 const seed=job.seed||job.id;
 return Array.from({length:4},(_,i)=>inspirationWorks[(seed*3+i)%inspirationWorks.length]).map(work=>`<img src="${work.image}" alt="示例视觉：${work.title}" loading="lazy">`).join('');
}
function jobPublisher(job) {
 return `<div class="job-publisher"><span class="job-logo">${job.logo}</span><div><strong>${job.company}</strong><p>${job.kind} · ${job.city}</p></div></div>`;
}
function closeJobDetail() {
 jobDetail.hidden=true;document.getElementById('jobsBrowse').hidden=false;
 window.scrollTo(0,jobBrowseScroll);
 const trigger=jobList.querySelector(`[data-open="${selectedJob}"]`);if(trigger)trigger.focus({preventScroll:true});
}
function renderJobDetail(job) {
 if(!job)return;
 selectedJob=job.id;jobBrowseScroll=window.scrollY;
 document.getElementById('jobsBrowse').hidden=true;jobDetail.hidden=false;
 jobDetail.innerHTML=`<button class="job-back">← 返回全部机会</button><div class="job-feature"><div class="job-feature-copy"><span class="job-seeking">正在寻找 · ${job.role} / ${job.type==='paid'?'商业付费':'互勉共创'}</span><h1>${job.title}</h1><p class="job-green-pay">${job.pay}</p><p class="job-feature-meta">◷ ${job.date}<br>⌖ ${job.city} · ${job.format}</p></div>${jobPublisher(job)}<div class="job-gallery job-gallery-large">${jobGallery(job)}</div></div><div class="job-detail-cta">${job.publishedByMe?`<button class="job-withdraw job-withdraw-large">撤销发布</button>`:`<button class="job-apply">申请合作 ↗</button>`}<button class="job-save" aria-label="收藏职位" aria-pressed="${savedJobIds.has(job.id)}">${savedJobIds.has(job.id)?'♥':'♡'}</button></div><div class="job-detail-prose"><h2>合作详情 <span>/ DETAIL</span></h2><p>${job.description}</p><h3>期待这样的你</h3><ul>${job.needs.map(n=>`<li>${n}</li>`).join('')}</ul><dl class="job-facts"><div><dt>项目城市</dt><dd>${job.city}</dd></div><div><dt>合作方式</dt><dd>${job.format}</dd></div><div><dt>报酬</dt><dd>${job.pay}</dd></div><div><dt>预计档期</dt><dd>${job.date}</dd></div></dl><h3>关于发布者</h3><p>${job.host}</p><div class="apply-agreement"><span>✳</span><p>${job.fair}</p></div><p class="job-example-note">示例项目与视觉参考，仅用于页面体验。</p></div>`;
 jobDetail.querySelector('.job-back').onclick=closeJobDetail;
 const apply=jobDetail.querySelector('.job-apply');
 if(apply)apply.onclick=()=>openApplication(job);
 const withdraw=jobDetail.querySelector('.job-withdraw');
 if(withdraw)withdraw.onclick=()=>withdrawJob(job.id);
 jobDetail.querySelector('.job-save').onclick=()=>{
  toggleJobSave(job.id);const button=jobDetail.querySelector('.job-save');button.textContent=savedJobIds.has(job.id)?'♥':'♡';button.setAttribute('aria-pressed',String(savedJobIds.has(job.id)));
 };
 window.scrollTo(0,0);jobDetail.querySelector('.job-back').focus({preventScroll:true});
}
function renderJobs() {
 const keyword = document.getElementById("jobKeyword").value.trim().toLowerCase();
 const city = document.getElementById("jobCity").value, role = document.getElementById("jobRole").value, pay = document.getElementById("jobPay").value;
 const filtered = jobData.filter(j => (jobView === "all" || (jobView === "applied" ? j.applied === true : j.publishedByMe === true)) && (jobType === "all" || j.type === jobType) && (!jobSavedOnly || savedJobIds.has(j.id)) && (!city || j.city === city) && (!role || j.role === role) && (!keyword || `${j.title} ${j.company} ${j.description}`.toLowerCase().includes(keyword)) && (!pay || (pay === "tfp" ? j.type === "tfp" : j.type === "paid" && (pay === "high" ? j.amount >= 5000 : j.amount < 5000))));
 document.getElementById("jobResultCount").textContent = filtered.length;
 document.getElementById("savedJobCount").textContent = savedJobIds.size;
 if (!filtered.some(j => j.id === selectedJob)) selectedJob = filtered[0]?.id;
 const emptyMessage = jobView === "applied" ? '你还没有申请记录<br>当前申请为流程预览，尚未接入真实申请服务。' : jobView === "published" ? '你还没有发布合作机会<br>点击右上角「＋ 发布合作机会」发布第一个项目。' : '暂时没有符合条件的机会<br>试试其他筛选条件，或点击重置。';
 jobList.innerHTML = filtered.length ? filtered.map(j=>`<article class="job-project-card">${j.publishedByMe?`<div class="job-owner-bar"><span class="job-owner-tag">我发布的</span><button class="job-withdraw" data-withdraw="${j.id}" type="button">撤销发布</button></div>`:''}<button class="job-project-open" data-open="${j.id}" aria-label="查看${j.title}详情"><div class="job-project-summary"><div><span class="job-seeking">正在寻找 · ${j.role}</span><h2>${j.title}</h2><strong class="job-green-pay">${j.pay}</strong></div><div class="job-project-meta"><span>◷ ${j.time}</span><span>⌖ ${j.city}</span><span>${j.type==='paid'?'商业付费':'互勉共创'}</span></div></div>${jobPublisher(j)}<div class="job-gallery">${jobGallery(j)}</div></button></article>`).join('') : `<div class="jobs-empty">${emptyMessage}</div>`;
 jobList.querySelectorAll('[data-open]').forEach(button=>button.onclick=()=>renderJobDetail(jobData.find(j=>j.id===Number(button.dataset.open))));
 jobList.querySelectorAll('[data-withdraw]').forEach(button=>button.onclick=()=>withdrawJob(Number(button.dataset.withdraw)));
 // Profile helpers are declared later in the file; guard the first render.
 if (typeof updateProfileCounts === 'function') updateProfileCounts();
}

// Withdraw a self-published job: confirm first, then drop it from the in-memory list.
let pendingWithdrawId = null;
function withdrawJob(id) {
 const job = jobData.find(j => j.id === id);
 if (!job || !job.publishedByMe) return;
 pendingWithdrawId = id;
 jobAction('确认撤销这个项目？', `「${job.title}」撤销后将从列表移除，此操作无法恢复。`, true);
}
function confirmWithdraw() {
 if (pendingWithdrawId === null) return;
 const index = jobData.findIndex(j => j.id === pendingWithdrawId);
 if (index > -1) {
  const [removed] = jobData.splice(index, 1);
  if (selectedJob === removed.id) selectedJob = null;
  savedJobIds.delete(removed.id);
  closeJobDetail();
  renderJobs();
  if (typeof renderProfilePublished === 'function') renderProfilePublished();
  showToast('已撤销「' + removed.title + '」');
 }
 pendingWithdrawId = null;
}
document.querySelectorAll('[data-job-view]').forEach(button => {
 button.addEventListener('click', () => {
  jobView = button.dataset.jobView;
  document.querySelectorAll('[data-job-view]').forEach(tab => {
   const active = tab.dataset.jobView === jobView;
   tab.classList.toggle('active', active);
   tab.setAttribute('aria-pressed', String(active));
  });
  renderJobs();
 });
});
document.getElementById('jobTypeFilter').onchange=event=>{jobType=event.target.value;renderJobs();};

document.getElementById("savedJobs").onclick=()=>{jobSavedOnly=!jobSavedOnly;const b=document.getElementById("savedJobs");b.classList.toggle("active",jobSavedOnly);b.setAttribute("aria-pressed",String(jobSavedOnly));renderJobs();};
["jobCity","jobRole","jobPay"].forEach(id=>document.getElementById(id).addEventListener("change",renderJobs));
document.getElementById("jobKeyword").addEventListener("input",renderJobs);
/* Keep the collapsible search open while it holds a query, so moving the
   mouse away never hides text the user already typed. */
const jobKeywordField=document.getElementById("jobKeyword");
const jobKeywordShell=jobKeywordField.closest(".job-keyword");
const syncJobKeywordWidth=()=>jobKeywordShell.classList.toggle("is-expanded",jobKeywordField.value.trim()!=="");
jobKeywordField.addEventListener("input",syncJobKeywordWidth);
jobKeywordShell.addEventListener("click",()=>jobKeywordField.focus());
syncJobKeywordWidth();
document.getElementById("resetJobs").onclick=()=>{["jobCity","jobRole","jobPay","jobKeyword"].forEach(id=>document.getElementById(id).value="");jobSavedOnly=false;document.getElementById("savedJobs").classList.remove("active");document.getElementById("savedJobs").setAttribute("aria-pressed","false");jobType="all";document.getElementById("jobTypeFilter").value="all";syncJobKeywordWidth();renderJobs();};
document.getElementById("publishJob").onclick=()=>openPublish();
document.getElementById("closeJobDialog").onclick=()=>{pendingWithdrawId=null;jobDialog.close();};
document.getElementById("confirmJobDialog").onclick=()=>{
 const withdrawing = jobDialog.dataset.mode === 'withdraw';
 jobDialog.close();
 if (withdrawing) confirmWithdraw();
};
renderJobs();

const applyDrawer = document.getElementById('applyDrawer');
const applyForm = document.getElementById('applyForm');
const applySelection = new Set();
let applyProjectId = null, applyPreviousOverflow = '';
function drawApplyWorks() {
 const works=document.getElementById('applyWorks');works.replaceChildren();
 inspirationWorks.slice(0,3).forEach((work,index)=>{
  const button=document.createElement('button');button.type='button';button.className='apply-work';button.setAttribute('aria-pressed',String(applySelection.has(index)));button.setAttribute('aria-label','选择示例作品 '+work.title);
  const photo=document.createElement('img');photo.src=work.image;photo.alt=work.title;
  const tick=document.createElement('span');tick.className='apply-work-tick';tick.textContent=applySelection.has(index)?'✓':'+';
  const title=document.createElement('strong');title.textContent=work.title;
  const category=document.createElement('small');category.textContent=work.category+' / 示例';
  button.append(photo,tick,title,category);button.onclick=()=>{applySelection.has(index)?applySelection.delete(index):applySelection.add(index);document.getElementById('applyError').textContent='';drawApplyWorks();};works.append(button);
 });
 document.getElementById('applyWorkCount').textContent=`已选 ${applySelection.size} / 3`;
}
function openApplication(job) {
 if(applyProjectId!==job.id){applyForm.reset();applySelection.clear();applyProjectId=job.id;}
 document.getElementById('applyProjectLogo').textContent=job.logo;
 document.getElementById('applyCompany').textContent=job.company;
 document.getElementById('applyProjectTitle').textContent=job.title;
 document.getElementById('applyProjectMeta').textContent=`${job.city} · ${job.pay}`;
 applyForm.elements.role.value=job.role;
 const paid=job.type==='paid';document.getElementById('applyPaidFields').hidden=!paid;document.getElementById('applyTfpFields').hidden=paid;
 applyForm.elements.quote.disabled=!paid;applyForm.elements.services.disabled=!paid;applyForm.elements.resources.disabled=paid;
 document.getElementById('applyPitchLabel').textContent=paid?'为什么想参与这个项目？':'你想尝试怎样的共创？';
 document.getElementById('applyFair').textContent=job.fair;document.getElementById('applyError').textContent='';
 applyForm.hidden=false;document.getElementById('applySuccess').hidden=true;document.getElementById('applySubmit').disabled=false;
 drawApplyWorks();applyPreviousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';applyDrawer.showModal();applyDrawer.querySelector('.apply-scroll').scrollTop=0;
}
applyDrawer.addEventListener('close',()=>{document.body.style.overflow=applyPreviousOverflow;});
document.getElementById('applyClose').onclick=()=>applyDrawer.close();
applyForm.addEventListener('submit',event=>{
 event.preventDefault();
 const portfolio=applyForm.elements.portfolio.value.trim();
 if(!applySelection.size&&!portfolio){document.getElementById('applyError').textContent='请选择至少一件示例作品，或填写作品集链接。';applyForm.elements.portfolio.focus();return;}
 if(portfolio&&!/^https?:\/\//i.test(portfolio)){document.getElementById('applyError').textContent='作品集链接请使用 https:// 或 http:// 地址。';applyForm.elements.portfolio.focus();return;}
 applyForm.hidden=true;document.getElementById('applySuccess').hidden=false;document.getElementById('applySubmit').disabled=true;document.getElementById('applyEdit').focus();
});
document.getElementById('applyEdit').onclick=()=>{applyForm.hidden=false;document.getElementById('applySuccess').hidden=true;document.getElementById('applySubmit').disabled=false;applyForm.elements.name.focus();};

/* =========================================
   IMAGE UPLOAD HELPERS
========================================= */

const MAX_IMAGE_BYTES = 8 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

// Read picked files into data URLs so previews survive without a backend.
function readImageFiles(fileList, limit, maxBytes) {
 const files = Array.from(fileList || []);
 const accepted = [];
 const problems = [];
 files.forEach(file => {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
   problems.push(`${file.name}：格式不支持`);
  } else if (file.size > (maxBytes || MAX_IMAGE_BYTES)) {
   problems.push(`${file.name}：超过 ${Math.round((maxBytes || MAX_IMAGE_BYTES) / 1024 / 1024)}MB`);
  } else {
   accepted.push(file);
  }
 });
 const usable = accepted.slice(0, limit);
 if (accepted.length > limit) problems.push(`最多 ${limit} 张，多余的已忽略`);
 return Promise.all(usable.map(file => new Promise(resolve => {
  const reader = new FileReader();
  reader.onload = () => resolve({src: reader.result, name: file.name});
  reader.onerror = () => resolve(null);
  reader.readAsDataURL(file);
 }))).then(results => ({images: results.filter(Boolean), problems}));
}

function renderImagePreview(container, images, onRemove) {
 container.replaceChildren();
 images.forEach((image, index) => {
  const cell = document.createElement('div');
  cell.className = 'upload-thumb';
  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.name || '已选图片';
  const remove = document.createElement('button');
  remove.type = 'button';
  remove.className = 'upload-thumb-remove';
  remove.textContent = '×';
  remove.setAttribute('aria-label', '移除这张图片');
  remove.onclick = () => onRemove(index);
  cell.append(img, remove);
  container.append(cell);
 });
}

/* =========================================
   PUBLISH A PROJECT
========================================= */

const publishDrawer = document.getElementById('publishDrawer');
const publishForm = document.getElementById('publishForm');
const publishImageInput = document.getElementById('publishImageInput');
const publishImagePreview = document.getElementById('publishImagePreview');
let publishPreviousOverflow = '';
let publishImages = [];

function drawPublishImages() {
 renderImagePreview(publishImagePreview, publishImages, index => {
  publishImages.splice(index, 1);
  drawPublishImages();
 });
 document.getElementById('publishImageCount').textContent = `已选 ${publishImages.length} 张`;
}

publishImageInput.addEventListener('change', () => {
 readImageFiles(publishImageInput.files, 4 - publishImages.length).then(({images, problems}) => {
  publishImages = publishImages.concat(images).slice(0, 4);
  drawPublishImages();
  document.getElementById('publishError').textContent = problems.join('；');
  publishImageInput.value = '';
 });
});

// Published jobs render through innerHTML templates; escape every user string once.
function escapeJobText(job) {
 const fields = ['title','company','logo','city','kind','format','date','time','pay','description','host','fair'];
 fields.forEach(key => {job[key] = escapeHTML(job[key]);});
 job.needs = job.needs.map(escapeHTML);
 return job;
}

function publishTypeFields() {
 const paid = publishForm.elements.type.value === 'paid';
 document.getElementById('publishPaidFields').hidden = !paid;
 document.getElementById('publishTfpFields').hidden = paid;
 publishForm.elements.amount.disabled = !paid;
 publishForm.elements.payNote.disabled = !paid;
 publishForm.elements.resources.disabled = paid;
}

function openPublish() {
 document.getElementById('publishError').textContent = '';
 publishForm.hidden = false;
 document.getElementById('publishSuccess').hidden = true;
 document.getElementById('publishSubmit').disabled = false;
 publishTypeFields();
 drawPublishImages();
 publishPreviousOverflow = document.body.style.overflow;
 document.body.style.overflow = 'hidden';
 publishDrawer.showModal();
 publishDrawer.querySelector('.apply-scroll').scrollTop = 0;
 publishForm.elements.title.focus({preventScroll:true});
}

publishForm.elements.type.addEventListener('change', publishTypeFields);
publishDrawer.addEventListener('close', () => {document.body.style.overflow = publishPreviousOverflow;});
document.getElementById('publishClose').onclick = () => publishDrawer.close();

publishForm.addEventListener('submit', event => {
 event.preventDefault();
 const error = document.getElementById('publishError');
 const value = name => publishForm.elements[name].value.trim();
 const paid = publishForm.elements.type.value === 'paid';
 const needs = value('needs').split('\n').map(line => line.trim()).filter(Boolean);
 if (!needs.length) {
  error.textContent = '请至少填写一条对合作者的要求。';
  publishForm.elements.needs.focus();
  return;
 }
 if (paid) {
  const amount = publishForm.elements.amount.value.trim();
  if (!amount || Number(amount) <= 0) {
   error.textContent = '商业付费项目请填写大于 0 的报酬金额。';
   publishForm.elements.amount.focus();
   return;
  }
 } else if (!value('resources')) {
  error.textContent = '互勉共创请说明你能提供的资源。';
  publishForm.elements.resources.focus();
  return;
 }
 error.textContent = '';
 const amount = paid ? Number(publishForm.elements.amount.value) : 0;
 const payNote = value('payNote');
 const job = {
  id: Date.now(),
  seed: jobData.length + 1,
  title: value('title'),
  company: value('company'),
  logo: value('company').slice(0, 1).toUpperCase(),
  type: publishForm.elements.type.value,
  role: publishForm.elements.role.value,
  city: value('city'),
  kind: paid ? '商业项目' : '共创项目',
  format: value('format'),
  date: value('date'),
  time: value('date'),
  amount,
  pay: paid ? `¥${amount.toLocaleString('zh-CN')}${payNote ? ' · ' + payNote : ''}` : '互勉共创 · ' + value('resources'),
  description: value('description'),
  needs,
  host: value('company') + ' 发布于 COVE',
  fair: value('fair'),
  images: publishImages.slice(),
  applied: false,
  publishedByMe: true
 };
 const preview = document.getElementById('publishPreview');
 preview.replaceChildren();
 const card = document.createElement('article');
 card.className = 'publish-preview-card';
 const seeking = document.createElement('span');
 seeking.className = 'job-seeking';
 seeking.textContent = `正在寻找 · ${job.role} / ${paid ? '商业付费' : '互勉共创'}`;
 const heading = document.createElement('h4');
 heading.textContent = job.title;
 const pay = document.createElement('strong');
 pay.className = 'job-green-pay';
 pay.textContent = job.pay;
 const meta = document.createElement('p');
 meta.textContent = `⌖ ${job.city} · ${job.format}　◷ ${job.date}`;
 card.append(seeking, heading, pay, meta);
 preview.append(card);
 // Escape only after the DOM preview read the raw values.
 jobData.unshift(escapeJobText(job));
 publishImages = [];
 drawPublishImages();
 renderJobs();
 renderProfilePublished();
 publishForm.hidden = true;
 document.getElementById('publishSuccess').hidden = false;
 document.getElementById('publishSubmit').disabled = true;
 publishDrawer.querySelector('.apply-scroll').scrollTop = 0;
 document.getElementById('publishEdit').focus();
});

document.getElementById('publishEdit').onclick = () => {
 publishForm.hidden = false;
 document.getElementById('publishSuccess').hidden = true;
 document.getElementById('publishSubmit').disabled = false;
 publishForm.reset();
 publishImages = [];
 drawPublishImages();
 publishTypeFields();
 publishForm.elements.title.focus();
};

/* =========================================
   PROFILE PAGE
========================================= */

const profilePage = document.getElementById('profilePage');
const profileGrid = document.getElementById('profileGrid');
const profilePublishedList = document.getElementById('profilePublishedList');
const uploadDrawer = document.getElementById('uploadDrawer');
const uploadForm = document.getElementById('uploadForm');
const uploadInput = document.getElementById('uploadInput');
const uploadPreview = document.getElementById('uploadPreview');
const profileEditDialog = document.getElementById('profileEditDialog');
const profileEditForm = document.getElementById('profileEditForm');
const avatarInput = document.getElementById('avatarInput');

const profileData = {
 name: 'COVE Member',
 role: '摄影师',
 city: '上海',
 bio: '专注时尚与人像影像创作，关注材质、光线与东方美学的当代表达。',
 avatar: '',
 works: []
};
// `var` is hoisted, so early renderJobs() calls can safely check it.
profileState = profileData;
let uploadImages = [];
let pendingAvatar = '';
let profileTab = 'works';
let profilePreviousOverflow = '';

pageSections.profile = profilePage;

var profileState = null;
// When set, the profile page renders this creator instead of the logged-in user.
var viewingProfile = null;

function activeProfile() {
 return viewingProfile || profileState || null;
}

function updateProfileCounts() {
 // renderJobs() may run before this block's declarations are initialized.
 const target = activeProfile();
 if (!target) return;
 const guest = Boolean(viewingProfile);
 const published = guest ? 0 : jobData.filter(job => job.publishedByMe).length;
 document.getElementById('profileWorkCount').textContent = target.works.length;
 document.getElementById('profilePublishCount').textContent = published;
 document.getElementById('profileSavedCount').textContent = guest ? 0 : savedJobIds.size;
}

function renderProfileHero() {
 const target = activeProfile();
 if (!target) return;
 const guest = Boolean(viewingProfile);
 document.getElementById('profileDisplayName').textContent = target.name;
 document.getElementById('profileRole').textContent = guest
  ? `${target.role} · ${target.city}`
  : target.role;
 document.getElementById('profileCity').textContent = target.city;
 document.getElementById('profileBio').textContent = target.bio;
 // Keep the panel status line in sync with the logged-in user's role.
 const panelRole = document.getElementById('panelProfileRole');
 if (panelRole && !guest) panelRole.textContent = target.role;
 document.getElementById('profileOwnActions').hidden = guest;
 document.getElementById('profileGuestActions').hidden = !guest;
 document.getElementById('profileBack').hidden = !guest;
 const avatar = document.getElementById('profileAvatar');
 avatar.replaceChildren();
 if (target.avatar) {
  const img = document.createElement('img');
  img.src = target.avatar;
  img.alt = target.name + ' 的头像';
  avatar.append(img);
 } else {
  avatar.textContent = target.name.slice(0, 1).toUpperCase();
 }
 updateProfileCounts();
}

function renderProfileWorks() {
 const target = activeProfile();
 if (!target) return;
 const guest = Boolean(viewingProfile);
 profileGrid.replaceChildren();
 const empty = document.getElementById('profileWorksEmpty');
 empty.hidden = target.works.length > 0;
 empty.innerHTML = guest
  ? '该创作者还没有公开作品'
  : '还没有作品<br>点击「上传作品 ＋」添加你的第一组图片。';
 target.works.forEach((work, index) => {
  const card = document.createElement('article');
  card.className = 'profile-work';
  const img = document.createElement('img');
  img.src = work.image;
  img.alt = work.title;
  img.loading = 'lazy';
  const info = document.createElement('div');
  info.className = 'profile-work-info';
  const title = document.createElement('strong');
  title.textContent = work.title;
  const meta = document.createElement('small');
  meta.textContent = work.tags && work.tags.length ? `${work.category} · ${work.tags.join(' ')}` : work.category;
  info.append(title, meta);
  card.append(img, info);
  if (!guest) {
   const remove = document.createElement('button');
   remove.type = 'button';
   remove.className = 'profile-work-remove';
   remove.textContent = '×';
   remove.setAttribute('aria-label', '删除作品 ' + work.title);
   remove.onclick = () => {
    target.works.splice(index, 1);
    renderProfileWorks();
    updateProfileCounts();
    showToast('已删除「' + work.title + '」');
   };
   card.append(remove);
  }
  profileGrid.append(card);
 });
 updateProfileCounts();
}

function renderProfilePublished() {
 if (!profilePublishedList) return;
 const mine = jobData.filter(job => job.publishedByMe);
 profilePublishedList.replaceChildren();
 document.getElementById('profilePublishedEmpty').hidden = mine.length > 0;
 mine.forEach(job => {
  const card = document.createElement('article');
  card.className = 'profile-published-card';
  const head = document.createElement('div');
  head.className = 'profile-published-head';
  const seeking = document.createElement('span');
  seeking.className = 'job-seeking';
  seeking.textContent = `正在寻找 · ${job.role} / ${job.type === 'paid' ? '商业付费' : '互勉共创'}`;
  const withdraw = document.createElement('button');
  withdraw.type = 'button';
  withdraw.className = 'job-withdraw';
  withdraw.textContent = '撤销发布';
  withdraw.onclick = () => withdrawJob(job.id);
  head.append(seeking, withdraw);
  const title = document.createElement('h4');
  title.textContent = job.title;
  const pay = document.createElement('strong');
  pay.className = 'job-green-pay';
  pay.textContent = job.pay;
  const meta = document.createElement('p');
  meta.textContent = `⌖ ${job.city} · ${job.format}　◷ ${job.date}`;
  card.append(head, title, pay, meta);
  profilePublishedList.append(card);
 });
 updateProfileCounts();
}

function setProfileTab(tab) {
 profileTab = tab;
 document.querySelectorAll('[data-profile-tab]').forEach(button => {
  const active = button.dataset.profileTab === tab;
  button.classList.toggle('active', active);
  button.setAttribute('aria-pressed', String(active));
 });
 document.getElementById('profileWorksPane').hidden = tab !== 'works';
 document.getElementById('profilePublishedPane').hidden = tab !== 'published';
 if (tab === 'published') renderProfilePublished();
}

document.querySelectorAll('[data-profile-tab]').forEach(button => {
 button.addEventListener('click', () => setProfileTab(button.dataset.profileTab));
});

function openProfilePage(asGuest) {
 closeProfile();
 if (!asGuest) viewingProfile = null;
 // Keep navigation working even if a later render step fails.
 pageSections.profile = pageSections.profile || document.getElementById('profilePage');
 switchPage('profile');
 try {
  renderProfileHero();
  renderProfileWorks();
  if (viewingProfile) {
   setProfileTab('works');
  } else {
   renderProfilePublished();
   setProfileTab(profileTab);
  }
  document.querySelector('[data-profile-tab="published"]').hidden = Boolean(viewingProfile);
 } catch (error) {
  showToast('主页内容渲染出错，请刷新页面重试');
 }
 window.scrollTo(0, 0);
}

document.getElementById('profileBack').addEventListener('click', () => {
 viewingProfile = null;
 switchPage('work');
});

document.getElementById('profileFollowButton').addEventListener('click', event => {
 const on = event.target.textContent.trim() === '＋ 关注';
 event.target.textContent = on ? '已关注' : '＋ 关注';
 showToast(on ? '已关注 ' + activeProfile().name : '已取消关注');
});

document.getElementById('profileContactButton').addEventListener('click', () => {
 showToast('合作邀约功能尚未接入，当前为界面预览');
});

document.getElementById('profileEnter').addEventListener('click', () => openProfilePage(false));

/* ---------- upload works ---------- */

function drawUploadImages() {
 renderImagePreview(uploadPreview, uploadImages, index => {
  uploadImages.splice(index, 1);
  drawUploadImages();
 });
 document.getElementById('uploadCount').textContent = `已选 ${uploadImages.length} 张`;
}

uploadInput.addEventListener('change', () => {
 readImageFiles(uploadInput.files, 9 - uploadImages.length).then(({images, problems}) => {
  uploadImages = uploadImages.concat(images).slice(0, 9);
  drawUploadImages();
  document.getElementById('uploadError').textContent = problems.join('；');
  uploadInput.value = '';
 });
});

function openUpload() {
 document.getElementById('uploadError').textContent = '';
 uploadForm.hidden = false;
 document.getElementById('uploadSuccess').hidden = true;
 document.getElementById('uploadSubmit').disabled = false;
 drawUploadImages();
 profilePreviousOverflow = document.body.style.overflow;
 document.body.style.overflow = 'hidden';
 uploadDrawer.showModal();
 uploadDrawer.querySelector('.apply-scroll').scrollTop = 0;
}

document.getElementById('profileUploadButton').onclick = openUpload;
document.getElementById('uploadClose').onclick = () => uploadDrawer.close();
uploadDrawer.addEventListener('close', () => {document.body.style.overflow = profilePreviousOverflow;});

uploadForm.addEventListener('submit', event => {
 event.preventDefault();
 const error = document.getElementById('uploadError');
 if (!uploadImages.length) {
  error.textContent = '请至少选择一张图片。';
  return;
 }
 const title = uploadForm.elements.title.value.trim();
 const category = uploadForm.elements.category.value;
 const tags = uploadForm.elements.tags.value.trim().split(/\s+/).filter(Boolean).slice(0, 6);
 uploadImages.forEach((image, index) => {
  profileData.works.unshift({
   image: image.src,
   title: uploadImages.length > 1 ? `${title} ${String(index + 1).padStart(2, '0')}` : title,
   category,
   tags
  });
 });
 uploadImages = [];
 drawUploadImages();
 uploadForm.reset();
 renderProfileWorks();
 setProfileTab('works');
 uploadForm.hidden = true;
 document.getElementById('uploadSuccess').hidden = false;
 document.getElementById('uploadSubmit').disabled = true;
 document.getElementById('uploadAgain').focus();
});

document.getElementById('uploadAgain').onclick = () => {
 uploadForm.hidden = false;
 document.getElementById('uploadSuccess').hidden = true;
 document.getElementById('uploadSubmit').disabled = false;
 uploadForm.elements.title.focus();
};

/* ---------- edit profile ---------- */

avatarInput.addEventListener('change', () => {
 readImageFiles(avatarInput.files, 1, 4 * 1024 * 1024).then(({images, problems}) => {
  document.getElementById('profileEditError').textContent = problems.join('；');
  if (images.length) {
   pendingAvatar = images[0].src;
   const preview = document.getElementById('avatarPreview');
   preview.hidden = false;
   preview.replaceChildren();
   const img = document.createElement('img');
   img.src = pendingAvatar;
   img.alt = '新头像预览';
   preview.append(img);
  }
  avatarInput.value = '';
 });
});

document.getElementById('profileEditButton').onclick = () => {
 profileEditForm.elements.name.value = profileData.name;
 profileEditForm.elements.role.value = profileData.role;
 profileEditForm.elements.city.value = profileData.city;
 profileEditForm.elements.bio.value = profileData.bio;
 pendingAvatar = '';
 document.getElementById('avatarPreview').hidden = true;
 document.getElementById('profileEditError').textContent = '';
 profilePreviousOverflow = document.body.style.overflow;
 document.body.style.overflow = 'hidden';
 profileEditDialog.showModal();
};

document.getElementById('profileEditClose').onclick = () => profileEditDialog.close();
profileEditDialog.addEventListener('close', () => {document.body.style.overflow = profilePreviousOverflow;});

profileEditForm.addEventListener('submit', event => {
 event.preventDefault();
 profileData.name = profileEditForm.elements.name.value.trim() || 'COVE Member';
 profileData.role = profileEditForm.elements.role.value;
 profileData.city = profileEditForm.elements.city.value.trim() || '上海';
 profileData.bio = profileEditForm.elements.bio.value.trim();
 if (pendingAvatar) profileData.avatar = pendingAvatar;
 renderProfileHero();
 profileEditDialog.close();
 showToast('资料已更新');
});

renderProfileHero();
renderProfileWorks();

/* =========================================
   WORK DETAIL PAGE
========================================= */

const workPage = document.getElementById('workPage');
const workImage = document.getElementById('workImage');
const CITY_POOL = ['上海', '北京', '杭州', '广州', '伦敦', '东京'];
const ROLE_BY_CATEGORY = {'摄影': 'Photographer', '造型': 'Stylist', '妆发': 'Makeup & Hair', '品牌视觉': 'Creative Director', '模特': 'Model'};
const SUPPORT_ROLES = [['Creative Director', '创意总监'], ['Model', '模特'], ['Makeup & Hair', '妆发']];
const SEED_COMMENTS = [
 {name: 'Dmytro Zhurba', badge: 'PRO Model', text: 'Beautiful ❤', time: '6h', likes: 0},
 {name: 'Francis Wong', badge: 'PRO Photographer', text: 'This frame is perfect ❤️', time: '1d', likes: 1}
];

let workIndex = -1;
let workReturnPage = 'inspiration';

// Derive stable credits/comments once so re-opening a work shows the same data.
function ensureWorkDetail(work, index) {
 if (work.detail) return work.detail;
 const city = CITY_POOL[index % CITY_POOL.length];
 const credits = [{
  name: work.creator,
  avatar: work.avatar,
  role: ROLE_BY_CATEGORY[work.category] || 'Creative',
  city: city,
  owner: true
 }];
 SUPPORT_ROLES.slice(0, 2).forEach((pair, offset) => {
  const mate = inspirationWorks[(index + offset + 1) % inspirationWorks.length];
  credits.push({
   name: mate.creator,
   avatar: mate.avatar,
   role: pair[0],
   city: CITY_POOL[(index + offset + 2) % CITY_POOL.length],
   owner: false
  });
 });
 work.detail = {
  credits: credits,
  category: work.category,
  monthly: (18 + (index * 7) % 40).toFixed(1) + 'k posts / mo',
  followed: false,
  liked: false,
  comments: SEED_COMMENTS.map(item => Object.assign({}, item))
 };
 return work.detail;
}

function renderWorkCredits(detail) {
 const box = document.getElementById('workCredits');
 box.replaceChildren();
 detail.credits.forEach(person => {
  const row = document.createElement('article');
  row.className = 'work-credit';
  const avatar = document.createElement('img');
  avatar.src = person.avatar;
  avatar.alt = person.name;
  avatar.loading = 'lazy';
  const copy = document.createElement('div');
  copy.className = 'work-credit-copy';
  const nameRow = document.createElement('div');
  nameRow.className = 'work-credit-name';
  const link = document.createElement('button');
  link.type = 'button';
  link.className = 'work-credit-link';
  link.textContent = person.name;
  link.onclick = () => openCreatorProfile(person);
  nameRow.append(link);
  if (person.owner) {
   const tag = document.createElement('span');
   tag.className = 'work-credit-tag';
   tag.textContent = 'Original Poster';
   nameRow.append(tag);
  }
  const meta = document.createElement('small');
  meta.textContent = `${person.role} · ${person.city}`;
  copy.append(nameRow, meta);
  const follow = document.createElement('button');
  follow.type = 'button';
  follow.className = 'work-credit-follow';
  follow.textContent = '＋';
  follow.setAttribute('aria-label', '关注 ' + person.name);
  follow.onclick = () => showToast('已关注 ' + person.name + '（交互预览）');
  row.append(avatar, copy, follow);
  box.append(row);
 });
}

function renderWorkComments(detail) {
 const box = document.getElementById('workComments');
 box.replaceChildren();
 detail.comments.forEach(item => {
  const row = document.createElement('article');
  row.className = 'work-comment';
  const head = document.createElement('div');
  head.className = 'work-comment-head';
  const name = document.createElement('strong');
  name.textContent = item.name;
  head.append(name);
  if (item.badge) {
   const badge = document.createElement('span');
   badge.className = 'work-comment-badge';
   badge.textContent = item.badge;
   head.append(badge);
  }
  const text = document.createElement('p');
  text.textContent = item.text;
  const foot = document.createElement('div');
  foot.className = 'work-comment-foot';
  const like = document.createElement('button');
  like.type = 'button';
  like.textContent = item.likes ? `Like · ${item.likes}` : 'Like';
  like.onclick = () => {
   item.likes += 1;
   renderWorkComments(detail);
  };
  const reply = document.createElement('button');
  reply.type = 'button';
  reply.textContent = 'Reply';
  reply.onclick = () => document.querySelector('#workCommentForm input').focus();
  const time = document.createElement('small');
  time.textContent = item.time;
  foot.append(like, reply, time);
  row.append(head, text, foot);
  box.append(row);
 });
 document.getElementById('workCommentCount').textContent = detail.comments.length;
}

function openWorkDetail(index) {
 const work = inspirationWorks[index];
 if (!work) return;
 workIndex = index;
 const detail = ensureWorkDetail(work, index);
 workImage.src = work.image;
 workImage.alt = `${work.title} by ${work.creator}`;
 document.getElementById('workLikeCount').textContent = work.likes;
 const likeButton = document.getElementById('workLike');
 likeButton.setAttribute('aria-pressed', String(detail.liked));
 likeButton.querySelector('.work-action-icon').textContent = detail.liked ? '♥' : '♡';
 document.getElementById('workCategoryName').textContent = work.category;
 document.getElementById('workCategoryPosts').textContent = detail.monthly;
 const chip = document.getElementById('workFollowChip');
 chip.textContent = detail.followed ? '已关注' : '关注';
 chip.classList.toggle('work-chip-on', detail.followed);
 renderWorkCredits(detail);
 renderWorkComments(detail);
 switchPage('work');
 window.scrollTo(0, 0);
}

function stepWork(delta) {
 if (!inspirationWorks.length) return;
 const next = (workIndex + delta + inspirationWorks.length) % inspirationWorks.length;
 openWorkDetail(next);
}

document.getElementById('workBack').addEventListener('click', () => switchPage(workReturnPage));
document.getElementById('workPrev').addEventListener('click', () => stepWork(-1));
document.getElementById('workNext').addEventListener('click', () => stepWork(1));

document.getElementById('workLike').addEventListener('click', () => {
 const work = inspirationWorks[workIndex];
 if (!work) return;
 const detail = work.detail;
 detail.liked = !detail.liked;
 work.likes += detail.liked ? 1 : -1;
 document.getElementById('workLikeCount').textContent = work.likes;
 const button = document.getElementById('workLike');
 button.setAttribute('aria-pressed', String(detail.liked));
 button.querySelector('.work-action-icon').textContent = detail.liked ? '♥' : '♡';
 renderInspirationWorks(currentInspirationFilter);
});

document.getElementById('workCommentJump').addEventListener('click', () => document.querySelector('#workCommentForm input').focus());

document.getElementById('workCategoryRow').addEventListener('click', () => {
 const work = inspirationWorks[workIndex];
 if (!work || !work.detail) return;
 work.detail.followed = !work.detail.followed;
 const chip = document.getElementById('workFollowChip');
 chip.textContent = work.detail.followed ? '已关注' : '关注';
 chip.classList.toggle('work-chip-on', work.detail.followed);
});

document.getElementById('workCommentForm').addEventListener('submit', event => {
 event.preventDefault();
 const input = event.target.elements.comment;
 const text = input.value.trim();
 if (!text) return;
 const work = inspirationWorks[workIndex];
 if (!work || !work.detail) return;
 work.detail.comments.push({name: profileData.name, badge: profileData.role, text: text, time: '刚刚', likes: 0});
 input.value = '';
 renderWorkComments(work.detail);
});

/* ---------- creator profile ---------- */

function openCreatorProfile(person) {
 const works = inspirationWorks
  .filter(item => item.creator === person.name)
  .map(item => ({image: item.image, title: item.title, category: item.category, tags: item.tags}));
 viewingProfile = {
  name: person.name,
  role: person.role,
  city: person.city,
  bio: `${person.role} based in ${person.city}. COVE 示例创作者主页，作品与资料仅用于页面体验。`,
  avatar: person.avatar,
  works: works
 };
 openProfilePage(true);
}

/* =========================================
   INSIGHT MASCOT
========================================= */

const mascotImage = document.getElementById('mascotImage');

if (mascotImage) {
 // Durations come from the source files so each clip finishes before switching.
 const MASCOT = {
  idle: {src: 'assets/mascot/idle.gif', ms: 5000},
  greet: {src: 'assets/mascot/greet.gif', ms: 4000},
  sleep: {src: 'assets/mascot/sleep.gif', ms: 5000},
  sway: {src: 'assets/mascot/sway.gif', ms: 3000},
  dribble: {src: 'assets/mascot/dribble.gif', ms: 4000}
 };
 const RANDOM_POOL = ['idle', 'sway', 'dribble'];
 const IDLE_SLEEP_MS = 15000;

 let mascotTimer = null;
 let sleepTimer = null;
 let mascotState = '';

 function playMascot(name, restartSameClip) {
  const clip = MASCOT[name];
  if (!clip) return;
  if (mascotState !== name || restartSameClip) {
   mascotState = name;
   // Re-assigning the same src would not restart a GIF; add a cache-busting token.
   mascotImage.src = clip.src + (restartSameClip ? '?t=' + Date.now() : '');
  }
  clearTimeout(mascotTimer);
  if (name === 'sleep') return;
  mascotTimer = setTimeout(playRandomMascot, clip.ms);
 }

 function playRandomMascot() {
  const pool = RANDOM_POOL.filter(name => name !== mascotState);
  const next = pool.length ? pool[Math.floor(Math.random() * pool.length)] : RANDOM_POOL[0];
  playMascot(next);
 }

 function scheduleMascotSleep() {
  clearTimeout(sleepTimer);
  sleepTimer = setTimeout(() => playMascot('sleep'), IDLE_SLEEP_MS);
 }

 // Any interaction wakes the mascot and restarts the sleep countdown.
 function wakeMascot() {
  if (mascotState === 'sleep') playRandomMascot();
  scheduleMascotSleep();
 }

 if (searchInput) {
  searchInput.addEventListener('focus', () => {
   clearTimeout(sleepTimer);
   playMascot('greet', true);
   scheduleMascotSleep();
  });
  searchInput.addEventListener('input', wakeMascot);
 }
 ['pointerdown', 'keydown'].forEach(type => {
  document.addEventListener(type, wakeMascot, {passive: true});
 });

 playRandomMascot();
 scheduleMascotSleep();
}

/* =========================================
   FEATURED REPORT ARTICLE
========================================= */

const featureReportCard = document.getElementById('featureReportCard');
const reportBack = document.getElementById('reportBack');

if (featureReportCard) {
 featureReportCard.addEventListener('click', () => {
  pageSections.report = pageSections.report || document.getElementById('reportPage');
  switchPage('report');
  window.scrollTo(0, 0);
 });
}

if (reportBack) {
 reportBack.addEventListener('click', () => {
  switchPage('insights');
  window.scrollTo(0, 0);
 });
}
