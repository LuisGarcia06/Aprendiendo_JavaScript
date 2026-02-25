// ─────────────────────────────────────────────────────────────
// forEach con índice: recorre el arreglo y además expone
// el índice (i) de cada elemento como segundo parámetro.
// Solo sirve para ejecutar acciones, NO devuelve un nuevo arreglo.
// ─────────────────────────────────────────────────────────────
// const pendientes = ['Barrer', 'Trapear', 'Chapear', 'Cocinar']
// pendientes.forEach((pendientes, i) => console.log(`${i}:${pendientes}`))
// SALIDA:
// 0:Barrer
// 1:Trapear
// 2:Chapear
// 3:Cocinar


const carrito = [
    { nombre: 'Monitor de 28 pulgadas', precio: 600 },
    { nombre: 'television',             precio: 200 },
    { nombre: 'Tablet',                 precio: 100 },
    { nombre: 'Audifonos',              precio: 350 },
    { nombre: 'Teclado',                precio: 50  },
    { nombre: 'celualar',               precio: 900 },
];

// ─────────────────────────────────────────────────────────────
// forEach: recorre el arreglo pero SIEMPRE devuelve undefined.
// Guardarlo en una variable no tiene utilidad porque nunca
// habrá nada dentro de nuevoArreglo.
// ─────────────────────────────────────────────────────────────
const nuevoArreglo = carrito.forEach(objeto => objeto.nombre);
console.log(nuevoArreglo); // → undefined


// ─────────────────────────────────────────────────────────────
// map: recorre el arreglo y DEVUELVE un nuevo arreglo
// con el resultado de cada vuelta.
// Aquí le decimos: "de cada objeto, dame solo el nombre".
// El arreglo original (carrito) NO se modifica.
// ─────────────────────────────────────────────────────────────
const nuevoArreglo2 = carrito.map(objeto => objeto.nombre);
console.log(nuevoArreglo2);
// → ['Monitor de 28 pulgadas', 'television', 'Tablet', 'Audifonos', 'Teclado', 'celualar']


// ─────────────────────────────────────────────────────────────
// RESUMEN: ¿cuándo usar cada uno?
//
//   forEach → cuando quieres HACER algo con cada elemento
//             (imprimir, guardar en BD, modificar el DOM...)
//             y no necesitas un nuevo arreglo.
//
//   map     → cuando quieres TRANSFORMAR cada elemento
//             y obtener un nuevo arreglo con los resultados.
// ─────────────────────────────────────────────────────────────