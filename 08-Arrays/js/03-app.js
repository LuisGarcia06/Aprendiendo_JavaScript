// Se declara un array constante llamado 'meses' que contiene los nombres de los primeros 6 meses del año
const meses = ['Enero', 'Febrero','Marzo','Abril', 'Mayo', 'Junio'];

// Muestra el array en formato de tabla en la consola, facilitando su visualización
console.table(meses);

// Imprime en consola la cantidad de elementos que contiene el array (en este caso: 6)
console.log(meses.length);

// Bucle for que recorre cada elemento del array desde el índice 0 hasta el último
for(let i = 0; i < meses.length; i++){
    // Imprime en consola el nombre de cada mes, uno por línea
    console.log(meses[i])
}