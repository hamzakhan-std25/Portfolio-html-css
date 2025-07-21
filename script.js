console.log('Script loaded successfully!');

const barMenu = document.getElementById('barMenu');
const navBar = document.querySelector(".menu");

barMenu.addEventListener('click', () => {
    navBar.classList.toggle('active');
    barMenu.classList.toggle('active');
    console.log('Menu bar clicked!');

});
