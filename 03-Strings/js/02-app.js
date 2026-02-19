// Variable con un string
const producto = 'Monitor 20';
console.log(producto);

// .length devuelve la cantidad de caracteres del string (incluyendo espacios)
console.log(producto.length); // 10

// .includes() verifica si un string contiene una subcadena específica
// Devuelve true o false y ES SENSIBLE A MAYÚSCULAS/MINÚSCULAS
console.log(producto.includes('Tablet'));  // false - no contiene 'Tablet'
console.log(producto.includes('Monitor')); // true - sí contiene 'Monitor'
console.log(producto.includes('monitor')); // false - 'monitor' en minúscula no coincide