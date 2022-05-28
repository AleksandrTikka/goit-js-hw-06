const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output')

inputEl.addEventListener('input', addInputToOtput);

function addInputToOtput() {
    outputEl.textContent = inputEl.value;
};