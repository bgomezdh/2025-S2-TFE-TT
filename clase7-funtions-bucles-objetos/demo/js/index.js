// funcion declarada

function saludar(nombre, apellido){
    let edad = 31;
    return "Holaaa " + nombre + " " + apellido;
}


/* console.log(saludar("Brian", "Andrade"));
 */

// funcion expresada
let despedir = function(nombre, edad) {
    return `Chaooo ${nombre}, feliz cumple numero ${edad + 1}`;
}

console.log(despedir("Brian", 21));
