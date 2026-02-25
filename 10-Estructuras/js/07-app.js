const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalapagar = 1000;

if (efectivo >= totalapagar || credito >= totalapagar || disponible>=totalapagar) {
    console.log('Se efectua el pago');
} else {
    console.log('Saldo insuficiente');
}

/*
* La clave de este código son los operadores lógicos:

&& (AND) → ambas condiciones deben ser true para ejecutarse
! (NOT) → invierte el valor, convierte false en true y viceversa
|| (OR) → aunque no se usa aquí, se ejecuta si al menos una condición es true

Como ambas variables son false, el único caso que cubre ambas situaciones a la vez 
es el segundo else if, 
por eso se imprime "No puede realizar la compra".




*/