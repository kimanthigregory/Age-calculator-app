const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const submit = document.querySelector("#submit");
const errorMessage = document.querySelector("form p");

const inputField = document.querySelectorAll(".input-container input");
const submitButton = document.querySelector("#submit");
const form = document.querySelector("form");

inputField.forEach((input) => {
    input.addEventListener("input",()=>{
        const checkInput = input.value.trim() ==="";
        console.log(input)
        if (checkInput){
            var parentDiv = input.closest(".input-container")
            var error = parentDiv.querySelector("p");
            error.classList.add("show-error");
            parentDiv.querySelector("label").classList.add("change-color");
            parentDiv.querySelector("input[type='text']").classList.add("show-outline");
    
        }
        else{
            var parentDiv = input.closest(".input-container")
            var error = parentDiv.querySelector("p");
            error.classList.remove("show-error");
            parentDiv.querySelector("label").classList.remove("change-color");
            parentDiv.querySelector("input[type='text']").classList.remove("show-outline");
    
        }
    });
});

submit.addEventListener("click",function(event){
   event.preventDefault(); 
   
   inputField.forEach((input) => {
    const emptyInput = Array.from(inputField).some((input) =>input.value.trim() === "")
    if(emptyInput){
        // alert("please input a value");
        var parentDiv = input.closest(".input-container")
        var error = parentDiv.querySelector("p");
        error.classList.add("show-error");
        parentDiv.querySelector("label").classList.add("change-color");
        parentDiv.querySelector("input[type='text']").classList.add("show-outline");

    }
    else{
        form.submit();
        // alert("submiting values...");
    }
   });
})
function showErrorMessage(){
    
}