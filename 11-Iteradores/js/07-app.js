// ─────────────────────────────────────────────────────────────
// FOR...OF: Es una forma moderna y más limpia de recorrer arreglos.
// Fue introducido en ES6 (2015).
//
// Comparado con el for clásico:
//   for clásico  → necesitas manejar el índice (i) manualmente
//   for...of     → olvídate del índice, accedes directo al elemento
//
// Sintaxis: for (let elemento of arreglo)
//   - "productos" → variable temporal que representa cada objeto
//                   del arreglo en cada vuelta del bucle
//   - "carrito"   → el arreglo que se va a recorrer
// ─────────────────────────────────────────────────────────────

const carrito = [
    { nombre: 'Monitor de 28 pulgadas', precio: 600 },
    { nombre: 'television',             precio: 200 },
    { nombre: 'Tablet',                 precio: 100 },
    { nombre: 'Audifonos',              precio: 350 },
    { nombre: 'Teclado',                precio: 50  },
    { nombre: 'celualar',               precio: 900 },
];

// En cada vuelta, "productos" es igual a un objeto completo del carrito:
// vuelta 1 → productos = { nombre: 'Monitor de 28 pulgadas', precio: 600 }
// vuelta 2 → productos = { nombre: 'television', precio: 200 }
// ... y así hasta el último elemento
for (let productos of carrito) {
    console.log(productos.nombre); // accedemos a la propiedad nombre de cada objeto
}

// ─────────────────────────────────────────────────────────────
// COMPARATIVA: las 3 formas de recorrer el mismo arreglo
//
// 1. for clásico → más control, pero más verboso
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}
//
// 2. forEach → moderno, pero no devuelve nada y no puedes usar break
carrito.forEach(producto => console.log(producto.nombre));
//
// 3. for...of → moderno, limpio, y SÍ puedes usar break y continue
for (let productos of carrito) {
    console.log(productos.nombre);
}
// ─────────────────────────────────────────────────────────────

// VENTAJA IMPORTANTE del for...of sobre forEach:
// Puedes usar "break" para detener el bucle cuando quieras,
// algo que forEach NO permite.
for (let productos of carrito) {
    if (productos.precio > 500) {
        console.log(`${productos.nombre} es muy caro, deteniendo búsqueda`);
        break; // ← detiene el bucle por completo, forEach no puede hacer esto
    }
    console.log(productos.nombre);
}
