const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output')

inputEl.addEventListener('input', onInputToOtput);

function onInputToOtput(event) {
    inputEl.value.trim() === ""
    ? outputEl.textContent = "Anonymous"
    : outputEl.textContent = event.currentTarget.value;
};