const button = document.getElementById("btn");
const text = document.querySelector("#text");
console.log(button);

const DOMSelectors = {
  submit: document.querySelector("#form"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.innerHTML = "this is cool";
  text.style.fontSize = "40px";
}

backgroundAndText(DOMSelectors.box, DOMSelectors.text);
