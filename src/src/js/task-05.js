const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output')

inputEl.addEventListener('input', addInputToOtput);

function addInputToOtput(event) {
    inputEl.value.trim() === ""
    ? outputEl.textContent = "Anonymous"
    : outputEl.textContent = event.currentTarget.value;
};