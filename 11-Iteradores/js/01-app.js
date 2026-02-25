// ─────────────────────────────────────────────────────────────
// PRIMER FOR: Imprime los números del 0 al 10 de forma secuencial.
// - "let i = 0"  → el contador arranca en 0
// - "i <= 10"    → el bucle corre MIENTRAS i sea menor o igual a 10
// - "i++"        → al final de cada vuelta, i aumenta en 1
// ─────────────────────────────────────────────────────────────
for (let i = 0; i <= 10; i++) {
    console.log(`Numero : ${i}`);
}

// ─────────────────────────────────────────────────────────────
// SEGUNDO FOR: Recorre los números del 0 al 100 y determina
// si cada número es par o impar usando el operador módulo (%).
// - "i % 2 === 0" → si el residuo de dividir i entre 2 es 0, es PAR
// - De lo contrario, es IMPAR
// ─────────────────────────────────────────────────────────────
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`El numero ${i} es par`);
    } else {
        console.log(`El numero ${i} es impar`);
    }
}

// ─────────────────────────────────────────────────────────────
// ARREGLO DE OBJETOS: "carrito" simula un carrito de compras.
// Cada elemento es un objeto con dos propiedades:
//   - nombre → el nombre del producto
//   - precio → el costo del producto en la moneda local
// ─────────────────────────────────────────────────────────────
const carrito = [
    { nombre: 'Monitor de 28 pulgadas', precio: 600 },
    { nombre: 'television',             precio: 200 },
    { nombre: 'Tablet',                 precio: 100 },
    { nombre: 'Audifonos',              precio: 350 },
    { nombre: 'Teclado',                precio: 50  },
    { nombre: 'celualar',               precio: 900 },
];

// ─────────────────────────────────────────────────────────────
// TERCER FOR: Recorre e imprime el nombre de cada producto del carrito.
//
// ¿Por qué es importante "i" aquí?
//   Los arreglos en JavaScript se acceden por ÍNDICE numérico:
//     carrito[0] → primer producto  (Monitor)
//     carrito[1] → segundo producto (television)
//     carrito[2] → tercer producto  (Tablet) … y así sucesivamente.
//
//   "i" actúa como ese índice: empieza en 0 y sube de 1 en 1
//   hasta llegar a carrito.length - 1 (que es 5, el último elemento).
//   Si usáramos un número fijo en lugar de "i", solo podríamos
//   acceder a UN solo producto; gracias a "i" podemos recorrer
//   TODOS de forma dinámica sin importar cuántos haya en el arreglo.
//
// - "i < carrito.length" → se detiene antes de salirse del arreglo
//   (carrito.length = 6, por lo que i va de 0 a 5)
// ─────────────────────────────────────────────────────────────
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre); // carrito[i] obtiene el objeto en la posición i,
                                    // y .nombre extrae solo el nombre del producto
}

