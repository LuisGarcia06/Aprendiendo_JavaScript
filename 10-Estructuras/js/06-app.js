// Declaramos si el usuario está registrado (false = NO está registrado)
const usuario = false;

// Declaramos si el usuario tiene fondos suficientes (false = NO tiene fondos)
const puedePagar = false;


// Primera condición: ¿Es usuario Y puede pagar? (ambas deben ser true)
// false && false = FALSO, no se ejecuta
if (usuario && puedePagar) {
    console.log('Puede realizar la compra');
}

// Segunda condición: ¿NO es usuario Y tampoco puede pagar?
// !false && !false = true && true = VERDADERO, este bloque se ejecuta
else if (!usuario && !puedePagar) {
    console.log('No puede realizar la compra');
}

// Tercera condición: ¿Solo NO es usuario? (pero sí podría pagar)
// No se ejecuta porque ya se cumplió la condición anterior
else if (!usuario) {
    console.log('Necesita crear una cuenta');
}

// Cuarta condición: ¿Solo NO puede pagar? (pero sí es usuario)
// No se ejecuta porque ya se cumplió la condición anterior
else if (!puedePagar) {
    console.log('Fondos insuficientes');
}

// Resultado en consola: "No puede realizar la compra"