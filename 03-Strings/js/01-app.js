// Declaración de una variable constante llamada 'producto' con el valor 'Monitor'
const producto = 'Monitor';
// Imprime en consola el valor de 'producto': Monitor
console.log(producto);

// Crea un string usando el constructor String() como función (sin 'new')
// Esto convierte el valor a un string primitivo
const producto2 = String('Monitor de 24 Pulgadas');
// Imprime en consola: Monitor de 24 Pulgadas
console.log(producto2);

// Crea un objeto String usando el constructor String() con 'new'
// Esto crea un objeto envolvente de tipo String, no un string primitivo
const producto3 = new String('Monitor de 27 Pulgadas');
// Imprime en consola un objeto String: [String: 'Monitor de 27 Pulgadas']
console.log(producto3);

