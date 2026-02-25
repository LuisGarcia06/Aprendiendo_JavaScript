// ─────────────────────────────────────────────────────────────
// FIZZBUZZ: Reto clásico de programación.
// Recorre los números del 1 al 100 e imprime:
//   - "Fizz Buzz" si el número es divisible entre 3 Y entre 5
//   - "Buzz"      si solo es divisible entre 5
//   - "Fizz"      si solo es divisible entre 3
//   - (nada)      si no cumple ninguna condición
// ─────────────────────────────────────────────────────────────
for (let i = 1; i <= 100; i++) {

    // 1ª condición: divisible entre 15 (= entre 3 y 5 al mismo tiempo).
    // Va PRIMERO porque es la menos probable y la más específica.
    // Si la pusiéramos al final, los if de 3 y 5 la atraparían antes.
    // Truco: 15 = 3 × 5, así evitamos usar && para combinar dos condiciones.
    if (i % 15 === 0) {
        console.log(`${i}: Fizz Buzz`);

    // 2ª condición: divisible solo entre 5 (15 ya fue descartado arriba)
    } else if (i % 5 === 0) {
        console.log(`${i}: Buzz`);

    // 3ª condición: divisible solo entre 3
    // ⚠️ ERROR EN EL ORIGINAL: aquí decía "Buzz" en vez de "Fizz"
    } else if (i % 3 === 0) {
        console.log(`${i}: Fizz`); // ← corregido a Fizz

    }
    // Si no cumple ninguna condición, no se imprime nada.
    // Se podría agregar un else con console.log(i) si se quisiera mostrar todos los números.
}

// EJEMPLOS DE SALIDA:
// 3:  Fizz      (divisible entre 3)
// 5:  Buzz      (divisible entre 5)
// 15: Fizz Buzz (divisible entre 3 y 5)
// 30: Fizz Buzz (divisible entre 3 y 5)
// 45: Fizz Buzz (divisible entre 3 y 5)