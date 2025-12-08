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

            // Reveal background after small delay
            setTimeout(() => {
                span.style.backgroundColor = "white";
            }, 50);

            i++;
            setTimeout(type, speed);
        } else {
            // Remove cursor when finished
            el.style.borderRight = "none";
            if (callback) callback();
        }
    }

    type();
}

// First line
typeLineWithHighlight("line1", "CONTEXT", 100, function() {
    // Pause before second line
    setTimeout(function() {
        typeLineWithHighlight("line2", "by Quinn Hochglaube", 80);
    }, 1000);
});

const images = [
        "page1.jpg",
        "page2.jpg",
        "page3.jpg",
        "page4.jpg",
        "page5.jpg",
        "page6.jpg",
        "page7.jpg",
        "page8.jpg",
        "page9n10.jpg",
    ];

    let current = 0;

    function updatePage() {
        document.getElementById("page").src = images[current];
    }

    function nextPage() {
        current = (current + 1) % images.length;  // wrap around
        updatePage();
    }

    function prevPage() {
        current = (current - 1 + images.length) % images.length; // wrap around
        updatePage();
    }

