let workbook = null;
const resultElement = document.getElementById('result');

// Manejar carga de archivo
document.getElementById('upload').addEventListener('change', handleFile, false);

function handleFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(event) {
        const data = new Uint8Array(event.target.result);
        workbook = XLSX.read(data, { type: 'array' });
        resultElement.textContent = 'Archivo cargado. Puedes buscar un valor.';
    };

    reader.readAsArrayBuffer(file);
}

// Manejar búsqueda
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchValue = document.getElementById('search').value.trim();
    if (!searchValue || !workbook) {
        resultElement.textContent = 'Cargue un archivo y escriba un valor para buscar.';
        return;
    }

    // Obtener la primera hoja del libro
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Buscar en la primera columna (index 0)
    const results = json.filter(row => row[0] === searchValue);

    if (results.length > 0) {
        resultElement.textContent = JSON.stringify(results, null, 2);
    } else {
        resultElement.textContent = 'No se encontraron resultados.';
    }
});