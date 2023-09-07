const sizeControl = document.getElementById('font-size-control');
const textSize = document.getElementById('text');

const textControl = () => (textSize.style.fontSize = `${sizeControl.value}px`);
sizeControl.addEventListener('input', textControl);
