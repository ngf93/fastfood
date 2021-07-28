var swiper1 = new Swiper('.swiper-4', {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    allowTouchMove: false,
});
  
var swiper2 = new Swiper('.swiper-3', {
    slidesPerView: 3,
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});