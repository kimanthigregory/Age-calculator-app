const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const submit = document.querySelector("#submit");
const errorMessage = document.querySelector("form p");

const inputField = document.querySelectorAll(".input-container input");
const submitButton = document.querySelector("#submit");

inputField.forEach((input) => {
    input.addEventListener("input",()=>{
        const checkInput = input.value.trim() ==="";
        console.log(input)
        if (checkInput){
            var parentDiv = input.closest(".input-container")
            var error = parentDiv.querySelector("p");
            error.classList.add("show-error");
        }
        else{
            var parentDiv = input.closest(".input-container")
            var error = parentDiv.querySelector("p");
            error.classList.remove("show-error");
        }
    });
});

submit.addEventListener("click",()=>{
    alert("clicked");
})