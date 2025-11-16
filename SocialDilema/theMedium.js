console.log("theMessage");

let body = document.querySelector("body");
let main = document.querySelector("main");

let theButton = document.querySelector("button");
theButton.addEventListener("click", theyClicked);

let count = 0;
//let countThresholdHalf = 5;
let countThreshold1 = 50;
let countThreshold2 = 51;
let countThreshold3 = 70;
let counter = document.querySelector("#counter");

let currentColorIndex = 0;

const button = document.getElementById('colorChangeButton');
const colors = ['white', '#1877F2'];

  button.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentColorIndex];
  });


function theyClicked(event){
    count += 1;
    
    if (count == countThreshold1) {
        console.log("You did it!");
        addNewElement1(event);
    }
    if (count == countThreshold2) {
        console.log("More");
        addNewElement2(event);
    }
    if (count == countThreshold3) {
        console.log("More");
        addNewElement3(event);
    }
    counter.textContent = "You have " + String(count) + (" likes");
}
const mySec = document.createElement("section");

function addNewElement1(event){
  const myTextNode = document.createTextNode("Congratulations you got 50 likes! Your life is worth living!");
  mySec.appendChild(myTextNode);
  document.body.appendChild(mySec);
}
function addNewElement2(event){
  const myTextNode2 = document.createTextNode(" Keep clicking to find out why!");
  mySec.appendChild(myTextNode2);
  document.body.appendChild(mySec);
}
function addNewElement3(event){
  const myTextNode3 = document.createTextNode("'Likes' get to your head. They give you validation - socially, emotionally, psychologically - in ways that become addiciting and ultimately identity defining.");
  const myParagraph = document.createElement("p");
  mySec.appendChild(myParagraph);
  mySec.appendChild(myTextNode3);
  document.body.appendChild(mySec);
}


