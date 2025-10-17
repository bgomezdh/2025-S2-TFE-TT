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

console.log(`El auto ${autos[2].marca} es del año ${autos[2].annio}`);

console.log(autos[1].describirse());

