// Muestra una ventana emergente que solicita al usuario ingresar su nombre
// El valor ingresado se almacena en la variable constante 'nombre'
const nombre = prompt('Cual es tu nombre?')

// Busca en el documento el elemento con la clase 'contenido'
// y modifica su contenido HTML insertando el nombre del usuario
// seguido del texto 'esta aprendiendo JSModerno'
document.querySelector('.contenido').innerHTML = `${nombre} esta aprendiendo JSModerno`