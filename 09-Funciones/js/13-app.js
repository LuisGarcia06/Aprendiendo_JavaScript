// OBJETO con métodos usando arrow functions
// Simula un reproductor de música
const reproductor = {
    // Método que recibe un ID de canción como parámetro
    reproducir: id => {
        console.log(`Reproduciendo cancion con el id: ${id}`)
    },

    // Método sin parámetros
    pausar: () => {
        console.log(`pausando...`)
    },

    // ⚠️ ERROR: 'id' no está definido aquí
    // Debería recibir 'id' como parámetro: borrar: (id) => {...}
    borrar: ()=>{
        console.log(`Borrado cancion el id: ${id}`)
    },

    // Método que recibe el nombre de la playlist
    crearplaylist:(nombre) => {
        console.log(`Creando playlist de ${nombre}`)
    },

    // Método que recibe el nombre de la playlist
    reproducirplaylist: (nombre) => {
        console.log(`Reproduciendo playlist  de ${nombre}`)
    },

}

// Llamadas a los métodos del objeto
reproductor.reproducir(98);              // Imprime: Reproduciendo cancion con el id: 98
reproductor.pausar();                    // Imprime: pausando...
reproductor.crearplaylist('Kpop');       // Imprime: Creando playlist de Kpop
reproductor.reproducirplaylist('Baladas'); // Imprime: Reproduciendo playlist de Baladas