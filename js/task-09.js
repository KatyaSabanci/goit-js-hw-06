function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backColor = document.querySelector('.change-color');
const colorBtn = document.querySelector('.color');

const colorFunction = () => {
  const color = getRandomHexColor();
  document.body.style.background = color;
};

backColor.addEventListener('click', colorFunction);
