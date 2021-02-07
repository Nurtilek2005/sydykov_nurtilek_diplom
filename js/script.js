//require = ../node_modules/swiper/swiper-bundle.min.js
var nav = document.querySelector(".nav");
var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("is-active");
  });

// let swiper = new Swiper('.swiper-container', {
  
// })