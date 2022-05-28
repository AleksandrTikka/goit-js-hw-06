const textEl = document.querySelector('#text');
const inputEl = document.querySelector('#font-size-control');

inputEl.addEventListener('input', onChangeFontSize);

function onChangeFontSize (event) {
    textEl.style.fontSize = event.currentTarget.value + "px";
    console.log('размер шрифта', event.currentTarget.value + "px");
};

