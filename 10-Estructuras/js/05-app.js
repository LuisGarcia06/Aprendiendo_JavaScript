// Declaramos la variable con el método de pago elegido
const metodoDepago = 'efectivo';

// Switch evalúa el valor de "metodoDepago" y lo compara con cada caso
switch (metodoDepago) {

    // ¿Es "efectivo"? SÍ, este caso se cumple
    case 'efectivo':
        console.log(`Pagastes con ${metodoDepago}`); // Imprime: "Pagastes con efectivo"
        pagar(); // Llama a la función pagar()
        break; // Sale del switch, no evalúa más casos

    // ¿Es "cheque"? NO, se omite
    case 'cheque':
        console.log(`Pagastes con ${metodoDepago}`);
        break;

    // ¿Es "tarjeta"? NO, se omite
    case 'tarjeta':
        console.log(`Pagastes con ${metodoDepago}`);
        break;

    // Si ningún caso coincide, se ejecuta el default (como un "else")
    // En este caso NO se ejecuta porque "efectivo" ya coincidió
    default:
        console.log('Metodo de pago no disponible');
        break;
}


// Función que se ejecuta cuando el pago es en efectivo
function pagar() {
    console.log('Pagando...'); // Imprime: "Pagando..."
}

// Resultado en consola:
// "Pagastes con efectivo"
// "Pagando..."

/*
* switch es una alternativa más ordenada al if/else if cuando necesitas comparar una variable contra múltiples valores posibles. 
*El break es importante porque le indica al switch que deje de evaluar casos una vez que encontró el correcto. 
*Sin él, seguiría ejecutando los casos siguientes. 
*El default funciona como el else final, se ejecuta solo si ningún caso coincidió.




*/