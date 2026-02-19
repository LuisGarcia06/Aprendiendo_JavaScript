// Función que RETORNA la suma de dos números
function sumar(a,b){
    return a + b;  // Devuelve el resultado
}

// Captura el valor retornado en una constante
const resultado = sumar(9,23);  // resultado = 32
console.log(resultado);  // Imprime: 32


// Variable global que acumula el total del carrito
let total = 0;

// Función que SUMA el precio al total acumulado y lo RETORNA
function agregarcarrito(precio){
    return total += precio;  // total = total + precio
}

// Función que calcula el 15% de impuesto sobre el total
function calcularimpuesto(total){
    return total * 1.15;  // Multiplica por 1.15 (100% + 15%)
}

// Se van agregando productos al carrito
total = agregarcarrito(500);  // total = 500
total = agregarcarrito(100);  // total = 600
total = agregarcarrito(300);  // total = 900

// Calcula el total con impuestos
const totalpagar = calcularimpuesto(total);  // 900 * 1.15 = 1035

// Imprime: El total a pagar es de 1035
console.log(`El total a pagar es de ${totalpagar} `);

// Imprime: 900 (el total sin impuestos)
console.log(total);


// **Conceptos clave:**

// 1. **`return`**: Devuelve un valor que puede ser capturado en una variable
// 2. **Variable global**: `total` existe fuera de las funciones y mantiene su valor
// 3. **Acumulación**: `total +=` va sumando valores
// 4. **Reasignación**: `total = agregarcarrito(...)` actualiza el valor de `total`

// **Salida en consola:**
// ```
// 32
// El total a pagar es de 1035
// 900