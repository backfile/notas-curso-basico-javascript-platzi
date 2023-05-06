const estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, bienvenido ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}

// Otra forma //

const estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, bienvenido ${estudiante}`);
}

for (var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}
