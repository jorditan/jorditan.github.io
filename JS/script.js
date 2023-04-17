$(document).ready(function() {
    $('.carousel').carousel();

    $('.carousel-control-prev, .carousel-control-next').click(function() {
    $('.carousel').carousel('pause');
    });

    $('.carousel').on('slid.bs.carousel', function() {
    $('.carousel').carousel('cycle');
    });

    setInterval(function() {
    $('.carousel').carousel('next');
    }, 3000);
});