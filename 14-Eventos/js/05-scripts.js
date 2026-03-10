window.addEventListener('scroll', () => {

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();


    // console.log(ubicacion);
    if (ubicacion.top < 723) {
        console.log('El elementp ya esta visible');
    } else {
        console.log('No esta aun');
    }
})



