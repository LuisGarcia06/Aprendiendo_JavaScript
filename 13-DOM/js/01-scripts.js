let elemento; // Declaramos una variable que irá almacenando distintos valores del DOM

// 'document' es el objeto raíz que representa toda la página HTML
elemento = document;

// 'document.all' devuelve una colección con TODOS los elementos HTML de la página
elemento = document.all;

// 'document.head' accede al elemento <head> del documento (metadatos, estilos, scripts)
elemento = document.head;

// 'document.body' accede al elemento <body> (todo el contenido visible de la página)
elemento = document.body;

// 'document.domain' devuelve el dominio del sitio web (ej: "google.com")
elemento = document.domain;

// 'document.forms' devuelve una colección con todos los formularios <form> de la página
elemento = document.forms;

// 'document.forms[0]' accede específicamente al PRIMER formulario de la página (índice 0)
elemento = document.forms[0];

// Al final, solo se imprime el último valor asignado: el primer formulario de la página
// Si no existe ningún formulario, devolverá 'undefined'
console.log(elemento);


