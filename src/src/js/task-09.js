const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
  console.log(getRandomHexColor());
}  
 



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
