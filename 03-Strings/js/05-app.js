const producto = 'Monitor de 20 Pulgadas';
console.log(producto);
console.log(producto.length); // 22 caracteres

// .replace() reemplaza la primera ocurrencia de un texto por otro
// NO modifica el string original, devuelve uno nuevo
console.log(producto.replace('Pulgadas', '"')); // 'Monitor de 20 "'

// .slice(inicio, fin) extrae una porción del string
console.log(producto.slice(0,8));  // 'Monitor ' - desde posición 0 hasta 8 (no incluye 8)
console.log(producto.slice(2,1));  // '' - string vacío (el fin es menor que inicio)

// .substring(inicio, fin) similar a slice pero con diferencias
console.log(producto.substring(0,10)); // 'Monitor de' - extrae del 0 al 10
console.log(producto.substring(2,1));  // 'o' - INVIERTE los valores si fin < inicio (toma 1,2)

// Obtener el primer carácter de un string
const usuario = 'Juan';
console.log(usuario.substring(0,1)); // 'J'
console.log(usuario.charAt(0));      // 'J' - método específico para obtener un carácter

