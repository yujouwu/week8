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
  // slide 間距
  spaceBetween: 24,
  slidesPerView: 3,
  // Scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  // 使 swiper 可以使用滑鼠滾輪捲動
  mousewheel: true,

  });