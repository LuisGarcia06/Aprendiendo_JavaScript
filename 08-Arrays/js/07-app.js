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

// Se crea el cuarto objeto producto
const producto4 = {
    nombre: 'Tablet',
    precio: '300' 
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

// push() agrega producto4 al FINAL del array
// Carrito ahora es: [producto3, producto, producto2, producto4]
// O sea: [Teclado, Monitor, Celular, Tablet]
carrito.push(producto4)

// Muestra el carrito actual con los 4 productos
console.table(carrito)

// MÉTODOS COMENTADOS (no se ejecutan):
// carrito.pop() - eliminaría el ÚLTIMO elemento (Tablet)
// carrito.shift() - eliminaría el PRIMER elemento (Teclado)

// El método splice(índice, cantidad) elimina elementos desde una posición específica
// splice(3, 1) significa: desde el índice 3, elimina 1 elemento
// Índice 3 = producto4 (Tablet), ya que los índices empiezan en 0
// Carrito ahora es: [producto3, producto, producto2]
// O sea: [Teclado, Monitor, Celular]
carrito.splice(3, 1)

// Muestra el carrito final después de eliminar la Tablet
console.table(carrito)