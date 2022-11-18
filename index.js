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
  let input1 = DOMSelectors.input1.value;
  let input2 = DOMSelectors.input2.value;
  let input3 = DOMSelectors.input3.value;

  let values = { input1, input2, input3 };

  console.log(values);

  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    `
          <p class = 'extra-text'>${values.input1}, ${values.input2}, ${values.input3}</p>
      `
  );
  DOMSelectors.input1.value = "";
  DOMSelectors.input2.value = "";
  DOMSelectors.input3.value = "";
});

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
