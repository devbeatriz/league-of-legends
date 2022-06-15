const inputs = document.querySelectorAll('.input');

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

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));