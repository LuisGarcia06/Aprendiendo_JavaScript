// Declaramos el dinero disponible en efectivo
const dinero = 800;

// Declaramos si el usuario tiene tarjeta disponible (false = NO tiene)
const tarjeta = false;

// Declaramos si el usuario tiene cheque disponible (false = NO tiene)
const cheque = false;

// Declaramos el total a pagar
const totalPago = 1000;

// Primera condición: ¿El dinero en efectivo alcanza para pagar?
// 800 >= 1000 es FALSO, no alcanza
if (dinero >= totalPago) {
    console.log('El pago se realizo con exito');

// Segunda condición: ¿Tiene tarjeta disponible?
// tarjeta = false, así que tampoco se cumple
} else if (tarjeta) {
    console.log('Se procede con tarjeta');

// Tercera condición: ¿Tiene cheque disponible?
// cheque = false, tampoco se cumple
} else if (cheque) {
    console.log('Se procede con cheque');

// Si NINGUNA condición anterior se cumplió, se ejecuta este bloque
} else {
    console.log('Fondos insuficientes');
}

// Resultado en consola: "Fondos insuficientes"