const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";

function juego(eleccion, maquina) {
  console.log(Math.floor(Math.random() * 4));
  if (eleccion != maquina) {
    if (
      (eleccion === "piedra" && maquina === "papel") ||
      (eleccion === "papel" && maquina === "tijera") ||
      (eleccion === "tijera" && maquina === "piedra")
    ) {
      console.log("Perdiste");
    } else {
      console.log("Ganaste");
    }
  } else {
    console.log("Empate");
  }
}

juego(tijera, papel);
