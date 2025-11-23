let opacity = 1;
const topImg = document.getElementById("top-img");

let fadeOutInterval = null;
let fadeInInterval = null;

function startFadeOut() {
    clearInterval(fadeInInterval);
    fadeOutInterval = setInterval(() => {
        opacity -= 0.1;
        if (opacity < 0) opacity = 0;
        topImg.style.opacity = opacity;
    }, 30);
}

function startFadeIn() {
    clearInterval(fadeOutInterval);
    fadeInInterval = setInterval(() => {
        opacity += 0.05;
        if (opacity > 1) opacity = 1;
        topImg.style.opacity = opacity;
    }, 30);
}

document.addEventListener("mousedown", startFadeOut);
document.addEventListener("mouseup", startFadeIn);

document.addEventListener("mouseleave", startFadeIn);