const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const inputValueLength = input.value.length;
  const dataLength = parseInt(input.dataset.length);

  if (inputValueLength === dataLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});