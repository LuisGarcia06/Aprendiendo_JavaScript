// Modo estricto: activa comprobaciones más rigurosas en JavaScript
"use strict";

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 2000,
    disponible: true,
}

// Object.seal(): sella el objeto
// PERMITE modificar propiedades existentes
// NO PERMITE agregar ni eliminar propiedades
Object.seal(producto);

// FUNCIONA: puedes modificar valores de propiedades existentes
producto.disponible = false;

// FALLA: no puedes agregar nuevas propiedades
// producto.imagen = 'imagen.png';

// FALLA: no puedes eliminar propiedades
//delete producto.nombre;

console.log(producto);  // disponible ahora es false

// Object.isSealed(): verifica si un objeto está sellado (retorna true/false)
console.log('Esta sellado este objeto:', Object.isSealed(producto));



