// Selecciona el formulario por su ID
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Escucha cuando el formulario es enviado y llama a la función validarFormulario
formulario.addEventListener('submit', validarFormulario)

// Función que se ejecuta al enviar el formulario
function validarFormulario (e) {
    
    // Previene el comportamiento por defecto (que la página se recargue)
    e.preventDefault()

    console.log('Buscando...');

    // Imprime la URL/acción a donde se enviaría el formulario
    console.log(e.target.action);
}

/*
    SÍNTESIS:
    El código obtiene un formulario y escucha su evento submit. Al enviarlo,
    previene la recarga de la página con preventDefault(), y muestra en consola
    la URL destino del formulario sin llegar a enviarlo realmente.
*/

