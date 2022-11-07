const button = document.getElementById("btn");
const text = document.querySelector("#text");
console.log(button);

const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  empty: document.querySelect(".nothing"),
  point: document.querySelectorAll(".point"),
};
console.log(DOMSelectors);
