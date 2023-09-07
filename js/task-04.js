const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector('#value');
let counterValue = 0;

const updateCounter = value => {
  counterValue += value;
  valueSpan.textContent = counterValue;
};

btnDecrement.addEventListener('click', () => updateCounter(-1));
btnIncrement.addEventListener('click', () => updateCounter(1));
