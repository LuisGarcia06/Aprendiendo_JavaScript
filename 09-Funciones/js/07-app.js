// Se llama a la función ANTES de declararla
// Esto funciona por el HOISTING (JavaScript eleva las declaraciones)
iniciarApp();

// Primera función: punto de entrada de la aplicación
function iniciarApp(){
    console.log('Iniciando app....');
    // Llama a la segunda función desde aquí
    segundaFuncion();
}

// Segunda función: se ejecuta después de iniciarApp()
function segundaFuncion(){
    console.log('Desde la segunda funcion');
    // Llama a la tercera función pasando 'Pablo' como argumento
    usuarioAutenticado('Pablo');
}

// Tercera función: recibe el nombre del usuario como parámetro
function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario espere');
    // Muestra el usuario autenticado usando template literal
    console.log(`Usuario aunteticado exitosamente: ${usuario}`)
}
```

**Salida en consola (en orden):**
```
// Iniciando app....
// Desde la segunda funcion
// Autenticando usuario espere
// Usuario aunteticado exitosamente: Pablo

