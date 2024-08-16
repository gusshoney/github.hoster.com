document.addEventListener('DOMContentLoaded', function() {
    var botonInfo = document.querySelector('.botonInfo');
    var infoServer = document.querySelector('.infoServer');

    botonInfo.addEventListener('click', function() {
        infoServer.classList.add('show');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var botonInfo = document.querySelector('.botonInfo');
    var botonSalir = document.querySelector('.botonSalir');

    botonInfo.addEventListener('click', function() {
        botonSalir.classList.add('show2');
    });
});

