// Devuelve una NodeList con TODAS las cards que encuentre
// A diferencia de querySelector que solo devuelve la primera
const card = document.querySelectorAll('.card');
console.log(card); // NodeList(3) [div.card, div.card, div.card]
                   // NodeList(0) [] → si no existe ninguna


// Aunque los IDs deben ser únicos, querySelectorAll los busca igual
// En la práctica siempre devolverá máximo 1
const formularios = document.querySelectorAll('#formulario');
console.log(formularios); // NodeList(1) [form#formulario]
                          // NodeList(0) [] → si no existe


                          