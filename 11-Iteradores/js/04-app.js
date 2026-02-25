// ─────────────────────────────────────────────────────────────
// WHILE: Es una alternativa al for. La diferencia principal es
// cómo está organizado visualmente:
//
//   FOR   → inicio, condición e incremento van en UNA sola línea
//   WHILE → el inicio va ANTES, la condición va en el while,
//            y el incremento va DENTRO del bloque
//
// Úsalo cuando no sabes cuántas veces se repetirá el bucle,
// por ejemplo: "repite hasta que el usuario escriba 'salir'".
// ─────────────────────────────────────────────────────────────

// INICIO: el contador arranca en 0, declarado FUERA del while.
// ⚠️ Falta "let" o "const" aquí. Sin declararlo correctamente
//    se crea una variable global, lo cual es mala práctica.
//    Lo correcto sería: let i = 0;
i = 0;

// CONDICIÓN: el bucle corre MIENTRAS i sea menor que 100.
// Cuando i llegue a 100, la condición es false y el while se detiene.
while (i < 100) {

    // Verifica si el número actual es par o impar con el operador módulo (%)
    if (i % 2 === 0) {
        console.log(`${i}: es par`);
    } else {
        console.log(`${i}: Es impar`);
    }

    // INCREMENTO: aumenta i en 1 al final de cada vuelta.
    // ⚠️ Esto es crítico: si olvidas el i++ el bucle nunca termina
    //    porque i siempre sería 0, creando un BUCLE INFINITO
    //    que congela el navegador o la terminal.
    i++;
}

// SALIDA ESPERADA (primeras líneas):
// 0: es par
// 1: Es impar
// 2: es par
// 3: Es impar
// ... hasta el 99