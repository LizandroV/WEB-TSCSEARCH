// function to load my external JSON file
function loadJSON(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', './data/movil.json', true);
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
            if (data[i].LINEA == idInput) {
                resultDiv.innerHTML ="<p><i class='fas fa-user'></i> Nombre: " + data[i].USUARIO + "</p>" +
                                     "<p><i class='fas fa-id-card'></i> DNI: " + data[i].DNI + "</p>" +
                                     "<p><i class='fas fa-map'></i> Sede: " + data[i].SEDE + "</p>" +
                                     "<p><i class='fas fa-briefcase'></i> Cargo: " + data[i].CARGO + "</p>" +
                                     "<p><i class='fas fa-building'></i> Area: " + data[i].AREA + "</p>" +
                                     "<p><i class='fas fa-mobile'></i> Modelo: " + data[i].MARCA + " " + data[i].MODELO + "</p>" +
                                     "<p><i class='fas fa-barcode'></i> IMEI: " + data[i].IMEI1 + "</p>" +
                                     "<p><i class='fas fa-calendar'></i> Fec Entrega: " + data[i].FECHA_DE_ENTREGA + "</p>";
                found = true;
                break;
            }

            else if (data[i].IMEI1 == Number(idInput)) {
                resultDiv.innerHTML ="<p><i class='fas fa-user'></i> Nombre: " + data[i].USUARIO + "</p>" +
                                     "<p><i class='fas fa-id-card'></i> DNI: " + data[i].DNI + "</p>" +
                                     "<p><i class='fas fa-map'></i> Sede: " + data[i].SEDE + "</p>" +
                                     "<p><i class='fas fa-briefcase'></i> Cargo: " + data[i].CARGO + "</p>" +
                                     "<p><i class='fas fa-building'></i> Area: " + data[i].AREA + "</p>" +
                                     "<p><i class='fas fa-mobile'></i> Modelo: " + data[i].MARCA + " " + data[i].MODELO + "</p>" +
                                     "<p><i class='fas fa-barcode'></i> IMEI: " + data[i].IMEI1 + "</p>" +
                                     "<p><i class='fas fa-calendar'></i> Fec Entrega: " + data[i].FECHA_DE_ENTREGA + "</p>";
                found = true;
                break;
            }

        };

        if (!found) {
            resultDiv.innerHTML = "<p class='error'><i class='fas fa-exclamation-circle'></i> ID not found.</p>";
        }
    });
}

// Event Listener on Click Buttom
document.querySelector("#searchbuttom").addEventListener('click', filterById);