(function( $ ) {
  'use strict';

  /* Constante(s) de durée */
  const transitionTime = 1500;

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

  });

})( jQuery );