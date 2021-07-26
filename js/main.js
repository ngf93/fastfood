/* current year */
// let now = new Date();
// let cur_year = now.getFullYear();
// document.querySelector('#year').innerHTML = cur_year;


const swiper = new Swiper('.swiper-4', {
  slidesPerView: 4,
  spaceBetween: 16,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});