const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// reduce() recorre el arreglo y ACUMULA un resultado en base a todos los elementos
// Recibe dos parámetros:
//   - Una función con (acumulador, elementoActual) => en este caso (total, producto)
//   - El valor inicial del acumulador => en este caso 0
//
// Así funciona paso a paso:
//   Vuelta 1: total = 0   + 500 = 500
//   Vuelta 2: total = 500 + 100 = 600
//   Vuelta 3: total = 600 + 200 = 800
//   Vuelta 4: total = 800 + 300 = 1100
//   Vuelta 5: total = 1100 + 400 = 1500
//   Vuelta 6: total = 1500 + 700 = 2200
// Al final retorna el total acumulado de todos los precios
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0)
console.log(resultado); // 2200

