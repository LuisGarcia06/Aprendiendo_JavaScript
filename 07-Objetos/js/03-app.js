const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 2000,
    disponible: true,
}

// Agrega una nueva propiedad al objeto existente
producto.imagen = 'Imagen.png';

// Elimina una propiedad del objeto
delete producto.disponible;

// Muestra el objeto modificado
console.log(producto);
