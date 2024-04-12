/////////// COPYRIGHT YEAR BUTTON  ///////////
document.querySelector('#year').textContent = new Date().getFullYear();

/////////// TOGGLE BUTTON - MENU ///////////
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}
document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);


/////////// SEARCH BUTTON  ///////////
document.getElementById('idInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('searchbuttom').click();
    }
});