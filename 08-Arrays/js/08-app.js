// Se crea un objeto producto con tres propiedades
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true 
};

// DESTRUCTURING DE OBJETOS
// Extrae la propiedad 'nombre' del objeto producto y la asigna a una variable con el mismo nombre
// Es equivalente a: const nombre = producto.nombre;
const {nombre} = producto;
console.log(nombre); // Imprime: "Monitor de 20 pulgadas"

// Se crea un array de números
const numeros = [10,20,30,40,50];

// DESTRUCTURING DE ARRAYS - Saltando elementos
// La coma vacía ( , ) salta el primer elemento (10)
// 'segundo' toma el segundo elemento del array (20)
const [,segundo] = numeros;

// DESTRUCTURING con OPERADOR REST (...)
// 'primero' toma el primer elemento (10)
// '...tercero' captura TODOS los elementos restantes en un nuevo array
// tercero será: [20, 30, 40, 50]
const [primero, ...tercero] = numeros;

// Imprime el array con los elementos restantes: [20, 30, 40, 50]
console.log(tercero)

// Imprime el segundo elemento: 20
console.log(segundo)
// ```

// **Resumen de conceptos:**

// 1. **Destructuring de objetos:** Extrae propiedades de un objeto
//    - `{nombre}` saca la propiedad `nombre` del objeto

// 2. **Destructuring de arrays:** Extrae elementos por posición
//    - `[,segundo]` - La coma salta elementos
//    - `[primero, ...tercero]` - El operador rest (`...`) captura el resto

// 3. **Operador rest (`...`):** Agrupa los elementos restantes en un array

// **Salida en consola:**
// ```
// Monitor de 20 pulgadas
// [20, 30, 40, 50]
// 20