document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const body = document.querySelector('body');
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        items: 1
    });
});
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});
  window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    var logo = document.querySelector(".logo img");
    var hamburger = document.querySelector(".hamburger");

    navbar.classList.toggle("sticky", window.scrollY > 0);
    navbar.style.backgroundColor = window.scrollY > 5 ? '#17a2b8' : 'transparent';
    logo.style.height = window.scrollY > 5 ? '60px' : '70px';
    logo.style.marginTop = window.scrollY > 5 ? '20px' : '10px';
    logo.style.marginBottom = window.scrollY > 5 ? '20px' : '10px';
});

});
