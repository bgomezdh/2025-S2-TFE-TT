// Recurar el form
let form = document.querySelector("form");


//agregarle un evento al form
form.addEventListener("submit", function(e) {
  e.preventDefault();

  //recupero los valores de los campos del form

  //convertir Info a Objeto
  let user = {
    email: this.email.value,
    password: this.password.value
  }

    //convertir a STRING
    let userString = JSON.stringify(user);
    
   // Guardar en sessionStorage
   sessionStorage.setItem("miClave", userString);

     // Redirigir al perfil
     this.submit()

})

  


  





  



