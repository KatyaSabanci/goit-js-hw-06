const inputForm = document.getElementById('validation-input');

const colors = () => {
  const symbols = inputForm.value.trim();
  const limit = Number(inputForm.dataset.length);

  if (symbols.length === limit) {
    inputForm.classList.remove('invalid');
    inputForm.classList.add('valid');
    return;
  }

  inputForm.classList.remove('valid');
  inputForm.classList.add('invalid');
};

inputForm.addEventListener('blur', colors);
