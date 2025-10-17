for (let i= 0; i < 10; i++){
    console.log(i + " Antes");
    
    console.log(`Iteracion #  ${i++}`);

      console.log(i + " Despues");
}

let autos = [
  {
    marca: "Toyota",
    color: "Rojo",
    annio: 2024,
    describirse: function () {
      return `El ${this.marca} ${this.color} es del año ${this.annio}`;
    }
  },
  {
    marca: "Ford",
    color: "Azul",
    annio: 2025,
    describirse: function () {
      return `El ${this.marca} ${this.color} es del año ${this.annio}`;
    }
  },
  {
    marca: "Fiat",
    color: "Gris",
    annio: 2021,
    describirse: function () {
      return `El ${this.marca} ${this.color} es del año ${this.annio}`;
    }
  }
];

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i].describirse());
}

let numeros = [1,2,3];

let total = 0

for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
}

console.log(total);
