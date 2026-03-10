// Selecciona el primer <a> de la página y lo elimina directamente
// Es la forma más simple y moderna
const primerEnlace = document.querySelector('a');
primerEnlace.remove();
// El elemento desaparece del HTML inmediatamente

// Seleccionamos el padre primero
const navegacion = document.querySelector('.navegacion');

// Vemos los hijos disponibles antes de eliminar
console.log(navegacion.children);
// HTMLCollection(3) [a, a, a]
//                    ↑0 ↑1 ↑2

// removeChild() → elimina un hijo ESPECÍFICO desde el padre
// En este caso elimina el tercer enlace (índice 2)
navegacion.removeChild(navegacion.children[2]);
// HTMLCollection(2) [a, a]  ← ahora solo quedan dos