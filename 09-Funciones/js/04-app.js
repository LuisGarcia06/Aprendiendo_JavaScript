// Declaración de función
function saludar(nombre) {
  return "Hola, " + nombre;
}

// Se llama directamente
saludar("Juan"); // "Hola, Juan"

// Función incorporada de JavaScript
parseInt("42"); // 42

// Método de un objeto
const persona = {
  nombre: "Ana",
  saludar: function() {  // Este es un método
    return "Hola, soy " + this.nombre;
  }
};

// Se llama con objeto.metodo()
persona.saludar(); // "Hola, soy Ana"

// Métodos incorporados de JavaScript
const texto = "hola";
texto.toUpperCase(); // "HOLA" - método del objeto String

const numeros = [1, 2, 3];
numeros.push(4); // [1,2,3,4] - método del objeto Array

const numero = 20;
numero.toString(); // "20" - método del objeto Number