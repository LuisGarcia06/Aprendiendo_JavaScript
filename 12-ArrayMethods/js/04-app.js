const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado 

// filter() recorre el arreglo y retorna un NUEVO arreglo solo con los elementos que cumplan la condición
// Filtra los productos cuyo precio sea MAYOR a 600
// Resultado: [{ nombre: 'Celular', precio: 700 }]
resultado = carrito.filter(producto => producto.precio > 600);

// Filtra los productos cuyo precio sea MENOR a 400
// Resultado: [{ nombre: 'Televisión', precio: 100 }, { nombre: 'Tablet', precio: 200 }, { nombre: 'Audifonos', precio: 300 }]
resultado = carrito.filter(producto => producto.precio < 400);

// Filtra todos los productos cuyo nombre sea DIFERENTE a 'Celular'
// Es decir, retorna todos los productos EXCEPTO el Celular
// Resultado: Monitor, Televisión, Tablet, Audifonos, Teclado
resultado = carrito.filter(producto => producto.nombre !== 'Celular')

// Filtra solo el producto cuyo nombre sea IGUAL a 'Celular'
// Resultado: [{ nombre: 'Celular', precio: 700 }]
// Este es el último valor asignado, por lo que es lo que mostrará el console.log
resultado = carrito.filter(producto => producto.nombre === 'Celular')


// Imprime el resultado de la última operación filter(): [{ nombre: 'Celular', precio: 700 }]
console.log(resultado);

