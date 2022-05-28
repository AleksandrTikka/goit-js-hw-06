const counterEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = Number(counterEl.textContent);
decrementBtn.addEventListener('click', decrementValue);

incrementBtn.addEventListener('click', incrementValue);


function decrementValue () {
    counterValue -= 1;
    counterEl.textContent = counterValue;
    console.log('добавляю единицу к значению');
    console.log('новое значение: ', counterEl.textContent);
}

function incrementValue () {
    counterValue += 1;
    counterEl.textContent = counterValue;
    console.log('добавляю единицу к значению');
    console.log('новое значение: ', counterEl.textContent);
}