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
  const input = DOMSelectors.input1.value;
  const input2 = DOMSelectors.input2.value;
  const input3 = DOMSelectors.input3.value; // .value lets you get the values of an element, in this case something you typed in
  return { input, input2, input3 };
});

// const { input1, input2, input3 } = getValues();
// console.log(getValues);

// DOMSelectors.box.insertAdjacentHTML(
//   "afterend",
//   `
//         <p class = 'extra-text'>${input}</p>
//     `
// );

function getNames() {
  // get names from the database or API
  let firstName = "John",
    lastName = "Doe";

  // return values
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

// -Create a function that creates an object and calls the following functions
//-Create a function that injects the newly created object into the DOM
//-Create a function that clears the input fields after injecting the object
//-Create a function to remove an object after they have been created
