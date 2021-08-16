const hamburguer = document.querySelector('.nav__hamburguer');
const menu = document.querySelector('.menu');
const labels = Array.from(document.getElementsByClassName('form__label'));
const inputs = Array.from(document.getElementsByClassName('form__input'));

function toggleMenu() {
  menu.style.display != 'none'
    ? (menu.style.display = 'none')
    : (menu.style.display = 'flex');
}

hamburguer.addEventListener('click', () => {
  toggleMenu();
});

inputs.forEach((element, index) => {
  element.addEventListener('focusin', () => {
    labels[index].style.color = 'var(--form-blue)';
    if (inputs[0].classList.contains('form__input--init')) {
      inputs[0].classList.remove('form__input--init');
      labels[0].classList.remove('form__label--init');
    }
  });
});

inputs.forEach((element, index) => {
  element.addEventListener('focusout', () => {
    labels[index].style.color = 'var(--gray-article)';
  });
});

toggleMenu();
