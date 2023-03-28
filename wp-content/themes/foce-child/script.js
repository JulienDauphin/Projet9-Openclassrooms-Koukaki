(function( $ ) {
  'use strict';

  /* Constante(s) de durée */
  const transitionTime = 1500;
  const nuageGrandLeft = 1000;
  const nuagePetitLeft = 800;

  /* Apparition de la bannière au chargement du site */
  $(".banner").animate({
      'top': '0',
      'opacity':'1'
  }, transitionTime);

  /* Position du titre */
  var imageOrigine = $(".site-header").height() + ($(".banner").height() / 5);
  $(".banner-img").css({
      'top': imageOrigine
  });

/* Nuages */
$(".nuage-grand").css({
    'top': 1420,
    'left': nuageGrandLeft,
});
$(".nuage-petit").css({
    'top': 1603,
    'left': nuagePetitLeft
});


  /* Scroll */

  $(window).scroll(function() {

      // Calcule de la position de l'utilisateur
      var scrolledFromTop = $(window).scrollTop() + $(window).height();


      /* Parralax titre */
      var imageBot = imageOrigine + $('.banner-img').height() - $(".site-header").height();
      var videoVisible = $(".banner").height() - $(window).scrollTop() + $(".site-header").height();
      if (imageBot >= videoVisible - 22) {
          $(".banner-img").css({
              'bottom': $(".banner").height() - $(window).scrollTop()
          });
      }
      else {
          $(".banner-img").css({
              'top': imageOrigine + $(window).scrollTop()
          });
      }


      /* Apparition des sections */
      $("section, footer").each(function() {
          var distanceFromTop = $(this).offset().top;
          if (scrolledFromTop >= distanceFromTop) {
              $(this).animate({
                 'top': '0',
                 'opacity':'1'
              }, transitionTime);
          }
      });
      $("h2, h3").each(function() {
          var distanceFromTop = $(this).offset().top;
          if (scrolledFromTop >= distanceFromTop) {
              $(this).addClass('mouvementTitre');
          }
      });

/* Déplacements */

deplacementNuage($(".nuage-grand"), nuageGrandLeft, 3);
deplacementNuage($(".nuage-petit"), nuagePetitLeft, 3);

function deplacementNuage(nuage, nuageLeft, vitesse) {
    var nuageMAX = nuageLeft - 300; // changer le signe pour inverser la direction
    var distanceNuage;
    if (scrolledFromTop > nuage.offset().top /* + (nuage.height()/2) */) {
        distanceNuage = nuageLeft - ((scrolledFromTop - nuage.offset().top) / vitesse); // inverser la soustraction pour inverser la direction
        if (distanceNuage >= nuageMAX && distanceNuage < nuageLeft) { // inverser les signes pour inverser la direction
            nuage.css({
                'left': distanceNuage
            });
        }
    }
}





  });


  /* Swiper */
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 5,
    grabCursor: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 60,
        modifier: 1,
        slideShadows: false,
    }
});





})( jQuery );