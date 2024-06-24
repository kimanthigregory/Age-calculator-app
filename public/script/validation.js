const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const submit = document.querySelector("#submit");
const errorMessage = document.querySelector("form p");

// const invalidDateError = document.querySelector("#invalidDate-error");
// const invalidMonthError = document.querySelector("#invalidMonth-error");
// const invalidError = document.querySelector("#invalid-error");

const inputField = document.querySelectorAll(".input-container input");
const submitButton = document.querySelector("#submit");
const form = document.querySelector("form");

const showErrorTwo = function(input){
    var parentDiv = input.closest(".input-container");
    var error = parentDiv.querySelector("p");
    error.classList.add("show-error");
}
const removeErrortwo =function(input){
    var parentDiv = input.closest(".input-container");
    var error = parentDiv.querySelector("p");
    error.classList.remove("show-error")
}
const showError = function (input) {
  var parentDiv = input.closest(".input-container");
  var error = parentDiv.querySelector("p");
  parentDiv.querySelector("label").classList.add("change-color");
  parentDiv.querySelector("input[type='text']").classList.add("show-outline");
};

const removeError = function (input) {
  var parentDiv = input.closest(".input-container");
  parentDiv.querySelector("label").classList.remove("change-color");
  parentDiv.querySelector("input[type='text']")
    parentDiv.classList.remove("show-outline");
};
inputField.forEach((input, currentIndex) => {
  input.addEventListener("input", () => {
    const checkInput = input.value.trim() === "";
    // console.log(currentIndex);
    if (checkInput) {
        showError(input);
        showErrorTwo(input);
    } else {
        removeError(input);
        removeErrortwo(input);
    }
  });
});

submit.addEventListener("click", function (event) {
  event.preventDefault();

  inputField.forEach((input, currentIndex) => {
    const emptyInput = Array.from(inputField).some(
      (input) => input.value.trim() === ""
    );
    // console.log(currentIndex);

    if (emptyInput) {
      // alert("please input a value");
      showError(input);
    } else {
      form.submit();
      // alert("submiting values...");
    }
  });
});

inputField.forEach((input, currentIndex) => {
  input.addEventListener("input", () => {
    const inputDate = parseInt(input.value);
    const parentDiv = input.closest(".input-container");
    console.log(currentIndex)
    console.log(inputDate);
    if (inputDate > 31) {
        parentDiv.querySelector("#invalid-error").classList.add("show-error");
        showError(input);
    } else if (inputDate > 12) {
        parentDiv.querySelector("#invalid-error").classList.add("show-error");
        showError(input);
    } else if (inputDate > 2024) {
        console.log(input);
        parentDiv.querySelector("#invalid-error").classList.add("show-error");
        showError(input);
    } else {
        parentDiv.querySelector("#invalid-error").classList.remove("show-error");
        removeError(input);
    }
  });
    
  
});


// day.addEventListener("input", function () {
//   const inputDate = parseInt(day.value);
//   console.log(typeof inputDate);
//   if (inputDate > 31) {
//     invalidDateError.classList.add("show-error");
//   } else {
//     invalidDateError.classList.remove("show-error");
//   }
// });

// month.addEventListener("input", function () {
//   const inputDate = parseInt(month.value);
//   console.log(typeof inputDate);
//   if (inputDate > 12) {
//     invalidMonthError.classList.add("show-error");
//   } else {
//     invalidMonthError.classList.remove("show-error");
//   }
// });

// year.addEventListener("input", function () {
//   const inputDate = parseInt(year.value);
//   console.log(typeof inputDate);
//   if (inputDate > 12) {
//     invalidYearError.classList.add("show-error");
//     // showError();
//   } else {
//     invalidYearError.classList.remove("show-error");
//     // removeError();
//   }
// });
