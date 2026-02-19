// Modo estricto: activa comprobaciones más rigurosas en JavaScript
"use strict";

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 2000,
    disponible: true,
}

// Object.freeze(): congela el objeto, impidiendo cualquier modificación
// No se pueden agregar, modificar o eliminar propiedades
Object.freeze(producto);

// Estos intentos de modificación fallarán silenciosamente (o darán error en strict mode)
// producto.disponible = false;
// producto.precio = 4000;
// delete producto.nombre;

console.log(producto);  // El objeto permanece sin cambios

// Object.isFrozen(): verifica si un objeto está congelado (retorna true/false)
console.log('Esta congelado este objeto:', Object.isFrozen(producto));
