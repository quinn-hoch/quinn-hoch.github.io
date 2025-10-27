console.log("theMessage");

// value of const variable will not change
//// this line passes the body element into the variable theBody
const theBody = document.querySelector('body');
//// this line passes the main element into the variable theMain
let theMain = document.querySelector('main')
// let value changes
let theButton = document.querySelector("button");


// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
const images = [
      "mail1.png",
      "mail2.png",
      "mail3.png",
      "mail4.png"
    ];

    let index = 0; 

    function changeImage() {
      index = (index + 1) % images.length; 
      document.getElementById("myImage").src = images[index];
    }