/* let ingresoBali = prompt("Ingrese su edad?");
const edadMin = 18;
const edadA = 16; */

/* if (ingresoBali >= edadA && ingresoBali< edadMin) {
   alert("Puede ingresar con acompañante");
} else if (ingresoBali >= edadMin) {
  alert("Puede ingresar");
} else {
  alert("No Puede ingresar");
}
 */

let esMayor = confirm("Es mayor de edad");

if (esMayor) {
    alert("Puede ingresar");
} else {
    alert("No Puede ingresar");
}