// Ejercicio 1: variables con distintos tipos primitivos
const string = "Hola, soy un string";
const number = 42;
const boolean = true;
const array = [1, 2, 3, 4, 5];
const object = { nombre: "Marcos", edad: 30 };

// Ejercicio 2: reasignar una const (deja el error comentado, ver abajo)
// const string = "Hola, soy un string"; (YA PROBADO)
// string = "identifier ´string´ has been already declared"; // Esto generará un error porque no se puede reasignar una const

var variableVar = "Soy una variable var";
let variableLet = "Soy una variable let";

var variableVar = "Puedo ser redeclarada y reasignada";
variableLet = "Puedo ser reasignada pero no redeclarada";
