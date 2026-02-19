// Declaración de función con PARÁMETROS POR DEFECTO
// Si no se pasan argumentos, usa 'Desconocido' como valor predeterminado
function saludar(nombre = 'Desconocido', apellido = 'Desconocido'){
    // Usa template literals (backticks) para interpolar variables
    // Imprime un saludo personalizado
    console.log(`Hola ${nombre} ${apellido}`)
};

// Llamada a la función SIN argumentos
// Como no se pasan valores, usa los valores por defecto
// Imprime: Hola Desconocido Desconocido
saludar();

saludar();                    // Hola Desconocido Desconocido
saludar('Juan');              // Hola Juan Desconocido
saludar('Juan', 'Topo');      // Hola Juan Topo
saludar('Ana');               // Hola Ana Desconocido


