// Objeto con estructura anidada (objetos dentro de objetos)
// Permite organizar información relacionada en diferentes niveles
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 2000,
    disponible: true,
    informacion: {                    // Objeto anidado nivel 1
        medidas: {                    // Objeto anidado nivel 2
            peso: '1kg',
            medida: '30cm'
        },
        fabricacion: {                // Otro objeto anidado nivel 2
            pais: 'China'
        }
    }
}

// Muestra el objeto completo con toda su estructura
console.log(producto);

// Accede al primer nivel de anidación
console.log(producto.informacion);

// Accede a una propiedad en el nivel más profundo usando encadenamiento de puntos
console.log(producto.informacion.fabricacion.pais);

