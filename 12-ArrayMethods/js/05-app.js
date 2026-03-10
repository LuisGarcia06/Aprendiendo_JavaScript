const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// find() recorre el arreglo y retorna el PRIMER elemento que cumpla la condición
// A diferencia de filter() que retorna un ARREGLO, find() retorna directamente el OBJETO encontrado
// Si no encuentra ningún elemento que cumpla la condición, retorna undefined
// En este caso busca el producto cuyo nombre sea exactamente 'Tablet'
const resultado = carrito.find(producto => producto.nombre === 'Tablet')
console.log(resultado); // { nombre: 'Tablet', precio: 200 }

/*

La diferencia clave entre find() y filter() es:

filter() → retorna un arreglo con todos los elementos que cumplan la condición
find() → retorna directamente el objeto/elemento del primer resultado encontrado y se detiene ahí

Por eso find() es más eficiente cuando sabes que solo buscas un único elemento específico



*/