const DOMSelectors = {
  submit: document.querySelector("#form"),
  text: document.querySelector("#text"),
  box: document.querySelector(".form-parent"),
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

  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    `<div class="display-card">
    <img class="display-img" src="${input3}"/>
    <h2 class="display-artist">${input2}</h2>
    <h3 class="display-album">${input1}</h3>
    <button class="remove btn">Remove Album</button>
  </div>
  `
  );

  DOMSelectors.input1.value = "";
  DOMSelectors.input2.value = "";
  DOMSelectors.input3.value = "";
});

// DOMSelectors.input.value = "";
// DOMSelectors.button.addEventListener("click", function () {
//   let input = DOMSelectors.input.value;
//   DOMSelectors.box.insertAdjacentHTML("afterend", <p>${input}</p>);
//   DOMSelectors.input.value = "";
// });

// console.log(getNames);

// const { input1, input2, input3 } = getValues();
// console.log(getValues);

// DOMSelectors.box.insertAdjacentHTML(
//   "afterend",
//   `
//         <p class = 'extra-text'>${input}</p>
//     `
// );

// -Create a function that creates an object and calls the following functions
//-Create a function that injects the newly created object into the DOM
//-Create a function that clears the input fields after injecting the object
//-Create a function to remove an object after they have been created
