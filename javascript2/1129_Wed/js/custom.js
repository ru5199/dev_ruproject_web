/*==============================
        WOW
================================*/
$(function() {
    // Handler for .ready() called.
    new WOW().init();

});
/*==========================================
        Magnific Popup
http://dimsemenov.com/plugins/magnific-popup/
===========================================*/
$(function() {
    // Handler for .ready() called.
    $('#work').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery:{
          enabled: true
      }
      // other options
    });

});

/*==========================================
        Owl Carousel
http://owlcarousel2.github.io/OwlCarousel2/index.html
===========================================*/
$(function() {
    // Handler for .ready() called.
    $("#team-members").owlCarousel({
        items : 3,
        autoplay:true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause:true
    });

});

/*==========================================
        Testimonials
http://owlcarousel2.github.io/OwlCarousel2/index.html
===========================================*/
$(function() {
    // Handler for .ready() called.
    $("#customers-testimonials").owlCarousel({
        items : 1,
        autoplay:true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause:true
    });

});

/*==========================================
        Count Up

===========================================*/

$(function() {
    // Handler for .ready() called.
    $('.counter').counterUp({
        delay : 10,
        time : 2000
    });

});

/*==========================================
        Clients
http://owlcarousel2.github.io/OwlCarousel2/index.html
===========================================*/

$(function() {
    // Handler for .ready() called.
    $("#clients-list").owlCarousel({
        items : 4,
        autoplay:true,
        smartSpeed: 400,
        loop: true,
        autoplayHoverPause:true
    });
});