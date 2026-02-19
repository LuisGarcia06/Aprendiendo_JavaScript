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

// Variable que almacenará los resultados
let resultado;

// El operador spread (...) copia todos los elementos de 'carrito' y agrega 'producto' al FINAL
// resultado ahora es: [producto]
resultado = [...carrito, producto];

// Copia todos los elementos de 'resultado' y agrega 'producto2' al FINAL
// resultado ahora es: [producto, producto2]
resultado = [...resultado, producto2]

// Agrega 'producto3' al INICIO, seguido de todos los elementos de 'resultado'
// resultado ahora es: [producto3, producto, producto2]
resultado = [producto3, ...resultado];

// Muestra el array resultado en formato tabla en la consola
console.table(resultado);