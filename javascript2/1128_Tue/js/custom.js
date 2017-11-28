//$( document ).ready(function() {
//   Handler for .ready() called.
//});
//위에것과 같은 코드지만 위에것이 더 옛날것

/*===================================================
                      Wow
===================================================*/


$(function() {
  // Handler for .ready() called.
  new WOW().init()
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
                   OwlCarousel2
===================================================*/

$(function() {
  // Handler for .ready() called.
    $(".owl-carousel").owlCarousel({
         item : 3,
    });

});
