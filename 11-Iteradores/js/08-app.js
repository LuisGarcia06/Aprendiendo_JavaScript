// ─────────────────────────────────────────────────────────────
// Los objetos NO se pueden recorrer directamente con for...of
// como sí se hace con los arreglos.
// Para recorrer objetos existen dos opciones principales:
//   1. for...in        → da acceso a las LLAVES del objeto
//   2. Object.entries  → convierte el objeto en un arreglo
//                        de pares [llave, valor]
// ─────────────────────────────────────────────────────────────

const carro = {
    modelo: 'camaro',
    tipo:   'deportivo',
    año:    '2020'
};

// ─────────────────────────────────────────────────────────────
// OPCIÓN 1: for...in
// En cada vuelta, "objetos" es el NOMBRE de la propiedad (la llave):
//   vuelta 1 → objetos = 'modelo'
//   vuelta 2 → objetos = 'tipo'
//   vuelta 3 → objetos = 'año'
//
// Para obtener el VALOR usamos carro[objetos] (notación de corchetes),
// porque carro.objetos buscaría una propiedad literal llamada "objetos"
// y devolvería undefined.
// ─────────────────────────────────────────────────────────────
// for (let objetos in carro) {
//     console.log(`${carro[objetos]}`);
// }


// ─────────────────────────────────────────────────────────────
// OPCIÓN 2: Object.entries() + for...of
//
// Object.entries(carro) transforma el objeto en un arreglo así:
// [
//   ['modelo', 'camaro'],
//   ['tipo',   'deportivo'],
//   ['año',    '2020']
// ]
//
// Como ahora es un arreglo, ya podemos usar for...of.
//
// [llave, valor] → es DESTRUCTURING: en lugar de recibir
// el par completo ['modelo', 'camaro'] en una sola variable,
// lo desempacamos directamente en dos variables separadas.
// Sin destructuring sería así:
//   for (let entrada of Object.entries(carro))
//   entrada[0] → llave, entrada[1] → valor  (menos legible)
// ─────────────────────────────────────────────────────────────
for (let [llave, valor] of Object.entries(carro)) {
    console.log(valor);       // imprime solo el valor
    // console.log(llave);    // imprimiría solo la llave
    // console.log(`${llave}: ${valor}`); // imprimiría ambos: "modelo: camaro"
}

// SALIDA:
// camaro
// deportivo
// 2020

// ─────────────────────────────────────────────────────────────
// RESUMEN: ¿cuándo usar cada uno?
//
//   for...in        → cuando solo necesitas las llaves del objeto
//   Object.entries  → cuando necesitas llaves Y valores a la vez,
//                     con una sintaxis más moderna y clara
// ─────────────────────────────────────────────────────────────



