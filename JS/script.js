$(document).ready(function() {
    let carousel = $("#miCarrusel");
    let intervalo = 3000;
    carousel.carousel();

    function cambiarSlide() {
    carousel.carousel('next');
    }

    setInterval(cambiarSlide, intervalo);
});