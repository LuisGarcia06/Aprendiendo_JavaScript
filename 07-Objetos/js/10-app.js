const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 2000,
    disponible: true,
}

const medidas = {
    peso: '1kg',
    medida: '1m',
}

// Object.assign() combina las propiedades de múltiples objetos en uno solo.
// En este caso, toma 'producto' como objeto base y le añade las propiedades
// de 'medidas'. IMPORTANTE: este método modifica el objeto original 'producto'.
// El resultado contendrá todas las propiedades de ambos objetos.
const resultado = Object.assign(producto, medidas);

console.log(resultado);

// El operador spread (...) ofrece una forma más moderna de combinar objetos.
// A diferencia de Object.assign(), esto crea un NUEVO objeto sin modificar
// los originales. Primero expande todas las propiedades de 'producto', luego
// las de 'medidas'. Si hay propiedades duplicadas, las últimas sobrescriben
// a las primeras. Esta es la forma más recomendada actualmente.
const OtroResultado = {...producto, ...medidas};

// Separar el mensaje del objeto (más legible)
console.log('La fusion de los objetos productos y medidas:', OtroResultado);




