//URL FETCH
let URL = "https://randomuser.me/api";

// elementos
let fotoPerfil = document.querySelector(".fotoPerfil");
let genero = document.querySelector(".genero");
let telefono = document.querySelector(".telefono");
let email = document.querySelector(".email");
let fotoPerfil2 = document.querySelector(".fotoPerfil2");

// recuperar elementos del DOM
fetch(URL)
.then(function(res) {
    return res.json()
})
.then(function(data) {
    console.log(data.results[0]);
    let element = data.results[0];

    fotoPerfil.src = element.picture.large;
    genero.innerText = element.gender;
    telefono.innerText = element.cell;
    email.innerText = element.email;
    fotoPerfil2.src = element.picture.thumbnail

})
.catch(function(err) {
    console.log(err);
    
});


