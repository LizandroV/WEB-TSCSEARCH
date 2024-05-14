/////////// COPYRIGHT YEAR BUTTON  ///////////
document.querySelector('#year').textContent = new Date().getFullYear();

/////////// TOGGLE BUTTON - MENU ///////////
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}
document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);