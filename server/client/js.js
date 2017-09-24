const listaOsob = document.querySelector('#tablica');
const tableHeader = "<tr><th>Imie</th><th>Nazwisko</th><th>Wiek</th></tr>";

axios.get('http://localhost:3000/allData')
    .then(function (response) {
        listaOsob.innerHTML = tableHeader + response.data.map((row) => {
            let tableRow = `<tr onclick='myAction(this)'><td>${row.imie}</td><td>${row.nazwisko}</td><td>${row.rok}</td> <tr>`;
               return tableRow;
        }).reduce((totalRows, row) => {
            return totalRows + row;
        });
    });

function myAction(e){

    for (let i =0; i<=2; i++){
        console.log(e.childNodes[i].innerHTML)
    }
}
