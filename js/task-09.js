function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backColor = document.querySelector('.change-color');
const colorBtn = document.querySelector('.color');
const body = document.body;

backColor.addEventListener('click', colorFunction => {
  const color = getRandomHexColor();
  body.style.background = color;
  colorBtn.textContent = color;
});
