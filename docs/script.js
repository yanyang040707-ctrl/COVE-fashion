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

const trendCards = document.querySelectorAll(".trend-card");
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
const trendSection = document.querySelector(".trend-section");
let searchController;
let searchVersion = 0;

function renderShootingReport(data) {
 const report=data.report;
 const root=document.createElement('div');root.className='shoot-report';
 function el(tag,text,className){const node=document.createElement(tag);if(text)node.textContent=text;if(className)node.className=className;return node;}
 function section(title){const part=el('section',null,'shoot-section');part.append(el('h3',title));root.append(part);return part;}
 function list(title,items){const part=section(title),ul=el('ul');items.forEach(item=>ul.append(el('li',item)));part.append(ul);}
 function refs(item){return item.source_ids.length?'参考知乎来源 '+item.source_ids.map(id=>'['+id+']').join(' '):'AI 创作建议';}
 const header=el('header',null,'shoot-header');header.append(el('span','COVE / SHOOTING PLAN','shoot-label'),el('h2',report.title),el('p',report.summary));
 const download=el('button','下载方案 ↓','shoot-download');download.type='button';download.onclick=()=>{
  const lines=['# '+report.title,report.summary,'\n## 策划假设',...report.assumptions,'\n## 选址',...report.locations.map(l=>`${l.name}\n${l.reason}\n时间：${l.timing}\n核实：${l.verify}\n${refs(l)}`),'\n## 造型',...report.styling,'\n## 分镜',...report.shots.map((s,i)=>`${i+1}. ${s.title} · ${s.location}\n机位：${s.framing}\n动作：${s.pose}\n用光：${s.light}\n焦段：${s.lens}\n${refs(s)}`),'\n## 行程',...report.schedule,'\n## 准备清单',...report.checklist,'\n## 来源说明',report.source_note,data.warning,...data.items.map((s,i)=>`[${i+1}] ${s.title}\n${s.url}`)];
  const url=URL.createObjectURL(new Blob([lines.join('\n\n')],{type:'text/markdown;charset=utf-8'}));const a=el('a');a.href=url;a.download='COVE-拍摄方案.md';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 };header.append(download);root.append(header);
 if(data.warning)root.append(el('p',data.warning,'shoot-notice'));
 list('01 / 策划假设',report.assumptions);
 const locations=section('02 / 去哪里拍');const grid=el('div',null,'shoot-location-grid');report.locations.forEach((item,i)=>{const card=el('article',null,'shoot-location');card.append(el('span',String(i+1).padStart(2,'0'),'shoot-label'),el('h4',item.name),el('p',item.reason),el('p','建议时间 · '+item.timing),el('p','出发前核实 · '+item.verify,'shoot-muted'),el('small',refs(item)));grid.append(card);});locations.append(grid);
 list('03 / 造型与视觉',report.styling);
 const shots=section('04 / 分镜与角度');shots.append(el('p','构图示意为通用机位图，不是场地实景；实际效果随焦段、距离与环境变化。','shoot-muted'));
 const shotGrid=el('div',null,'shoot-shot-grid');
 const diagrams={low:['低机位 · 仰拍','M30 105 145 38','M0 104 260 75'],eye:['平视 · 视线高度','M30 70 145 70','M0 86 260 86'],high:['高机位 · 俯拍','M30 25 145 84','M0 64 260 99'],detail:['近景 · 局部特写','M55 63 136 63','M0 92 260 92']};
 report.shots.forEach((shot,i)=>{const card=el('article',null,'shoot-shot');const art=el('div',null,'shoot-diagram');const [label,ray,horizon]=diagrams[shot.angle];
 art.innerHTML=`<svg viewBox="0 0 260 145" role="img" aria-label="${label}构图示意"><path d="M86 0V145M174 0V145M0 48H260M0 97H260" stroke="#39313f" stroke-dasharray="3 5" fill="none"/><path d="${horizon}" stroke="#75627e" fill="none"/><circle cx="151" cy="40" r="11" fill="none" stroke="#cbb7de" stroke-width="2"/><path d="M151 52v41m0-30-25 16m25-16 22 17m-22 13-16 34m16-34 24 29" stroke="#cbb7de" stroke-width="2" fill="none"/><path d="${ray}" stroke="#d4bbf4" stroke-width="2" stroke-dasharray="5 4" fill="none"/><text x="10" y="137" fill="#bda7d1" font-size="9">CAMERA → MODEL</text></svg>`;
 art.append(el('span',label));card.append(art,el('h4',String(i+1).padStart(2,'0')+' / '+shot.title),el('small',shot.location));
 for(const [name,value] of [['机位',shot.framing],['动作',shot.pose],['用光',shot.light],['焦段',shot.lens]]){const p=el('p');p.append(el('strong',name+' · '),document.createTextNode(value));card.append(p);}card.append(el('small',refs(shot)));shotGrid.append(card);
 });shots.append(shotGrid);list('05 / 拍摄行程',report.schedule);list('06 / 出发清单',report.checklist);
 const sourceSection=section('07 / 知乎参考与创作说明');sourceSection.append(el('p',report.source_note,'shoot-muted'));data.items.forEach((item,i)=>{const card=el('article',null,'shoot-source'),a=el('a',`[${i+1}] ${item.title}`);a.href=item.url;a.target='_blank';a.rel='noopener noreferrer';card.append(a,el('small',item.author+' · 知乎'),el('p',item.summary));sourceSection.append(card);});
 zhihuResultList.append(root);
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
    zhihuStatus.textContent = `正在检索知乎内容并制作「${query}」的拍摄方案，通常需要 1–3 分钟…`;
    zhihuResults.setAttribute("aria-busy", "true");
    try {
        const response = await fetch("/api/insights/report", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query }),
            signal: controller.signal
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || "搜索服务暂不可用。");
        if (version !== searchVersion) return;
        zhihuStatus.textContent = `方案已生成 · ${data.items.length} 条知乎参考 · AI 创作建议`;
        renderShootingReport(data);
    } catch (error) {
        if (version !== searchVersion) return;
        zhihuStatus.textContent = error.name === "AbortError"
            ? "方案生成超时，请重新点击生成。"
            : (error instanceof SyntaxError || error instanceof TypeError)
                ? "无法连接搜索服务，请确认本地后端已启动后重试。" : error.message;
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
        card.style.display = "block";
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
document.getElementById('topicsPrev').onclick = () => trendCarousel.scrollBy({left:-520,behavior:'smooth'});
document.getElementById('topicsNext').onclick = () => trendCarousel.scrollBy({left:520,behavior:'smooth'});


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
}

function closeProfile() {
    profilePanel.classList.remove("open");
    document.body.style.overflow = "";
}

profileButton.addEventListener("click", openProfile);
profileClose.addEventListener("click", closeProfile);


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
function jobAction(title, text) {
 document.getElementById("jobDialogTitle").textContent = title;
 document.getElementById("jobDialogText").textContent = text;
 jobDialog.showModal();
}
function toggleJobSave(id) {
 savedJobIds.has(id) ? savedJobIds.delete(id) : savedJobIds.add(id);
 try { localStorage.setItem("cove-saved-jobs", JSON.stringify([...savedJobIds])); } catch { showToast("收藏已暂存，本次关闭页面后可能无法保留"); }
 renderJobs();
}
let jobBrowseScroll = 0;
function jobGallery(job) {
 return Array.from({length:4},(_,i)=>inspirationWorks[(job.id*3+i)%inspirationWorks.length]).map(work=>`<img src="${work.image}" alt="示例视觉：${work.title}" loading="lazy">`).join('');
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
 jobDetail.innerHTML=`<button class="job-back">← 返回全部机会</button><div class="job-feature"><div class="job-feature-copy"><span class="job-seeking">正在寻找 · ${job.role} / ${job.type==='paid'?'商业付费':'互勉共创'}</span><h1>${job.title}</h1><p class="job-green-pay">${job.pay}</p><p class="job-feature-meta">◷ ${job.date}<br>⌖ ${job.city} · ${job.format}</p></div>${jobPublisher(job)}<div class="job-gallery job-gallery-large">${jobGallery(job)}</div></div><div class="job-detail-cta"><button class="job-apply">申请合作 ↗</button><button class="job-save" aria-label="收藏职位" aria-pressed="${savedJobIds.has(job.id)}">${savedJobIds.has(job.id)?'♥':'♡'}</button></div><div class="job-detail-prose"><h2>合作详情 <span>/ DETAIL</span></h2><p>${job.description}</p><h3>期待这样的你</h3><ul>${job.needs.map(n=>`<li>${n}</li>`).join('')}</ul><dl class="job-facts"><div><dt>项目城市</dt><dd>${job.city}</dd></div><div><dt>合作方式</dt><dd>${job.format}</dd></div><div><dt>报酬</dt><dd>${job.pay}</dd></div><div><dt>预计档期</dt><dd>${job.date}</dd></div></dl><h3>关于发布者</h3><p>${job.host}</p><div class="apply-agreement"><span>✳</span><p>${job.fair}</p></div><p class="job-example-note">示例项目与视觉参考，仅用于页面体验。</p></div>`;
 jobDetail.querySelector('.job-back').onclick=closeJobDetail;
 jobDetail.querySelector('.job-apply').onclick=()=>openApplication(job);
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
 const emptyMessage = jobView === "applied" ? '你还没有申请记录<br>当前申请为流程预览，尚未接入真实申请服务。' : jobView === "published" ? '你还没有发布合作机会<br>发布服务尚未接入，敬请期待。' : '暂时没有符合条件的机会<br>试试其他筛选条件，或点击重置。';
 jobList.innerHTML = filtered.length ? filtered.map(j=>`<article class="job-project-card"><button class="job-project-open" data-open="${j.id}" aria-label="查看${j.title}详情"><div class="job-project-summary"><div><span class="job-seeking">正在寻找 · ${j.role}</span><h2>${j.title}</h2><strong class="job-green-pay">${j.pay}</strong></div><div class="job-project-meta"><span>◷ ${j.time}</span><span>⌖ ${j.city}</span><span>${j.type==='paid'?'商业付费':'互勉共创'}</span></div></div>${jobPublisher(j)}<div class="job-gallery">${jobGallery(j)}</div></button></article>`).join('') : `<div class="jobs-empty">${emptyMessage}</div>`;
 jobList.querySelectorAll('[data-open]').forEach(button=>button.onclick=()=>renderJobDetail(jobData.find(j=>j.id===Number(button.dataset.open))));
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
document.getElementById("resetJobs").onclick=()=>{["jobCity","jobRole","jobPay","jobKeyword"].forEach(id=>document.getElementById(id).value="");jobSavedOnly=false;document.getElementById("savedJobs").classList.remove("active");document.getElementById("savedJobs").setAttribute("aria-pressed","false");jobType="all";document.getElementById("jobTypeFilter").value="all";renderJobs();};
document.getElementById("publishJob").onclick=()=>jobAction("让合适的人，找到你的项目", "发布合作机会将支持项目类型、岗位、城市、报酬与作品使用约定。当前为界面预览，发布服务尚未接入。商业付费与互勉共创将分别展示，帮助创作者清楚了解合作条件。");
["closeJobDialog","confirmJobDialog"].forEach(id=>document.getElementById(id).onclick=()=>jobDialog.close());
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
