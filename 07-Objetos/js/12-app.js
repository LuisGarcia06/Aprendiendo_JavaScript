// FORMA 1: Object Literal
// Creamos un objeto directamente, escribiendo todas sus propiedades manualmente
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 2000,
    disponible: true,
}

// FORMA 2: Constructor Function (Función Constructora)
// Creamos una "plantilla" o "molde" reutilizable para crear múltiples objetos similares
// El 'this' se refiere al nuevo objeto que se está creando
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true; // Valor por defecto para todos los productos
}

// Usamos el constructor con 'new' para crear un objeto basado en la plantilla
// 'new' crea un objeto vacío y hace que 'this' apunte a él
const producto2 = new Producto('Laptop HP', 20000);
console.log(producto2);

// Reutilizamos el mismo constructor para crear otro objeto diferente
// Misma estructura, diferentes valores
const producto3 = new Producto('Impresora EPSON', 5000);
console.log(producto3);