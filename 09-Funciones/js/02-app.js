// DECLARACIÓN DE FUNCIÓN TRADICIONAL
// ✅ Tiene hoisting: se puede llamar antes de ser declarada
// ✅ El nombre "sumar" queda fijo en el scope
// ✅ Sintaxis: function nombreFuncion() {}
function sumar() {
    console.log(2+2); // Imprime: 4
}

// Llamada a la función sumar
sumar();


// EXPRESIÓN DE FUNCIÓN (Function Expression)
// ❌ NO tiene hoisting: solo se puede llamar después de declararla
// ❌ No se puede reasignar porque usa "const"
// ✅ Sintaxis: const variable = function() {}
// La función en sí es anónima, pero se guarda en "sumar2"
const sumar2 = function () {
    console.log(3+3) // Imprime: 6
}

// Llamada a la función sumar2
// ⚠️ Esto solo funciona porque está DESPUÉS de la declaración
sumar2();

// DIFERENCIA CLAVE EN HOISTING:
// sumar();  ← Esto funcionaría incluso si lo pones arriba del todo
// sumar2(); ← Esto daría ERROR si lo pones antes de "const sumar2"