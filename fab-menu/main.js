var wrapper = document.querySelector('.wrapper');
var toggler = document.getElementById('toggler');
var menu = document.querySelector('.menu');
var menuItems = document.querySelectorAll('.menu__item');

const OPEN_SELECTOR = 'wrapper--open';

const isMenuOpened = () => wrapper.classList.contains(OPEN_SELECTOR);

const openMenu = () => wrapper.classList.add(OPEN_SELECTOR);
const closeMenu = () => wrapper.classList.remove(OPEN_SELECTOR);
const toggleMenu = () => {
  if (isMenuOpened()) {
    closeMenu();
  } else {
    openMenu();
  }
};

toggler.addEventListener('click', toggleMenu);
menuItems.forEach(item => item.addEventListener('click', closeMenu));

window.addEventListener('click', (e) => {
  const target = e.target;
  if (![...menuItems, toggler, wrapper].includes(target) && !toggler.contains(target) && !menu.contains(target)) {
    console.log("WIN clicked on ", e);
    closeMenu();
  }
});