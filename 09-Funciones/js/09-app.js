const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id: ${id}`)
    },

    pausar: function(){
        console.log(`pausando...`)
    },

     borrar: function(){
        console.log(`Borrado cancion el id: ${id}`)
    },
     crearplaylist: function(nombre){
        console.log(`Creando playlist de ${nombre}`)
    },
     reproducirplaylist: function(nombre){
        console.log(`Reproduciendo playlist  de ${nombre}`)
    },

}

reproductor.reproducir(98);
reproductor.pausar();
reproductor.crearplaylist('Kpop');
reproductor.reproducirplaylist('Baladas');



