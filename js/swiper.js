const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 400,
    stopOnLastSlide: false,
    spaceBetween: 5,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });