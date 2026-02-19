// Creamos un array de objetos llamado carrito
// Cada objeto representa un producto con sus propiedades: nombre y precio
const carrito = [
    {nombre: 'Monitor de 28 pulgadas', precio:600},
    {nombre: 'television', precio:200},
    {nombre: 'Tablet', precio:100},
    {nombre: 'Audifonos', precio:350},
    {nombre: 'Teclado', precio:50},
    {nombre: 'celualar', precio:900},
];

// PRIMER MÉTODO: Ciclo for tradicional
// Recorremos el array usando un índice (i) que va de 0 hasta la longitud del array
for(let i = 0; i<carrito.length; i++){
    // Accedemos a cada producto usando el índice carrito[i]
    // e imprimimos su nombre y precio en la consola
    console.log(`${carrito[i].nombre} -Precio ${carrito[i].precio}`)
}

// SEGUNDO MÉTODO: forEach
// Es una forma más moderna y legible de recorrer arrays
// forEach ejecuta una función para cada elemento del array
carrito.forEach(function(producto) {
    // 'producto' representa automáticamente cada objeto del array en cada iteración
    // No necesitamos usar índices, es más directo
    console.log(`${producto.nombre} - Precio ${producto.precio}`);
});


