// const encabezado = document.querySelector('h1');

// .style devuelve un objeto CSSStyleDeclaration con TODAS las propiedades CSS
// console.log(encabezado.style); // CSSStyleDeclaration {color: '', background: '', ...}

// Las propiedades CSS con guión se escriben en camelCase en JavaScript
// background-color  →  backgroundColor
// font-family       →  fontFamily
// text-transform    →  textTransform

// encabezado.style.backgroundColor = 'blue';   // style="background-color: blue"
// encabezado.style.fontFamily = 'Arial';        // style="font-family: Arial"
// encabezado.style.textTransform = 'uppercase'; // style="text-transform: uppercase"

const card = document.querySelector('.card');

// Agrega la clase 'nueva-clase' al elemento
card.classList.add('nueva-clase');
// <div class="card nueva-clase">

// Elimina la clase 'card' del elemento
card.classList.remove('card');
// <div class="nueva-clase">

// Muestra todas las clases actuales del elemento
console.log(card.classList); // DOMTokenList ['nueva-clase']

card.classList.add('clase')        // Agrega una clase
card.classList.remove('clase')     // Elimina una clase
card.classList.toggle('clase')     // Si existe la quita, si no existe la pone
card.classList.contains('clase')   // true o false → ¿tiene esa clase?
card.classList.replace('a', 'b')   // Reemplaza una clase por otra

