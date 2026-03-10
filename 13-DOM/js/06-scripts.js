// Seleccionamos el h1 que está dentro de '.contenido-hero'
const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado); // <h1>Texto del heading</h1>


// Forma comentada de modificar directamente sin guardar en variable
// document.querySelector('.contenido-hero h1').textContent = 'nuevo heading';


// innerHTML → devuelve el contenido HTML interno incluyendo etiquetas
console.log(encabezado.innerHTML);   // "Bienvenidos a <span>Mi Sitio</span>"

// textContent → devuelve TODO el texto, incluso el que está oculto con CSS
console.log(encabezado.textContent); // "Bienvenidos a Mi Sitio"

// innerText → devuelve solo el texto VISIBLE en pantalla (respeta CSS)
console.log(encabezado.innerText);   // "Bienvenidos a Mi Sitio"


// Selecciona el primer <img> dentro de '.card'
const imagen = document.querySelector('.card img');
console.log(imagen); // <img src="img/hacer1.jpg">

// Cambia el atributo src directamente → la imagen cambia en pantalla
imagen.src = 'img/hacer2.jpg'; // <img src="img/hacer2.jpg">