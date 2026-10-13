const nota = 98;
let letra = "";

if (typeof nota !== "number" || nota < 0 || nota > 100) {
  console.log("Error: nota no válida");
} else {
  if (nota >= 90) {
    letra = "A";
  } else if (nota >= 80) {
    letra = "B";
  } else if (nota >= 70) {
    letra = "C";
  } else if (nota >= 60) {
    letra = "D";
  } else {
    letra = "F";
  }

  console.log(`Nota ${nota}: ${letra}`);
}

switch (letra) {
  case "A":
    console.log("Excelente");
    break;
  case "B":
    console.log("Muy bien");
    break;
  case "C":
    console.log("Suficiente");
    break;
  case "D":
    console.log("Reprobado");
    break;
  case "F":
    console.log("Muy deficiente");
    break;
  default:
    console.log("Letra no reconocida");
}
