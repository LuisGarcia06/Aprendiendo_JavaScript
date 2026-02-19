const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 2000,
    disponible: true,
}

// Muestra el objeto completo
console.log(producto);

// Acceso a propiedades con notación de punto (forma más común)
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Acceso a propiedades con notación de corchetes (alternativa)
// Útil cuando el nombre de la propiedad está en una variable o tiene espacios
console.log(producto['nombre']);

