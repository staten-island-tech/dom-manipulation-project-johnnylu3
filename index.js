const DOMSelectors = {
  submit: document.querySelector("#form"),
  text: document.querySelector("#text"),
  box: document.querySelector(".form-parent"),
  box2: document.querySelector(".display"),
  points: document.querySelectorAll(".point"), //node list
  button: document.querySelector(".btn"),
  input1: document.querySelector(".text-box1"),
  input2: document.querySelector(".text-box2"),
  input3: document.querySelector(".text-box3"),
};

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();
  let input1 = DOMSelectors.input1.value,
    input2 = DOMSelectors.input2.value,
    input3 = DOMSelectors.input3.value;
  let values = { input1, input2, input3 };

  console.log(values);

  DOMSelectors.box2.insertAdjacentHTML(
    "afterBegin",
    `<div class="display-card">
    <img class="display-img" src="${input3}"/>
    <h2 class="display-artist">${input2}</h2>
    <h3 class="display-album">${input1}</h3>
    <button class="remove btn" id="he">Remove Album</button>
  </div>
  `
  );
  DOMSelectors.input1.value = "";
  DOMSelectors.input2.value = "";
  DOMSelectors.input3.value = "";

  let displaycard = document.querySelector("div.display-card"),
    removeBtn = displaycard.querySelector("button.remove");

  removeBtn.addEventListener("click", function () {
    displaycard.remove();

    const r = document.querySelector(".display-img"),
      p = document.querySelector(),
      p = document.querySelector();

    // remove the last list item
    r.parentElement.removeChild(e);
  });
});
