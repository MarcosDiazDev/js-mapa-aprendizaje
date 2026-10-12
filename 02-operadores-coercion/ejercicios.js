// 1. Número y Cadena de texto
1 == "1"; // true  -> JavaScript convierte la cadena "1" a número antes de comparar.
1 === "1"; // false -> Son de tipos distintos: uno es Number y el otro es String.

// 2. Booleano y Número
true == 1; // true  -> El booleano true se convierte internamente al número 1.
true === 1; // false -> Son de tipos distintos: Boolean vs Number.

// 3. Falsy values: Cero y Cadena vacía
0 == ""; // true  -> Ambos se consideran valores "falsy" y se convierten a un estado común (0).
0 === ""; // false -> Tipos distintos: Number vs String.

// 4. Falsy values: Booleano y Cadena vacía
false == ""; // true  -> Ambos se coercionan a 0 durante la comparación débil.
false === ""; // false -> Tipos distintos: Boolean vs String.

// 5. Arreglo vacío y Número
//[] == 0    // true  -> El arreglo vacío [] se convierte a una cadena vacía "", que luego se convierte a 0.
//[] === 0   // false -> Tipos distintos: Object vs Number.
