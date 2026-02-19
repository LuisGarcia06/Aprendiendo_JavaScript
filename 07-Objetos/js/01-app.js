// Este código demuestra dos formas de almacenar datos de un producto:

// Forma 1: Variables individuales (menos eficiente)
const nombre = 'Monitor de 20 pulgadas';
const precio = 2000;
const disponible = true;

// Forma 2: Objeto (forma recomendada)
// Agrupa datos relacionados en una sola estructura
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 2000,
    disponible: true,
}

// Muestra el objeto completo en consola
console.log(producto);

// Verifica el tipo de dato (retorna "object")
console.log(typeof producto);
