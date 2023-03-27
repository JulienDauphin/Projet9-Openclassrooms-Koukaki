'use strict';

const banner = document.querySelector('.banner');
const sections = document.querySelectorAll('section, footer');
const titles = document.querySelectorAll('h2, h3');
const transitionTime = 1000; // temps de transition en millisecondes

// Apparition de la première section dès chargement de la page
banner.style.top = '0';
banner.style.opacity = '1';

// Gestion des évènements au scroll
window.addEventListener('scroll', () => {
  const scrolledFromTop = window.scrollY + window.innerHeight;

  // Apparition des sections et des titres au scroll
  sections.forEach(section => {
    const distanceFromTop = section.offsetTop;
    if (scrolledFromTop >= distanceFromTop) {
      section.style.top = '0';
      section.style.opacity = '1';
    }
  });

  titles.forEach(title => {
    const distanceFromTop = title.offsetTop;
    if (scrolledFromTop >= distanceFromTop) {
      title.classList.add('mouvementTitre');
    }
  });
});