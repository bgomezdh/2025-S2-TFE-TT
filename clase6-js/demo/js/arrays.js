let diasDeLaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

let dia= 2;

let mensaje = "Yo voy a estar disponible los dias: " + diasDeLaSemana[dia] + " y " + diasDeLaSemana[6];



console.log(mensaje);

let abuelosPaternos = ["Carlos", "Maria"];

let abuelosMaternos = ["Andres", "Carmen"];

let misAbuelos = [abuelosPaternos, abuelosMaternos];

console.log(misAbuelos);

console.log("Mi abuela Paterna se llama: " + misAbuelos[0][1]);

/* metodos arrays */

let diaEliminado =  diasDeLaSemana.pop();

console.log("El dia que se elimino fue el dia: " + diaEliminado);


console.log(diasDeLaSemana);

diasDeLaSemana.push("Domingo");

console.log(diasDeLaSemana);







