const DOMSelectors = {
  submit: document.querySelector("#form"),
  text: document.querySelector("#text"),
  box: document.querySelector(".form-parent"),
  points: document.querySelectorAll(".point"), //node list
  button: document.querySelector(".btn"),
  input: document.querySelector(".text-box"),
};

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();
});

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value; // .value lets you get the values of an element, in this case something you typed in

  console.log(input);

  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `
        <p class = 'extra-text'>${input}</p>
    `
  );
});

// -Create a function that creates an object and calls the following functions
//-Create a function that injects the newly created object into the DOM
//-Create a function that clears the input fields after injecting the object
//-Create a function to remove an object after they have been created
