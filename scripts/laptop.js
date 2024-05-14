// function to load my external JSON file
function loadJSON(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', './data/laptop.json', true);
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
            if (data[i].Host == idInput.toUpperCase()) {
                resultDiv.innerHTML ="<p><i class='fas fa-user'></i> Nombre: " + data[i].Colaborador + "</p>" +
                                     "<p><i class='fas fa-id-card'></i> DNI: " + data[i].DNI + "</p>" +
                                     "<p><i class='fas fa-map'></i> Sede: " + data[i].Sede2 + "</p>" +
                                     "<p><i class='fas fa-briefcase'></i> Cargo: " + data[i].Cargo + "</p>" +
                                     "<p><i class='fas fa-building'></i> Area: " + data[i].Area + "</p>" +
                                     "<p><i class='fas fa-desktop'></i> Modelo: " + data[i].FABRICANTE + " " + data[i].MODELO + "</p>" +
                                     "<p><i class='fas fa-laptop'></i> Hostname: " + data[i].Host + "</p>" +
                                     "<p><i class='fas fa-barcode'></i> Serie: " + data[i].SN + "</p>" +
                                     "<p><i class='fas fa-calendar'></i> Fec Entrega: " + data[i].Fecha_Entrega + "</p>";
                found = true;
                break;
            }

            else if (data[i].SN == idInput.toUpperCase()) {
                resultDiv.innerHTML ="<p><i class='fas fa-user'></i> Nombre: " + data[i].Colaborador + "</p>" +
                                     "<p><i class='fas fa-id-card'></i> DNI: " + data[i].DNI + "</p>" +
                                     "<p><i class='fas fa-map'></i> Sede: " + data[i].Sede2 + "</p>" +
                                     "<p><i class='fas fa-briefcase'></i> Cargo: " + data[i].Cargo + "</p>" +
                                     "<p><i class='fas fa-building'></i> Area: " + data[i].Area + "</p>" +
                                     "<p><i class='fas fa-desktop'></i> Modelo: " + data[i].FABRICANTE + " " + data[i].MODELO + "</p>" +
                                     "<p><i class='fas fa-laptop'></i> Hostname: " + data[i].Host + "</p>" +
                                     "<p><i class='fas fa-barcode'></i> Serie: " + data[i].SN + "</p>" +
                                     "<p><i class='fas fa-calendar'></i> Fec Entrega: " + data[i].Fecha_Entrega + "</p>";
                found = true;
                break;
            }

        };

        if (!found) {
            resultDiv.innerHTML = "<p class='error'><i class='fas fa-exclamation-circle'></i> Hostname o Serie no encontrado.</p>";
        }
    });
}

// Event Listener on Click Buttom
document.querySelector("#searchbuttom").addEventListener('click', filterById);