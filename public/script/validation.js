const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const submit = document.querySelector("#submit");
const errorMessage = document.querySelector("form p");

const invalidDateError = document.querySelector("#invalidDate-error")
const invalidMonthError = document.querySelector("#invalidMonth-error")
const invalidYearError = document.querySelector("#invalidYear-error")

const inputField = document.querySelectorAll(".input-container input");
const submitButton = document.querySelector("#submit");
const form = document.querySelector("form");


const showError = function(input){
    var parentDiv = input.closest(".input-container")
    var error = parentDiv.querySelector("p");
    error.classList.add("show-error");
    parentDiv.querySelector("label").classList.add("change-color");
    parentDiv.querySelector("input[type='text']").classList.add("show-outline");

}

const removeError = function(input){
    var parentDiv = input.closest(".input-container")
    var error = parentDiv.querySelector("p");
    error.classList.remove("show-error");
    parentDiv.querySelector("label").classList.remove("change-color");
    parentDiv.querySelector("input[type='text']").classList.remove("show-outline");

}
inputField.forEach((input,currentIndex) => {
    input.addEventListener("input",()=>{
        const checkInput = input.value.trim() ==="";
        console.log(currentIndex);
        if (checkInput){
            showError(input);    
        }
        else{
           removeError(input);
        }
    });
});

submit.addEventListener("click",function(event){
   event.preventDefault(); 
   
   inputField.forEach((input,currentIndex) => {
    const emptyInput = Array.from(inputField).some((input) =>input.value.trim() === "")
    console.log(currentIndex)
     
    if(emptyInput){
        // alert("please input a value");
        showError(input);

    }
    else{
        form.submit();
        // alert("submiting values...");
    }
   });
})

day.addEventListener("input", function(){
    const inputDate = parseInt(day.value);
    console.log(typeof inputDate)
    if(inputDate > 31){
        invalidDateError.classList.add("show-error")
        
    }
    else{
        invalidDateError.classList.remove("show-error") 

    } 

})


month.addEventListener("input", function(){
    const inputDate = parseInt(month.value);
    console.log(typeof inputDate)
    if(inputDate > 12){
        invalidMonthError.classList.add("show-error")
        
    }
    else{
        invalidMonthError.classList.remove("show-error") 

    } 

})

year.addEventListener("input", function(){
    const inputDate = parseInt(year.value);
    console.log(typeof inputDate)
    if(inputDate > 12){
        invalidYearError.classList.add("show-error")
        
    }
    else{
        invalidYearError.classList.remove("show-error") 

    } 

})