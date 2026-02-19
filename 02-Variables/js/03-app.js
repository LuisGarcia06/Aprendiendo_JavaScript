const producto = 'Tablet';

//No se pueden reasignar 
//producto = 'Monitor';

console.log(producto);

const precio = 20

console.log(precio);

const nombre = "Ana";
nombre = "Carlos"; // ❌ Error: Assignment to constant variable

const edad = 25;
edad = 30; // ❌ Error

const apellido; // ❌ Error: Missing initializer
apellido = "García";

const apellido = "García"; // ✅ Correcto

const nombre = "Ana";
const nombre = "Carlos"; // ❌ Error: Identifier 'nombre' has already been declared

if (true) {
  const mensaje = "Hola";
  console.log(mensaje); // ✅ "Hola"
}

console.log(mensaje); // ❌ Error: mensaje is not defined