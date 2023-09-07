const inputText = document.getElementById('name-input');
const outputText = document.getElementById('name-output');

inputText.addEventListener('input', function () {
  if (inputText.value.trim() === '') {
    outputText.textContent = 'Anonymous';
  } else {
    outputText.textContent = inputText.value;
  }
});
