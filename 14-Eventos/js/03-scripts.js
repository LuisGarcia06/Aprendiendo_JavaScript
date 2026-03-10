// Selecciona el elemento con la clase 'busqueda' del DOM
const busq = document.querySelector('.busqueda');

// Escucha cada vez que el usuario escribe o modifica el campo
busq.addEventListener('input', (e) => {
    
    // Si el campo está vacío, imprime un mensaje de aviso
    if (e.target.value === ''){
        console.log('El campo esta vacio');
    } 
    
    // Imprime en consola el valor actual del campo en tiempo real
    console.log(e.target.value);
})

/*
    SÍNTESIS:
    El código obtiene un campo de búsqueda y escucha en tiempo real
    lo que el usuario escribe. Si el campo está vacío muestra un aviso,
    y en cualquier caso imprime el valor actual del campo en la consola.
*/

