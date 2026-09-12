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

function performSearch() {
    const keyword = searchInput.value.trim().toLowerCase();

    let visibleCount = 0;

    trendCards.forEach((card) => {
        const cardKeywords =
            card.dataset.keywords.toLowerCase();

        const title =
            card.querySelector(".card-title")
                .textContent
                .toLowerCase();

        const isMatch =
            keyword === "" ||
            cardKeywords.includes(keyword) ||
            title.includes(keyword);

        if (isMatch) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    if (visibleCount === 0 && keyword !== "") {
        searchEmpty.classList.add("visible");
    } else {
        searchEmpty.classList.remove("visible");
    }

    if (keyword !== "") {
        showToast("已更新搜索结果");
    }
}


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

trendCards.forEach((card) => {
    card.addEventListener("click", () => {
        const trendId = card.dataset.id;

        openTrendDetail(trendId);
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

let isDragging = false;
let startX = 0;
let scrollStart = 0;

trendCarousel.addEventListener("mousedown", (event) => {
    isDragging = true;
    startX = event.pageX;
    scrollStart = window.scrollX;

    trendCarousel.style.cursor = "grabbing";
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    trendCarousel.style.cursor = "default";
});

document.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    const movement = event.pageX - startX;

    trendCarousel.style.transform =
        `translateX(${Math.min(0, movement)}px)`;
});


/* =========================================
   INITIALIZE
========================================= */

function initializeApp() {
    switchPage("insights");
    resetTrendCards();
    renderInspirationWorks("recommended");
}

initializeApp();
