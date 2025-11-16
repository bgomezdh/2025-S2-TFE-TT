//Recuperar #darkMode y body.
let darkMode = document.querySelector("#darkMode");
let body = document.querySelector("body");

// quiero poner el fondo en oscuro 
darkMode.addEventListener("click", function(e) {

    let texto = darkMode.innerText;
    let modoOscuro = "Modo Oscuro";

    if (texto == modoOscuro) {
        darkMode.innerText = "Modo Claro";
        body.style.backgroundColor = "#283651";
    } else {
        darkMode.innerText = modoOscuro;
        body.style.backgroundColor = "#f5f6fa";
    }


    // #283651 #f5f6fa
})