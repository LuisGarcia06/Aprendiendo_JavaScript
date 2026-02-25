// Array de objetos que representa un carrito de compras
const carrito = [
    {nombre: 'Monitor de 28 pulgadas', precio:600},
    {nombre: 'television', precio:200},
    {nombre: 'Tablet', precio:100},
    {nombre: 'Audifonos', precio:350},
    {nombre: 'Teclado', precio:50},
    {nombre: 'celualar', precio:900},
];

// MAP: Itera y CREA UN NUEVO ARRAY con lo que retornes
// Ahora SÍ tiene return, entonces crea un array con los strings
const nuevoarreglo = carrito.map(function(producto) {
    return (`${producto.nombre} - Precio ${producto.precio}`);
});

// FOREACH: Itera pero NUNCA RETORNA un array
// Aunque tenga return dentro, forEach IGNORA ese return
// forEach SIEMPRE retorna undefined
const nuevoarreglo2 = carrito.forEach(function(producto) {
    return(`${producto.nombre} - Precio ${producto.precio}`);
    // Este return es IGNORADO por forEach
});

// Imprime un ARRAY con 6 strings:
// [
//   'Monitor de 28 pulgadas - Precio 600',
//   'television - Precio 200',
//   'Tablet - Precio 100',
//   'Audifonos - Precio 350',
//   'Teclado - Precio 50',
//   'celualar - Precio 900'
// ]
console.log(nuevoarreglo);

// Imprime: undefined
// forEach NUNCA retorna un array, sin importar si usas return
console.log(nuevoarreglo2);