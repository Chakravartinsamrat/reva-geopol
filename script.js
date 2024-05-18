document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const body = document.querySelector('body');
  
  hamburger.addEventListener('click', () => {
      navbar.classList.toggle('active');
      navLinks.classList.toggle('active');
      
      // Toggle body scroll
      if (navLinks.classList.contains('active')) {
          body.style.overflow = 'hidden';
      } else {
          body.style.overflow = '';
      }
  });
});
