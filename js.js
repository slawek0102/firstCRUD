const listaOsob = document.querySelector('#tablica');
const tableHeader = "<tr><th>Imie</th><th>Nazwisko</th><th>Wiek</th></tr>";

axios.get('http://localhost:3000/')
    .then(function (response) {
        listaOsob.innerHTML = tableHeader + response.data.map((row) => {
            let tableRow = `<tr><td>${row.imie}</td><td>${row.nazwisko}</td><td>${row.wiek}</td><tr>`;
            return tableRow;
        }).reduce((totalRows, row) => {
            return totalRows + row;
        });
    });

