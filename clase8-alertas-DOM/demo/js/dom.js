// zona de selectores
const titulo = document.querySelector("#titulo");
const subtitulo = document.querySelector("h2");
const parrafo = document.querySelector(".parrafo");
const messi = document.querySelector(".messi");

// zona modificaciones
titulo.style.color = "blue";
titulo.style.fontSize = "45px";

subtitulo.innerText += " Brian";

/* parrafo.innerHTML = "Saludos desde <abbr title='Digital House'>DH</abbr>";
 */
parrafo.innerHTML = `Saludos desde <abbr title="Digital House">DH</abbr>`;

messi.src = "./img/messi2.jpg";
messi.style.display = "none";

const msj = "Quieres que se muestre la imagen nuevamente?";

let aparecer = confirm(msj);

if (aparecer) {
  messi.style.display = "inline";
}

const cerrar = "Quieres salir del navegador?";

let salirNavegador = confirm(cerrar);

if (salirNavegador) {
  window.close();
}












const section = document.querySelector(".section")

let contenido = "";

for (let i = 0; i < 2; i++) {
  contenido += `<article class="article">
                    <h2 class="titulo">Titulo</h2>
                    <img class="messi" src="./img/messi1.jpg" alt="">
                    <a href="/detalleProducto.html" class="link">Ver +</a>
                </article>`;
}

section.innerHTML = contenido;