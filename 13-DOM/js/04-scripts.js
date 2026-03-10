// Devuelve el PRIMER elemento que tenga la clase 'card'
// Si no existe → null
const card = document.querySelector('.card');
console.log(card); // <div class="card">...</div>


// Selector anidado: busca un elemento '.info' que esté DENTRO de '.premium'
// Solo devuelve el primero que encuentre
const info = document.querySelector('.premium .info');
console.log(info); // <div class="info">...</div>  (dentro de .premium)


// Selector avanzado:
// - Dentro de <section class="hospedaje">
// - Busca un elemento '.card'
// - Específicamente el SEGUNDO hijo (:nth-child(2))
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard); // <div class="card">...</div>  (el segundo)


// Busca por ID, equivalente a getElementById('formulario')
// pero usando sintaxis CSS con #
const formulario = document.querySelector('#formulario');
console.log(formulario); // <form id="formulario">...</form>


// Busca por etiqueta HTML directamente
// Devuelve el primer <nav> que encuentre
const navegacion = document.querySelector('nav');
console.log(navegacion); // <nav>...</nav>

