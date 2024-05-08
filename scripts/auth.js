function checkAuthentication() {
    var authenticated = document.cookie.indexOf("authenticated=true") !== -1;
    if (!authenticated) {
        promptForPassword();
    }
}

// Función para solicitar la contraseña
function promptForPassword() {
    var password = prompt("Ingrese la contraseña para acceder:");
    if (password === "W3n.TSC22") { // Reemplaza "tu_contraseña" con tu contraseña real
        document.cookie = "authenticated=true; path=/"; // Establece la cookie de autenticación
    } else {
        alert("Contraseña incorrecta. Inténtelo de nuevo.");
        promptForPassword(); // Solicita la contraseña nuevamente si es incorrecta
    }
}

// Verificar la autenticación al cargar la página
window.onload = checkAuthentication;