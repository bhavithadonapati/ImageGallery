var Slider = new Swiper(".mySwiper", {
    loop: false,
    spaceBetween: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 5
        },
       
        480: {
          slidesPerView: 3,
          spaceBetween: 5
        },
        640: {
          slidesPerView: 6,
          spaceBetween: 5
        },
    }
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: Slider,
    },
  });
