const navegacion = document.querySelector('.navegacion');
console.log(navegacion); // <nav class="navegacion">...</nav>

// childNodes → incluye TODO: elementos, texto, espacios en blanco, comentarios
console.log(navegacion.childNodes);
// NodeList(7) [text, a, text, a, text, a, text]
//              ↑ espacios en blanco también son nodos

// children → SOLO elementos HTML, ignora espacios y texto
console.log(navegacion.children);
// HTMLCollection(3) [a, a, a]  ← solo los enlaces

// nodeType → número que indica qué tipo de nodo es
console.log(navegacion.children[0].nodeType); // 1 = es un elemento HTML
// nodeNombre → dice qué etiqueta es
console.log(navegacion.children[0].nodeName); // "A" (siempre en mayúsculas)


// 1  = Elemento HTML   → <div>, <p>, <a>...
// 2  = Atributo        → class="card"
// 3  = Texto           → "Hola mundo"
// 8  = Comentario      → <!-- comentario -->
// 9  = Documento       → document
// 10 = Doctype         → <!DOCTYPE html>

const card = document.querySelector('.card');
console.log(card.nodeType); // 1 → es un elemento
console.log(card.nodeName); // "DIV" → es un <div>

// children devuelve los hijos directos del card
console.log(card.children);
// HTMLCollection [img, div.info]
//                  ↑0      ↑1

// Acceder al div.info (segundo hijo, índice 1)
console.log(card.children[1]);
// <div class="info">...</div>

// Anidar para ir más profundo → hijos del div.info
console.log(card.children[1].children[1]);
// El segundo hijo dentro de .info (por ejemplo un <h3>)

// Leer el texto de ese elemento
console.log(card.children[1].children[1].textContent);
// "Nombre del lugar"

// Modificar ese texto navegando desde card
card.children[1].children[1].textContent = 'Cambiando el Texto con traversing...';
// ⚠️ Cambia el texto directamente en el HTML visible

console.log(card.children);     // HTMLCollection [img, div.info]
console.log(card.children[0]);  // <img src="img/hacer1.jpg">
console.log(card.children[0].src); // "http://sitio.com/img/hacer1.jpg"
                                   // ⚠️ devuelve la URL absoluta completa

// Cambiar la imagen navegando desde card
card.children[0].src = 'img/hacer2.jpg';
// La imagen cambia visualmente en pantalla de inmediato

// lastChild → último nodo (puede ser un espacio en blanco)
console.log(navegacion.lastChild);        // text (espacio en blanco)

// lastElementChild → último elemento HTML real
console.log(navegacion.lastElementChild); // <a>Último enlace</a>

// firstChild → primer nodo (puede ser espacio en blanco)
console.log(navegacion.firstChild);        // text (espacio en blanco)

// firstElementChild → primer elemento HTML real
console.log(navegacion.firstElementChild); // <a>Primer enlace</a>

// Modificar el texto del primer enlace
navegacion.firstElementChild.textContent = 'Nuevo Enlace...';
// Cambia solo el texto del primer <a> de la navegación

// parentNode → nodo padre (puede incluir nodos de texto)
console.log(enlace.parentNode);    // <nav class="navegacion">

// parentElement → elemento padre HTML (lo más común de usar)
console.log(enlace.parentElement); // <nav class="navegacion">
// En la práctica dan el mismo resultado casi siempre

// Subir dos niveles → padre del padre
console.log(enlace.parentElement.parentElement);
// El contenedor que envuelve al <nav>

// nextElementSibling → siguiente hermano en el HTML
console.log(enlace.nextElementSibling);
// <a>Segundo enlace</a>

// Se pueden encadenar para saltar varios hermanos
console.log(enlace.nextElementSibling.nextElementSibling);
// <a>Tercer enlace</a>

// También funciona entre cards (están al mismo nivel)
console.log(card.nextElementSibling);
// <div class="card">  ← la siguiente card


// Selecciona el 4to card directamente con nth-child
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard); // <div class="card"> ← el cuarto

// previousElementSibling → hermano anterior
console.log(ultimoCard.previousElementSibling);
// <div class="card"> ← el tercer card
```

---

## 🗺️ Mapa visual del Traversing
document
└── nav.navegacion          ← parentElement de los enlaces
    ├── a (firstElementChild)   ← .nextElementSibling →
    ├── a                                              ↓
    └── a (lastElementChild)  ← .previousElementSibling

div.card
├── img          ← children[0]
└── div.info     ← children[1]
    ├── span
    └── h3       ← children[1].children[1]
```
