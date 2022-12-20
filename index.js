const DOMSelectors = {
  submit: document.querySelector("#form"),
  text: document.querySelector("#text"),
  box: document.querySelector(".form-parent"),
  box2: document.querySelector(".display"),
  input1: document.querySelector(".text-box1"),
  input2: document.querySelector(".text-box2"),
  input3: document.querySelector(".text-box3"),
};

function create() {
  let input1 = DOMSelectors.input1.value,
    input2 = DOMSelectors.input2.value,
    input3 = DOMSelectors.input3.value;

  card(input1, input2, input3);
}

function clear() {
  DOMSelectors.input1.value = "";
  DOMSelectors.input2.value = "";
  DOMSelectors.input3.value = "";
}

function card(input1, input2, input3) {
  DOMSelectors.box2.insertAdjacentHTML(
    "afterBegin",
    `<div class="display-card">
  <img class="display-food" src="${input3}"/>
  <h2 class="display-origin">${input2}</h2>
  <h3 class="display-name">${input1}</h3>
  <button class="remove btn">Remove Card</button>
</div>
`
  );
}
function cardRemove() {
  const removes = document.querySelectorAll(".remove");
  removes.forEach((remove) => {
    remove.addEventListener("click", function (removeBtn) {
      removeBtn.target.parentElement.remove();
    });
  });
}

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();
  create();
  clear();
  cardRemove();
});

// add event listner .target.parent Element.remove
//   let displaycard = document.querySelector("div.display-card"),
//     removeBtn = displaycard.querySelector("button.remove");

//   removeBtn.addEventListener("click", function () {
//     displaycard.remove();
