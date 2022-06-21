const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login-botao');

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-ativo');
}

const handleFocusOut = ({ target }) => {

  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-ativo');
  }
}

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled');
    return
  } else {
    button.setAttribute('disabled', '');
  }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));