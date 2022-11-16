const button = document.getElementById("btn");
const text = document.querySelector("#text");
console.log(button);

const DOMSelectors = {
  button: document.querySelector(".btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"), //node list
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.textContent = "this is cool";
  text.style.fontSize = "40px";
}

backgroundAndText(DOMSelectors.box, DOMSelectors.text);

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});

function changeLi() {
  let pointIndex = 1;
  DOMSelectors.points.forEach((point) => {
    point.addEventListener("click", function () {
      point.textContent = `Hello I am point ${pointIndex}`;
      pointIndex++;
    });
  });
}
changeLi();

DOMSelectors.form.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  console.log(input);
});
DOMSelectors.form.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  console.log(input);
});
