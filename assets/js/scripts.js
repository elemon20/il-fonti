

/* parallax move */

$(document).ready(function () {
 $('.parallax-move').parallaxContent();
});

$(document).ready(function () {

  $('.parallax-move').parallaxContent({
    "shift": 10, 
    "duration": 1.5,
    "gyroSensitivity": 30
  });

});

/* slide imagens*/

$( ".il-fonti_menu__list" ).hover(function() {
      $( this )
        .toggleClass( "il-fonti_menu__list_img" );
});

  /*.filter( ":odd" )
    .hide()
  .end()
  .filter( ":even" )*/
    
        /*.next()
          .stop( true, true )
          .slideToggle()*/



/* flecha arriba */

$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1000) {
      $("#toTop").addClass("show");
    } else {
      $("#toTop").removeClass("show");
    }
  });
});
