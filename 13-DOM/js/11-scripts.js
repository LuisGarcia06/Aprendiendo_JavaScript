// Selecciona el botón flotante y el footer
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('footer');

// addEventListener(evento, función)
// 'click' → escucha cuando el usuario hace click
// mostrarOcultarFooter → función que se ejecuta al clickear
// ⚠️ Sin () → si pusiera mostrarOcultarFooter() se ejecutaría inmediatamente
//              sin esperar el click
btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {

    // Pregunta: ¿el footer YA tiene la clase 'activo'?
    if (footer.classList.contains('activo')) {

        // SI tiene 'activo' → está visible → lo ocultamos
        footer.classList.remove('activo');      // oculta el footer
        this.classList.remove('activo');        // desactiva el botón
        this.textContent = 'Idioma y moneda';  // regresa el texto original

    } else {

        // NO tiene 'activo' → está oculto → lo mostramos
        footer.classList.add('activo');       // muestra el footer
        this.classList.add('activo');         // activa el botón
        this.textContent = 'X Cerrar';       // cambia el texto del botón

    }

    // Muestra las clases actuales del footer después de cada click
    console.log(footer.classList);
}

// 'this' dentro de un addEventListener hace referencia
// al elemento que disparó el evento, en este caso el btnFlotante
this.classList.remove('activo'); // → btnFlotante.classList.remove('activo')
this.textContent = 'X Cerrar';  // → btnFlotante.textContent = 'X Cerrar'
```

---

## Flujo visual
Usuario hace click
        ↓
¿footer tiene clase 'activo'?
        ↓
   SÍ → Remover 'activo'         NO → Agregar 'activo'
        Botón texto normal             Botón texto 'X Cerrar'
        Footer se oculta              Footer se muestra
        
```
