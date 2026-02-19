// Declaración de función que suma dos números
function sumar (a, b) {
    // Imprime en consola la suma de los dos parámetros
    console.log(a + b);
}

// Llamada a la función con los argumentos 30 y 56
// Imprime: 86
sumar(30, 56);

// Declaración de función que recibe nombre y apellido
function saludar(nombre, apellido){
    // Usa template literals (backticks) para interpolar variables
    // Imprime un saludo personalizado
    console.log(`Hola ${nombre} ${apellido}`)
};

// Llamada a la función con los argumentos 'Juan' y 'Topo'
// Imprime: Hola Juan Topo
saludar('Juan', 'Topo')


