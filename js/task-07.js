const sizeControl = document.getElementById('font-size-control');
const textSize = document.getElementById('text');

sizeControl.addEventListener('input', () => {
  textSize.style.fontSize = sizeControl.value + 'px';
});
