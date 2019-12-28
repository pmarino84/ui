let toggler = document.getElementById('toggler');
let closer = document.getElementById('closer');

let sidenav = document.querySelector('.sidenav');
let classList = sidenav.classList;

const toggleSidenav = () => classList.toggle('sidenav--opened');

const closeSidenav = () => classList.remove('sidenav--opened');

toggler.addEventListener('click', toggleSidenav);
closer.addEventListener('click', closeSidenav);