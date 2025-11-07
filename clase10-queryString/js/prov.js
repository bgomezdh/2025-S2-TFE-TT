let URL_PROV = "https://apis.datos.gob.ar/georef/api/v2.0/provincias";

let lista = document.querySelector(".lista");

fetch(URL_PROV)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data);
    
    let contenido = "";

    for (let i = 0; i < data.provincias.length; i++) {
        const element = data.provincias[i];

        
        contenido +=  `<li>  <a href="./searchResults.html?idProv=${element.id}">${element.nombre}</a>  </li>`;
        
    }

    lista.innerHTML = contenido;
    
})
.catch(function(errores) {
    console.log(errores);
    
});




