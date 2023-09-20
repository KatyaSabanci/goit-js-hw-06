const sizeControl = document.getElementById('font-size-control');
const textSize = document.getElementById('text');
textSize.style.fontSize = sizeControl.value + 'px';
sizeControl.addEventListener('input', () => {
  textSize.style.fontSize = sizeControl.value + 'px';
});
