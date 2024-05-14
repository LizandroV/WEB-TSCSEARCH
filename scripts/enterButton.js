/////////// SEARCH BUTTON  ///////////
document.getElementById('idInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('searchbuttom').click();
    }
});