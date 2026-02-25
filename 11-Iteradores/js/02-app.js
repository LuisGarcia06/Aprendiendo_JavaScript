// Arreglo de objetos que representa un carrito de compras.
// OJO: el tercer producto (Tablet) tiene una propiedad extra llamada "descuento: true".
// Los demás productos NO tienen esa propiedad, lo que significa que
// al intentar acceder a ella devolverá "undefined", que JavaScript
// interpreta como falso (falsy) en una condición.
const carrito = [
    { nombre: 'Monitor de 28 pulgadas', precio: 600 },
    { nombre: 'television',             precio: 200 },
    { nombre: 'Tablet',                 precio: 100, descuento: true }, // ← único con descuento
    { nombre: 'Audifonos',              precio: 350 },
    { nombre: 'Teclado',                precio: 50  },
    { nombre: 'celualar',               precio: 900 },
];


// Recorremos todo el carrito con un for clásico usando el índice i
for (let i = 0; i < carrito.length; i++) {

    // Verificamos si el producto actual tiene la propiedad "descuento"
    // - Si descuento === true  → entra al if
    // - Si descuento === undefined (no existe la propiedad) → no entra, es falsy
    if (carrito[i].descuento) {

        console.log(`${carrito[i].nombre} tiene descuento`);

        // "continue" interrumpe la vuelta ACTUAL del bucle y salta a la siguiente.
        // Esto evita que el console.log de abajo se ejecute para este producto.
        // Sin el continue, imprimiría TAMBIÉN el nombre solo, duplicando la salida.
        continue;
    }

    // Esta línea solo se ejecuta cuando el producto NO tiene descuento,
    // porque si lo tenía, el "continue" ya saltó a la siguiente iteración.
    console.log(carrito[i].nombre);
}

// SALIDA ESPERADA EN CONSOLA:
// Monitor de 28 pulgadas
// television
// Tablet tiene descuento   ← entró al if y el continue saltó el console.log de abajo
// Audifonos
// Teclado
// celualar
