const num1 = 10;
const num2 = 20; // Cambia este valor para probar la división por cero
const operador = "/"; // Prueba con "+", "-", "*", "/" o cualquier otro símbolo

//  Validación y cálculo con ternarios encadenados
const resultado =
  operador === "+"
    ? num1 + num2
    : operador === "-"
      ? num1 - num2
      : operador === "*"
        ? num1 * num2
        : operador === "/"
          ? num2 === 0
            ? "Error: No se puede dividir entre cero"
            : num1 / num2
          : "Error: Operador no válido";

console.log(`[Calculadora] Resultado: ${resultado}`);
