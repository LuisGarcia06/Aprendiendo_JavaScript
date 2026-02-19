// FUNCIÓN EXPRESIÓN (Function Expression)
// Se asigna una función anónima a una constante
const aprendiendo = function() {
    console.log('Aprendiendo Javascript');
}

// Llamada a la función
// Imprime: Aprendiendo Javascript
aprendiendo()

// FUNCIÓN FLECHA (Arrow Function)
// Sintaxis más corta y moderna (ES6+)
// Cuando solo hay un return, se puede omitir la palabra 'return' y las llaves
const aprendiendo2 = () => 'Aprendiendo Javacript';

// Llama a la función y muestra el valor retornado
// Imprime: Aprendiendo Javacript
console.log(aprendiendo2());


