const enlace = document.createElement('a');

enlace.textContent = 'nuevo-enlace';

enlace.href = '/nuevo-enlace';

enlace.target =  '_blanck';

enlace.setAttribute('data-enlace', 'nuevo-enlace')

enlace.classList.add('alguna-clase');

console.log(enlace);

enlace.onclick = miFuncion; 


const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);


function miFuncion(){
    alert('Hola distes click')
}

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

const img = document.createElement('img');
img.src = 'img/hacer2.jpg';

const card = document.createElement('div');
card.classList.add('card');

card.appendChild(img);

card.appendChild(info);

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);























