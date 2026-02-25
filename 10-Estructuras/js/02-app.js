// Declaramos "puntaje" como un número
const puntaje = 1000;

// Declaramos "puntaje2" como un STRING (texto), aunque tenga el mismo valor
const puntaje2 = '1000';

// Imprime el tipo de dato de "puntaje" → resultado: "number"
console.log(typeof puntaje);

// Imprime el tipo de dato de "puntaje2" → resultado: "string"
console.log(typeof puntaje2);


// CÓDIGO COMENTADO (no se ejecuta):
// Aquí se usaba != para comparar si puntaje2 era diferente a 1000
// Con != JavaScript convierte los tipos automáticamente (no es estricto)
// por eso '1000' == 1000 sería VERDADERO con ==
// if (puntaje2 != 1000) {
//     console.log('No son lo mismo...');
// } else {
//     console.log('Si son lo mismo');
// }


// Comparamos puntaje2 con 1000 usando === (comparación ESTRICTA)
// === compara tanto el VALOR como el TIPO DE DATO
// '1000' (string) === 1000 (number) es FALSO, porque son tipos diferentes
if (puntaje2 === 1000) {
    console.log('Son iguales');
} else {
    // Este bloque se ejecuta porque el tipo de dato es diferente
    console.log('No son iguales');
}

// Resultado en consola:
// "number"
// "string"
// "No son iguales"

/*

* La clave de este código es la diferencia entre == y ===:

* == solo compara el valor, convierte los tipos automáticamente. '1000' == 1000 sería true.
*=== compara valor Y tipo de dato. '1000' === 1000 es false porque uno es string y el otro number

*/

