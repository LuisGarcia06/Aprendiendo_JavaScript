// Selecciona los elementos del DOM por su clase
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

// Escucha el click en el contenedor principal 'card'
cardDiv.addEventListener('click', (e) => {
    // Detiene que el evento suba a elementos padres (stopPropagation)
    e.stopPropagation();
    console.log('Click en card');
})

// Escucha el click en el contenedor 'info' (hijo de card)
infoDiv.addEventListener('click', (e) => {
    // Detiene que el evento suba hacia 'card'
    e.stopPropagation();
    console.log('Click en info');
})

// Escucha el click en 'titulo' (hijo de info)
titulo.addEventListener('click', (e) => {
    // Detiene que el evento suba hacia 'info' y 'card'
    e.stopPropagation();
    console.log('Click en titulo');
})

/*
    SÍNTESIS:
    El código maneja el concepto de PROPAGACIÓN (bubbling). Sin stopPropagation(),
    al hacer click en 'titulo' se dispararían los 3 eventos en cascada hacia arriba.
    Con stopPropagation() cada elemento captura su propio click de forma aislada,
    evitando que el evento "burbujee" hacia los elementos padres.
*/

