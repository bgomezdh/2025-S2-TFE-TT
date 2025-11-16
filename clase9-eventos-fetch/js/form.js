//Recuperar #pelicula y form
let pelicula = document.querySelector("#pelicula");
let form = document.querySelector("form");

// enviar el form si tiene mas de 2 caracteres
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let longText = pelicula.value.length;
    let minLong = 2;

    if ( longText > minLong ) {
        this.submit()
    } else {
        alert("Ingrese min 3 caracteres");
    }
    
})
