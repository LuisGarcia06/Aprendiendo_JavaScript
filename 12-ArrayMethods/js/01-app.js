const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// includes() verifica si un valor existe en un arreglo simple
// Retorna true si 'Enero' está en el arreglo, false si no
// const existe = meses.includes('Enero')
// console.log(existe); // true


// some() recorre el arreglo de objetos y verifica si AL MENOS UN elemento cumple la condición
// En este caso, busca si existe algún producto cuyo nombre sea exactamente 'Tablet'
// Retorna true porque 'Tablet' sí existe en el carrito
const existe2 = carrito.some(producto => producto.nombre === 'Tablet');
console.log(existe2); // true

// some() también funciona con arreglos simples, similar a includes()
// Busca si algún mes del arreglo es igual a 'Agosto'
// Retorna false porque 'Agosto' no está en el arreglo (solo hay hasta Julio)
const existe3 = meses.some(mes => mes === 'Agosto');
console.log(existe3); // false

