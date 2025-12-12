console.log("theMessage");

// value of const variable will not change
//// this line passes the body element into the variable theBody
const theBody = document.querySelector('body');
//// this line passes the main element into the variable theMain
let theMain = document.querySelector('main')
// let value changes
let theButton = document.querySelector("button");

function typeLineWithHighlight(elementId, text, speed, callback) {
    const el = document.getElementById(elementId);
    let i = 0;

    function type() {
        if (i < text.length) {
            const span = document.createElement("span");
            span.textContent = text[i];
            span.classList.add("letter");
            el.appendChild(span);

            setTimeout(() => {
                span.style.backgroundColor = "white";
            }, 50);

            i++;
            setTimeout(type, speed);
        } else {

            el.style.borderRight = "none";
            if (callback) callback();
        }
    }

    type();
}


typeLineWithHighlight("line1", "CONTEXT", 100, function() {

    setTimeout(function() {
        typeLineWithHighlight("line2", "by Quinn Hochglaube", 80);
    }, 1000);
});



const imagePaths = [
    "images/page1.jpg",
    "images/page2.jpg",
    "images/page3.jpg",
    "images/page4.jpg",
    "images/page5.jpg",
    "images/page6.jpg",
    "images/page7.jpg",
    "images/page8.jpg",
    "images/page9.jpg",
    "images/page10.jpg"
];

const buttons = [
    /* { page: 0, x: 40,  y: 300, text: "what's this?", url: "first.html" },
    { page: 0, x: 250, y: 120, text: "", url: ".html" },

    { page: 2, x: 150, y: 200, text: "", url: ".html" }, */

    { page: 7, x: 230, y: 520, text: "more", url: "books.html" }
];
// --- GLOBALS ----------------------------------------------------

const flipbook = document.getElementById("flipbook");
let pages = [];
let currentPage = 0;

// --- CREATE FLIPBOOK -------------------------------------------

function createFlipbook() {
    imagePaths.forEach((src, index) => {
        const page = document.createElement("div");
        page.className = "page";
        page.style.zIndex = imagePaths.length - index;
        page.style.backgroundImage = `url(${src})`;

        flipbook.appendChild(page);
        pages.push(page);

        // hotspots
        buttons
            .filter(btn => btn.page === index)
            .forEach(btn => {
                const hotspot = document.createElement("div");
                hotspot.className = "hotspot-btn";
                hotspot.innerText = btn.text;
                hotspot.style.left = btn.x + "px";
                hotspot.style.top  = btn.y + "px";
                hotspot.onclick = () => window.location.href = btn.url;
                page.appendChild(hotspot);
            });
    });
}

// --- PAGE CONTROLS ---------------------------------------------
// Exposed globally so HTML can access them
window.nextPage = function () {
    if (currentPage < pages.length) {
        pages[currentPage].classList.add("flipped");
        currentPage++;
    } else {
        // restart the flipbook
        pages.forEach(p => p.classList.remove("flipped"));
        currentPage = 0;
    }
};

window.prevPage = function () {
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.remove("flipped");
    } else {
        // go to end when at first page
        pages.forEach(p => p.classList.add("flipped"));
        currentPage = pages.length;
    }
};

// --- INITIALIZE -------------------------------------------------

document.addEventListener("DOMContentLoaded", createFlipbook);
document.addEventListener("DOMContentLoaded", () => {
    createFlipbook();
});