// Imprime 'Prueba' en la consola inmediatamente al cargar el script
console.log('Prueba');

// Espera a que el HTML esté completamente cargado y parseado
document.addEventListener("DOMContentLoaded", () => {
    // Se ejecuta cuando el DOM está listo
    console.log('Pagina lista');
})

// Imprime 'Prueba2' inmediatamente, sin esperar al evento anterior
console.log('Prueba2');

/*
    SÍNTESIS:
    El código imprime 'Prueba' y 'Prueba2' de forma inmediata al cargar el script,
    y una vez que el DOM termina de construirse, imprime 'Pagina lista'.
*/