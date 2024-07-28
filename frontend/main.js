console.log('main.js loaded');

const menuEmail = document.querySelector('.sign-in__navbar-email');
const desktopMenu = document.querySelector('.sign-in__desktop-menu');  

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
