// Proyecto de la leccion: Perfil de usuario con variables y tipos de datos

const nombre = "Marcos Diaz";
let edad = 19;
const esDominicano = true;
let lenguajes = ["JavaScript", "Python", "C#"];

console.log(
  `Hola, me llamo ${nombre} y tengo ${edad} años. y soy ${esDominicano ? "Dominicano" : "no Dominicano"}.`,
);
console.log("");
console.log(
  `Mis lenguajes de programación favoritos son: ${lenguajes.join(", ")}.`,
);
