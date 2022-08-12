jQuery(document).ready(function() {

    // loader
    setTimeout(function() {
        $('.loaders').fadeOut();
    }, 300);


    $('.couners h2').counterUp({
        delay: 10,
        time: 2000
    });



    $('.navbar-nav .nav-link').click(function() {
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    });

    $(".nav a").on("click", function() {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });




    // owl-carousel
    $('.client-area .owl-carousel').owlCarousel({
        'items': 4,
        'autoplay': true,
        'loop': false,
        'dots': true,
        'nav': false,
        'pagination': true,
        'responsiveClass': true,
        'responsive': {
            0: {
                items: 2
            },
            767: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            },
            1920: {
                items: 4
            }
        }

    });


    // scroll-Top

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.scrolltotop').fadeIn();
        } else {
            $('.scrolltotop').fadeOut();
        }


    });

    $('.scrolltotop').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 1000);
        return false;
    });




});