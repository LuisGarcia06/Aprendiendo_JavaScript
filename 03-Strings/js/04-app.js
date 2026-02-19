// String con muchos espacios en blanco al inicio y al final
const producto = '             Monitor de 20 Pulgadas            ';
console.log(producto);

// .length cuenta TODOS los caracteres incluyendo los espacios en blanco
console.log(producto.length); // Aproximadamente 50+ caracteres

// .trimStart() elimina los espacios en blanco solo del INICIO del string
console.log(producto.trimStart()); // 'Monitor de 20 Pulgadas            '

// .trimEnd() elimina los espacios en blanco solo del FINAL del string
console.log(producto.trimEnd()); // '             Monitor de 20 Pulgadas'

// .trim() elimina los espacios en blanco tanto del INICIO como del FINAL
console.log(producto.trim()); // 'Monitor de 20 Pulgadas'

