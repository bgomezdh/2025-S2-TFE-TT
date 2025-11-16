//URL FETCH
let URL_PROV = "https://apis.datos.gob.ar/georef/api/v2.0/provincias";

// recuperar elementos del DOM
let lista = document.querySelector(".lista");

fetch(URL_PROV)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let prov = data.provincias;

    let contenido = "";
    for (let i = 0; i < prov.length; i++) {
        const element = prov[i];

        console.log(element.nombre);
        contenido += `<li>${element.nombre}</li>` 
        
    }

    lista.innerHTML = contenido
    
  })
  .catch(function (err) {
    console.log(err);
    
  });
