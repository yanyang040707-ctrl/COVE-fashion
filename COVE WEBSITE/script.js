/* =========================================
   COVE APPLICATION
========================================= */


/* =========================================
   DATA
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
   DOM ELEMENTS
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


/* =========================================
   STATE
========================================= */

let currentPage = "insights";

let previousPage = "insights";

let toastTimer;


/* =========================================
   PAGE NAVIGATION
========================================= */

function switchPage(pageName) {

    if (!pageSections[pageName]) {
        return;
    }

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
   NAVIGATION CLICK
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

    searchInput.value = "";

    resetTrendCards();

});


/* =========================================
   SEARCH FUNCTION
========================================= */

function performSearch() {

    const keyword = searchInput.value
        .trim()
        .toLowerCase();

    let visibleCount = 0;


    trendCards.forEach((card) => {

        const cardKeywords = card.dataset.keywords.toLowerCase();

        const title = card
            .querySelector(".card-title")
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

    searchInput.value = "";

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

    if (!data) {
        return;
    }


    previousPage = currentPage;


    detailNumber.textContent = data.number;

    detailTitle.textContent = data.title;

    detailDescription.textContent = data.description;


    // 清除之前的视觉样式

    detailVisual.className = "detail-visual";

    // 添加对应卡片视觉样式

    detailVisual.classList.add(data.visualClass);


    trendDetailPage.classList.add("open");

    document.body.style.overflow = "hidden";

}


function closeTrendDetail() {

    trendDetailPage.classList.remove("open");

    document.body.style.overflow = "";

}


/* =========================================
   CARD CLICK EVENTS
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
   ESC KEY CLOSE DETAIL
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (trendDetailPage.classList.contains("open")) {

            closeTrendDetail();

        }

        if (profilePanel.classList.contains("open")) {

            closeProfile();

        }

    }

});


/* =========================================
   PROFILE PANEL
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
   HORIZONTAL DRAG SCROLL
   Desktop mouse interaction
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

    if (!isDragging) {
        return;
    }

    const movement = event.pageX - startX;

    trendCarousel.style.transform =
        `translateX(${Math.min(0, movement)}px)`;

});


/* =========================================
   INITIALIZATION
========================================= */

function initializeApp() {

    switchPage("insights");

    resetTrendCards();

}

initializeApp();
