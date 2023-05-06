var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Tele", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 25000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

// Metodo .filter para recocorrer arrays enteros (crea un nuevo array)

var arculosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500;
});

var articulosFiltrados = articulos.filter(function (art) {
  return art.costo >= 10000;
});

// Metodo .map para recocorrer arrays (crea un nuevo array)

var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});

// Devuelve el primer elemento que cumpla la condicion (crea un nuevo array)

var encuentraArticulo = articulos.find(function (articulo) {
  return articulo.nombre === "Laptop";
});

// .forEach NO crea un nuevo array

articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

// .some devuelve true o false, regresa “false” cuando ningún elemento coincide con la condición "si alguno coincide devuelve true". (No crea un nuevo array)

var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
});
// find() : Devuelve el primer elemento del array que cumpla con la condición dada
// foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array (no crea nuevo array)
// some() : Comprueba si al menos un elemento del array cumple con la condición que le damos, devuelve un valor booleano (no crea un nuevo array)
// filter() : Devuelve todos los elementos del array que cumplan con la condición dada
