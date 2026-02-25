const autenticado = true
const puedePagar = false


// La estructura se lee así por capas:

console.log(
    autenticado ?          // ¿Está autenticado?
        puedePagar ?       // Si SÍ, entonces ¿puede pagar?
            'Esta autenticado y puede pagar'        // SÍ puede pagar
            : 'Si esta autenticado pero no puede pagar' // NO puede pagar
        : 'No esta autenticado'  // Si NO está autenticado
);


/*
Básicamente son dos ternarios anidados, uno dentro del otro:

El primer ternario evalúa autenticado
Si es true, entra al segundo ternario que evalúa puedePagar
Si autenticado es false, directamente cae en 'No esta autenticado'

La diferencia con el código anterior es que antes tenías comas y dos puntos de más (: ,) 
que rompían la sintaxis. Ahora cada ternario tiene exactamente su estructura correcta: condicion ? valorTrue : valorFalse.
Con los valores actuales ambos son true, así que el resultado en consola sería "Esta autenticado y puede pagar".

Los ternarios se usan para simplificar condiciones simples en una sola línea, en lugar de escribir un if/else completo



*/