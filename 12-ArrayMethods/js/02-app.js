const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// findIndex() recorre el arreglo y retorna la POSICIÓN (índice) del primer elemento que cumpla la condición
// Los índices comienzan en 0, por lo que 'Enero' está en la posición 0
// Si no encuentra el elemento, retorna -1
const indice = meses.findIndex( mes => mes === 'Enero')
console.log(indice); // 0

// findIndex() también funciona con arreglos de objetos
// Busca el índice del producto cuyo nombre sea 'Audifonos'
// 'Audifonos' es el cuarto elemento del arreglo, por lo que retorna 3
const indice2 = carrito.findIndex(producto => producto.nombre === 'Audifonos' );
console.log(indice2); // 3

