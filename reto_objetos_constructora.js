var listaAuto = [];

function auto(marca, color) {
  this.marca = marca;
  this.color = color;
}

function registrarAutos() {
  var rta = prompt("Cuantos autos desea agregar? -> ");
  for (i = 0; i < rta; i++) {
    var marca = prompt("Marca: ");
    var color = prompt("Color: ");
    var nuevoAuto = new auto(marca, color);
    agregarAutos(nuevoAuto);
  }
}

function agregarAutos(nuevoAuto) {
  listaAuto.push(nuevoAuto);
}
