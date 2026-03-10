const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// El operador Spread (...) "desparrama" todos los elementos del arreglo original
// Crea un NUEVO arreglo con todos los meses existentes y agrega 'Agosto' al final
// El arreglo original 'meses' no se modifica
const meses2 = [...meses, 'Agosto'];
console.log(meses2); // ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto']


// Se crea un nuevo objeto producto con nombre y precio
const producto = {nombre: 'Raton', precio: 300};

// Igual que con meses2, el Spread copia todos los objetos del carrito original
// y agrega el nuevo producto al final, creando un NUEVO arreglo
// El arreglo original 'carrito' no se modifica
const carrito2 = [...carrito, producto];
console.log(carrito2); // [...todos los productos anteriores, { nombre: 'Raton', precio: 300 }]


