var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola ${estudiante}`);
}

while (estudiante.length > 0) {
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}
