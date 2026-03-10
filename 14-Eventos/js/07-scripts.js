// Selecciona el contenedor principal 'card' del DOM
const cardDiv = document.querySelector('.card');

// Escucha el click en 'card' y detecta en qué hijo se hizo click (Event Delegation)
cardDiv.addEventListener('click', (e) => {
    
    // Si el elemento clickeado tiene la clase 'titulo'
    if (e.target.classList.contains('titulo')) {
        console.log('Distes click en el titulo');
    } 
    
    // Si el elemento clickeado tiene la clase 'precio'
    if (e.target.classList.contains('precio')) {
        console.log('Distes click en el precio');
    }
    
    // Si el elemento clickeado tiene la clase 'categoria'
    if (e.target.classList.contains('categoria')) {
        console.log('Distes click en la categoria');
    }
    
});

/*
    SÍNTESIS:
    El código usa el patrón DELEGACIÓN DE EVENTOS. En lugar de agregar un
    listener a cada elemento hijo por separado, se coloca uno solo en el
    padre 'card'. Con e.target se detecta exactamente en qué hijo se hizo
    click, identificándolo por su clase. Esto es más eficiente que el código anterior
    ya que con un solo listener se manejan múltiples elementos hijos.
*/





