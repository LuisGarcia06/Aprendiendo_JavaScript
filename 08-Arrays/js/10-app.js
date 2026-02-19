
const carrito = [
    {nombre: 'Monitor de 28 pulgadas', precio:600},
    {nombre: 'television', precio:200},
    {nombre: 'Tablet', precio:100},
    {nombre: 'Audifonos', precio:350},
    {nombre: 'Teclado', precio:50},
    {nombre: 'celualar', precio:900},
];


const nuevoarreglo = carrito.map(function(producto) {
    console.log(`${producto.nombre} - Precio ${producto.precio}`);
});

const nuevoarreglo2 = carrito.forEach(function(producto) {
    console.log(`${producto.nombre} - Precio ${producto.precio}`);
});


console.log(nuevoarreglo);
console.log(nuevoarreglo2);








