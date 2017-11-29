//$( document ).ready(function() {
//   Handler for .ready() called.
//});
//위에것과 같은 코드지만 위에것이 더 옛날것

/*===================================================
                      Wow
===================================================*/


$(function() {
  // Handler for .ready() called.
  new WOW().init();
});

/*===================================================
                   Magnific Popup
http://dimsemenov.com/plugins/magnific-popup/
===================================================*/

$(function() {
  $('#work').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery : {
        enabled : true
    }

    // other options
  });

});

//$('.gallery').each(function() {
//  $(this).magnificPopup({
//    delegate: 'a', // child items selector, by clicking on it popup will open
//    type: 'image',
//    gallery : {
//        enabled : true
//    }
//
//    // other options
//  });
//
//});

/*===================================================
                   OwlCarousel
http://owlcarousel2.github.io/OwlCarousel2/index.html
===================================================*/

$(function() {
  // Handler for .ready() called.
    $("#team-members").owlCarousel({
         items : 3,
         autoplay:true,
         smartSpeed: 100,
         loop: true,
         autoplayHoverPause:true
    });

});

/*==========================================
        Testimonials
http://owlcarousel2.github.io/OwlCarousel2/index.html
===========================================*/

