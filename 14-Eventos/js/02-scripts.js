// Selecciona el elemento con la clase 'navegacion' del DOM
const nav = document.querySelector(".navegacion")

// Imprime en consola el elemento nav encontrado (o null si no existe)
console.log(nav);

// Escucha un click simple sobre la navegacion
nav.addEventListener('click', () => {
    console.log('Click en la nav');
})

// Escucha cuando el mouse entra/hover al elemento navegacion
nav.addEventListener('mouseenter', () => {
    console.log('Pasando en la nav');
})

// Escucha cuando el mouse sale del elemento navegacion
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la nav');
})

// Escucha cuando se hace doble click sobre la navegacion
nav.addEventListener('dblclick', () => {
    console.log('Doble click');
})

/*
    SÍNTESIS:
    El código obtiene el elemento con clase 'navegacion' y le asigna 4 eventos:
    click simple, hover al entrar, hover al salir y doble click,
    imprimiendo en consola un mensaje diferente según la interacción del usuario.
*/


