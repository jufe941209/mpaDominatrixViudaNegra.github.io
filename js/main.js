(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Sticky Navbar
    $(window).scroll(function () {
        var navbar = $('.navbar');
        var stickyTopClass = 'sticky-top shadow-sm';
        var fixedColor = '#BA2505'; // Color for fixed state
        var defaultColor = ''; // Default background color (remove if not set in CSS)
      
        if ($(this).scrollTop() > 45) {
          navbar.addClass(stickyTopClass);
          navbar.css('background-color', fixedColor); // Set background color to fixed color
        } else {
          navbar.removeClass(stickyTopClass);
          navbar.css('background-color', defaultColor); // Set background color to default
        }
      });

    // International Tour carousel
    $(".InternationalTour-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // packages carousel
    $(".packages-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.back-to-top').fadeIn(300); // Replaced 'slow' with 300ms
    } else {
      $('.back-to-top').fadeOut(300); // Replaced 'slow' with 300ms
    }
  });


 

})(jQuery);


// Llena el formulario
// JavaScript para mostrar/ocultar el formulario al hacer clic en el botón
document.getElementById("openFormBtn").addEventListener("click", function() {
    var formContainer = document.querySelector(".form-container");
    if (formContainer.style.display === "none") {
        formContainer.style.display = "block";
        formContainer.innerHTML = `
            <h2>Formulario de Solicitud de Sesión</h2>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf0xyhl4ZdfquSP5OGg8rBl8AL7D7IyDE-37FLTyZ2hJhU0Xg/viewform" frameborder="0" marginheight="0" marginwidth="0">Cargando...</iframe>
        `;
    } else {
        formContainer.style.display = "none";
        formContainer.innerHTML = ""; // Limpiar el contenido si se oculta
    }
});

<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.destination-img');

    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            image.classList.add('hover');
        });

        image.addEventListener('mouseout', function() {
            image.classList.remove('hover');
        });
    });
});
=======
>>>>>>> 1c1f584 (Tercera actualización, se agrega paginas en construcción, se mejora todos los procesos, se cambian reglas y se recomienda disminucion de pestañas para una pagina mas funcional)
