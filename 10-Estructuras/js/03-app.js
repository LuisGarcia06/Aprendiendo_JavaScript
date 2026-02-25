// Declaramos la variable "dinero" con el valor 200 (lo que tenemos disponible)
const dinero = 200;

// Declaramos la variable "producto" con el valor 200 (el costo del producto)
const producto = 200;

// Comparamos si el dinero es MAYOR O IGUAL al precio del producto
if (dinero >= producto) {
    // Este bloque se ejecuta si tenemos suficiente dinero para pagar
    // Como 200 >= 200 es VERDADERO, este bloque se ejecutará
    console.log('Si se puede pagar');
} else {
    // Este bloque se ejecuta si NO tenemos suficiente dinero
    // En este caso NO se ejecutará
    console.log('Fondos insuficientes');
}

// Resultado en consola: "Si se puede pagar"


