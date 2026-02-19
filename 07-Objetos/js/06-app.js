const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 2000,
    disponible: true,
    informacion: {                    
        medidas: {                    
            peso: '1kg',
            medida: '30cm'
        },
        fabricacion: {                
            pais: 'China'
        }
    }
}

// Destructuring anidado: extrae propiedades de diferentes niveles en una sola línea
// - nombre: extrae del nivel principal
// - informacion: extrae el objeto completo
// - medidas: extrae del interior de informacion
// - pais: extrae desde lo más profundo (informacion.fabricacion.pais)
const { nombre, informacion, informacion: { medidas }, informacion: { fabricacion: { pais } } } = producto

console.log(producto);      // Objeto completo
console.log(informacion);   // Objeto informacion completo
console.log(medidas);       // Objeto medidas
console.log(pais);          // Solo el string 'China'

