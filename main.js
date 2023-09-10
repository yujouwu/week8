import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

  const swiper = new Swiper(
    '.swiper', {
        autoplay: {
          delay: 5000,
        },
         breakpoints: {
           768: {
             autoplay: {
               enabled: false,
             }
           }
         },
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
     }
  )

  const swiper2 = new Swiper('.swiper2', {
    direction: 'vertical',
    spaceBetween: 24,
    slidesPerView: 4,
    height: 1476,
    enabled: false, 
    breakpoints: {
      992: {
        direction: 'horizontal',
        slidesPerView: 3,
        height: null,
        enabled: true
      }
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    mousewheel: true,
  });