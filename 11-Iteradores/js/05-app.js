// ─────────────────────────────────────────────────────────────
// DO...WHILE: Similar al while, pero con una diferencia clave:
//
//   WHILE     → primero evalúa la condición, luego ejecuta el bloque.
//               Si la condición es false desde el inicio, NUNCA ejecuta.
//
//   DO...WHILE → primero ejecuta el bloque, luego evalúa la condición.
//               Esto garantiza que el código se ejecute AL MENOS UNA VEZ,
//               sin importar si la condición es false desde el principio.
//
// Ejemplo práctico: mostrar un menú al usuario al menos una vez,
// y repetirlo solo si el usuario quiere continuar.
// ─────────────────────────────────────────────────────────────

// ⚠️ Igual que antes, falta "let". Debería ser: let i = 0;
i = 0;

do {
    // ── Lógica FizzBuzz ──────────────────────────────────────
    // Las condiciones van de más específica a menos específica.
    // Divisible entre 15 primero (= divisible entre 3 y 5 a la vez)
    if (i % 15 === 0) {
        console.log(`${i}: Fizz Buzz`);

    // Divisible solo entre 5
    } else if (i % 5 === 0) {
        console.log(`${i}: Buzz`);

    // Divisible solo entre 3
    } else if (i % 3 === 0) {
        console.log(`${i}: Fizz`);
    }
    // ─────────────────────────────────────────────────────────

    // Incremento al final, antes de que el while evalúe la condición
    i++;

// La condición se evalúa DESPUÉS de cada ejecución del bloque.
// Cuando i llega a 100, el bucle se detiene.
} while (i < 100);

// ─────────────────────────────────────────────────────────────
// COMPARATIVA RÁPIDA:
//
//   while (false) { }         → no ejecuta NUNCA
//   do { } while (false);     → ejecuta UNA VEZ aunque sea false
//
// En este caso particular, como i empieza en 0 y la condición
// es i < 100, ambos (while y do...while) producen el mismo resultado.
// La diferencia se nota solo cuando la condición podría ser
// false desde el primer momento.
// ─────────────────────────────────────────────────────────────