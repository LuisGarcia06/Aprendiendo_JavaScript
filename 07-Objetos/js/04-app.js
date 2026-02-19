const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 2000,
    disponible: true,
}

// Forma antigua de extraer propiedades (comentada)
// const nombre = producto.nombre;
// console.log(nombre);

// Destructuring: extrae múltiples propiedades en una sola línea
const {nombre, precio, disponible, noExist} = producto;
console.log(nombre);        // 'Monitor de 20 pulgadas'
console.log(precio);        // 2000
console.log(disponible);    // true
console.log(noExist);       // undefined (la propiedad no existe en el objeto)

