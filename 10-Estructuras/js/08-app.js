// Declaramos la variable "puntaje" con el valor 300
const puntaje = 300;


// Declaramos la función "punataje" (nótese que tiene un typo, debería ser "puntaje")
function punataje() {

    // Primera condición: ¿El puntaje es mayor o igual a 400?
    // 300 >= 400 es FALSO, este bloque no se ejecuta
    if (puntaje >= 400) {
        console.log('Excelente puntaje...');
        return; // Si se hubiera ejecutado, aquí la función terminaría
    }

    // Segunda condición: ¿El puntaje es mayor o igual a 300?
    // 300 >= 300 es VERDADERO, este bloque se ejecuta
    if (puntaje >= 300) {
        console.log('Buen puntaje...');
        return; // La función termina aquí, no sigue ejecutando código
    }

}

// Llamamos a la función para que se ejecute
punataje();

// Resultado en consola: "Buen puntaje..."



//* Los puntos clave de este código son:

// "return" dentro de un if sirve para detener la función en ese punto,
// evitando que siga evaluando las condiciones de abajo.

// Es una alternativa al else if, ya que si una condición se cumple
// y hace return, las demás simplemente no se ejecutan.

// También hay un pequeño error de tipeo en el nombre de la función,
// se llama "punataje" en lugar de "puntaje", aunque funciona porque
// tanto la declaración como la llamada usan el mismo nombre.




