const producto = 'Monitor de 20 Pulgadas';

// .repeat(n) repite el string 'n' veces
const texto = ' en promocion'.repeat(3);
console.log(texto); // ' en promocion en promocion en promocion'

// Template literals para concatenar strings
console.log(`${producto} ${texto} !!!`);
// 'Monitor de 20 Pulgadas en promocion en promocion en promocion !!!'

// .split(separador) divide un string en un array usando el separador indicado
const actividad = 'Estoy aprendiendo JavaScript Moderno';
console.log(actividad.split(" ")); 
// ['Estoy', 'aprendiendo', 'JavaScript', 'Moderno']

const hobbies = 'Correr, Barrer, Ejercitarse, Ducharse';
console.log(hobbies.split(", ")); // Corregido: sin espacio antes de la coma
// ['Correr', 'Barrer', 'Ejercitarse', 'Ducharse']

const twett = 'Aprendiendo JavaScript Moderno #JSModerno con Luis';
console.log(twett.split('#')); // Corregido: sin espacios alrededor del #
// ['Aprendiendo JavaScript Moderno ', 'JSModerno con Luis']

