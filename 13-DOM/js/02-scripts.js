// Busca todos los elementos que tengan la clase 'header'
// Devuelve HTMLCollection con los elementos encontrados
const header = document.getElementsByClassName('header');
console.log(header); // HTMLCollection [div.header] → si existe uno

// Busca todos los elementos con clase 'hero'
const hero = document.getElementsByClassName('hero');
console.log(hero); // HTMLCollection [section.hero] → si existe uno

// Busca TODOS los elementos con clase 'contenedor'
// Puede devolver múltiples elementos ya que es una clase reutilizable
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores); // HTMLCollection [div.contenedor, div.contenedor, ...]

// Busca una clase que NO existe en el HTML
const noExiste = document.getElementsByClassName('noExiste');
console.log(noExiste); // HTMLCollection [] → colección VACÍA (no es null ni undefined)

