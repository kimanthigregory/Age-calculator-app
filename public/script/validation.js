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
  // var error = parentDiv.querySelector("p");
  parentDiv.querySelector("label").classList.add("change-color");
  parentDiv.querySelector("input[type='text']").classList.add("show-outline");
};

const removeError = function (input) {
  var parentDiv = input.closest(".input-container");
  parentDiv.querySelector("label").classList.remove("change-color");
  parentDiv.querySelector("input[type='text']").classList.remove("show-outline");
};
inputField.forEach((input, currentIndex) => {
  input.addEventListener("input", () => {
    const checkInput = input.value.trim() === "";
    // console.log(currentIndex);
    const parentDiv = input.closest(".input-container");
      
    const inputName = input.getAttribute('id');
    if (checkInput) {
        showError(input);
        showErrorTwo(input);
    } else {
        removeError(input);
        removeErrortwo(input);
    }
    if (inputName === 'day'){
      validateDate(input,parentDiv)
    } else if(inputName === 'month') {
      validateMonth(input, parentDiv);
    } else if (inputName === 'year'){
      validateYear(input,parentDiv);
    }
   
  });
});

let validated = true;

submit.addEventListener("click", function (event) {
  event.preventDefault();
  validated = true;
  inputField.forEach((input, currentIndex) => {
    const emptyInput = Array.from(inputField).some(
      (input) => input.value.trim() === "" 
    );
    const parentDiv = input.closest(".input-container");
      
    const inputName = input.getAttribute('id');
    console.log(inputName);
    // console.log(currentIndex);
    
    if (emptyInput) {
      // alert("please input a value");
      showError(input);
      validated = false;
    }  else{
      if (inputName === 'day'){
        validateDate(input,parentDiv)
      } else if(inputName === 'month') {
        validateMonth(input, parentDiv);
      } else if (inputName === 'year'){
        validateYear(input,parentDiv);
      }
     
    }
    if (validated){
      form.submit();
      // alert("submiting values...");
    }
  });
});



const validateDate = function(input,parentDiv){
  const inputValue = parseInt(input.value);
  if (inputValue > 31) {
    parentDiv.querySelector("#invalid-error").classList.add("show-error");
    showError(input);
    validated = false;
  } else{
    parentDiv.querySelector("#invalid-error").classList.remove("show-error");
    removeError(input);
    
  }
}


const validateMonth = function (input,parentDiv){
  const inputValue = parseInt(input.value);
  if (inputValue > 12) {
  console.log(input);
  parentDiv.querySelector("#invalid-error").classList.add("show-error");
  showError(input);
  validated = false;
}else{
  parentDiv.querySelector("#invalid-error").classList.remove("show-error");
  removeError(input);

}
}

const validateYear = function(input,parentDiv){
  const inputValue = parseInt(input.value);
  console.log(inputValue);
  if (inputValue > 2024) {
    console.log(input);
    parentDiv.querySelector("#invalid-error").classList.add("show-error");
    showError(input);
    validated = false;
  }else{
    parentDiv.querySelector("#invalid-error").classList.remove("show-error");
    removeError(input);
  }
  
}
