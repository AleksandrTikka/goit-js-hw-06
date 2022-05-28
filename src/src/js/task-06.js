const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', validationLength);

function validationLength(event) {
    const currentInput = event.currentTarget.value.trim();
    if (currentInput.length !== Number(inputEl.dataset.length)) {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    } else {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");}
       
        
}