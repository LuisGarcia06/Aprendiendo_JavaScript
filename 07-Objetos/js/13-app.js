const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 2000,
    disponible: true,
}

// Retorna un arreglo con los NOMBRES de las propiedades (las llaves)
// Resultado: ['nombre', 'precio', 'disponible']
console.log(Object.keys(producto));

// Retorna un arreglo con los VALORES de las propiedades
// Resultado: ['Monitor de 20 pulgadas', 2000, true]
console.log(Object.values(producto));

// Retorna un arreglo de arreglos, donde cada uno contiene [llave, valor]
// Resultado: [['nombre', 'Monitor de 20 pulgadas'], ['precio', 2000], ['disponible', true]]
console.log(Object.entries(producto));

