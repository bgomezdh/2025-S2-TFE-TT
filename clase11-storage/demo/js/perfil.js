// recuperar info de session
let data = sessionStorage.getItem("miClave");

// convertir los datos en OBJ  
let dataObj = JSON.parse(data);

// recuperar elementos del DOM saludo, mensaj y la lista de los links
let saludo = document.querySelector(".saludo");
let mensaje = document.querySelector(".mensaje");
let lista = document.querySelector(".lista");


// preguntar si los datos existen
if (dataObj) {
  //Modificar textos en el DOM 
  saludo.innerText = `Bienvenido ${dataObj.email}`;
  mensaje.innerText = "Disfruta de la App."

  lista.innerHTML = ` <li><a href="./perfil.html">${dataObj.email}</a></li>
                      <li><a href="./login.html">Logout</a></li>`

  
}else{
  alert("No se guardaron bien los datos");
}




  


  //Modificar HTML en el DOM 
 

  // Si no hay datos guardados, alerta

