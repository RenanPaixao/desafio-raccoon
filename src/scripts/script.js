const hamburguer = document.querySelector('.nav__hamburguer');
const menu = document.querySelector('.menu');

function toggleMenu() {
  menu.style.display != 'none'
    ? (menu.style.display = 'none')
    : (menu.style.display = 'flex');
}
hamburguer.addEventListener('click', () => {
  toggleMenu();
});

toggleMenu();
