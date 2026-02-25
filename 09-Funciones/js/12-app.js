// Array de objetos que representa un carrito de compras
const carrito = [
    {nombre: 'Monitor de 28 pulgadas', precio:600},
    {nombre: 'television', precio:200},
    {nombre: 'Tablet', precio:100},
    {nombre: 'Audifonos', precio:350},
    {nombre: 'Teclado', precio:50},
    {nombre: 'celualar', precio:900},
];

// MAP con ARROW FUNCTION y return implícito
// Como solo hay una expresión, no necesita llaves ni 'return'
// Crea un nuevo array con strings formateados
const nuevoarreglo = carrito.map( producto => `${producto.nombre} - Precio ${producto.precio}`) 

// FOREACH con ARROW FUNCTION
// Solo ejecuta el console.log para cada producto
// No retorna nada, solo itera e imprime
carrito.forEach ( producto => console.log(`${producto.nombre} - Precio ${producto.precio}`))

// Imprime el array creado por map:
// [
//   'Monitor de 28 pulgadas - Precio 600',
//   'television - Precio 200',
//   'Tablet - Precio 100',
//   'Audifonos - Precio 350',
//   'Teclado - Precio 50',
//   'celualar - Precio 900'
// ]
console.log(nuevoarreglo);
// ```

// ## Salida en Consola:
// ```
// Monitor de 28 pulgadas - Precio 600
// television - Precio 200
// Tablet - Precio 100
// Audifonos - Precio 350
// Teclado - Precio 50
// celualar - Precio 900
// [
//   'Monitor de 28 pulgadas - Precio 600',
//   'television - Precio 200',
//   'Tablet - Precio 100',
//   'Audifonos - Precio 350',
//   'Teclado - Precio 50',
//   'celualar - Precio 900'
// ]