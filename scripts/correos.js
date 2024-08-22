// function to load my external JSON file
function loadJSON(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', './data/O365.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.send(null);
}

// function to filter by id
function filterById() {
    var idInput = document.getElementById("idInput").value;
    var resultDiv = document.getElementById("result");
    resultDiv.style.display = "block"; // show the result

    loadJSON(function (data) {
        var found = false;
        for (var i = 0; i < data.length; i++) {
            if (data[i].Correo.includes(idInput.toLowerCase())) {
                resultDiv.innerHTML = "<p><i class='fas fa-user'></i> Name: " + data[i].Nombres_Mostrado + "</p>" +
                                     "<p><i class='fas fa-envelope'></i> Email: " + data[i].Correo + "</p>" +
                                     "<p><i class='fas fa-key'></i> Pass: " + data[i].Clave + "</p>" +
                                     "<p><i class='fas fa-mail-bulk'></i> Licencia: " + data[i].Actual + "</p>" +
                                     "<p><i class='fas fa-id-card'></i> DNI: " + data[i].DNI + "</p>" +
                                     "<p><i class='fas fa-briefcase'></i> Position: " + data[i].Cargo + "</p>" +
                                     "<p><i class='fas fa-building'></i> Department: " + data[i].Area + "</p>" +
                                     "<p><i class='fas fa-star'></i> Estado: " + data[i].Estado_Usuario + "</p>" +
                                     "<p><i class='fas fa-check'></i> Creado: " + data[i].Creado + "</p>";
                found = true;
                break;
            }
        }

        if (!found) {
            resultDiv.innerHTML = "<p class='error'><i class='fas fa-exclamation-circle'></i> ID not found.</p>";
        }
    });
}

// Event Listener on Click Buttom
document.querySelector("#searchbuttom").addEventListener('click', filterById);