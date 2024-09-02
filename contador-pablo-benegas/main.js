

//SCROLL TO TOP

$(document).ready(function () {
    // Selecciona todos los enlaces que comienzan con un "#"
    $('a[href^="#"]').on('click', function (event) {
        // Previene el comportamiento por defecto
        event.preventDefault();

        // Guarda el destino del enlace en una variable
        var target = this.hash;
        var $target = $(target);

        // Verifica si el destino existe antes de animar
        if ($target.length) {
            // Anima el scroll hacia el destino
            $('html, body').animate({
                scrollTop: $target.offset().top
            }, 800, function () {
                // Cambia el foco de la URL al destino sin añadirlo al historial del navegador
                if (history.pushState) {
                    history.pushState(null, null, target);
                } else {
                    window.location.hash = target;
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace (para móviles)
    menu.addEventListener('click', function(e) {
        if(e.target.tagName === 'A') {
            menu.classList.remove('active');
        }
    });

    // Ajustar menú en resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menu.classList.remove('active');
        }
    });
});