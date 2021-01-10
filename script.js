new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
      spaceBetween: 10,
      loop:true,
      centeredSlides:true,
      breakpoints: {
        900:{
          slidesPerView: 3,
          spaceBetween: 30,
         },
       1400: {
        slidesPerView: 5,
        spaceBetween: 30,
       }
      }
})