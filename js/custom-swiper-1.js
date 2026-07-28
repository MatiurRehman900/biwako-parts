const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 0,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1200, // smooth crossfade duration in ms

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
