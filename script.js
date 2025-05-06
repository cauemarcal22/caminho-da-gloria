const toggler = document.getElementById('navbarToggler');
const menu = document.getElementById('navbarContent');

toggler.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.querySelector('video').addEventListener('contextmenu', event => event.preventDefault());
