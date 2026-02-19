// Se crea un array vacío llamado 'carrito' que almacenará los productos
const carrito = [];

// Se crea el primer objeto producto con sus propiedades nombre y precio
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: '400' // Nota: el precio está como string, debería ser número para cálculos
}

// Se crea el segundo objeto producto
const producto2 = {
    nombre: 'Celular',
    precio: '800' 
}

// Se crea el tercer objeto producto
const producto3 = {
    nombre: 'Teclado',
    precio: '50' 
}

// El método push() agrega el producto al FINAL del array carrito
// Carrito ahora es: [producto]
carrito.push(producto);

// push() agrega producto2 al FINAL del array
// Carrito ahora es: [producto, producto2]
carrito.push(producto2);

// El método unshift() agrega producto3 al INICIO del array
// Carrito ahora es: [producto3, producto, producto2]
carrito.unshift(producto3);

// console.table() muestra el array en formato de tabla en la consola
// Facilita la visualización de objetos y arrays
console.table(carrito);


