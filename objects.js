let miAuto = {
  patente: 123,
  color: "Rojo",
  info: function () {
    console.log(`Auto patente ${this.patente} y color ${this.color}`);
  },
};

miAuto.info();
