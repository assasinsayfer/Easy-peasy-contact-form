// !SELECTORS

const fName = document.querySelector("form #fname");
const age = document.querySelector("form #age");
const isMarried = document.querySelector("form #isMerried");

const fNameText = document.querySelector(".fName");
const ageText = document.querySelector(".age");
const isMarriedText = document.querySelector(".isMerried");

const btnSubmit = document.querySelector(".btnSubmit");
const btnReset = document.querySelector(".btnReset");

const message = document.querySelector(".message");

const containerText = document.querySelector(".container__text");

// !EVENTS LISTENER & !FUNCTION

fName.addEventListener("input", function (e) {
  fNameText.innerHTML = `📧 Name: ${e.target.value}`;
});
age.addEventListener("input", function (e) {
  ageText.innerHTML = `🧐 age: ${e.target.value}`;
});
isMarried.addEventListener("input", function (e) {
  isMarriedText.innerHTML = `😘 Is married: ${e.target.value}`;
});

btnSubmit.addEventListener("click", function () {
  message.innerHTML = "Successful send! ✅";
});

btnReset.addEventListener("click", function () {
  containerText.innerHTML = "";
  message.innerHTML = "Unsuccessful, try again! 😓";
});
