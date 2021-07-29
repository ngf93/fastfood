var swiper1 = new Swiper('.swiper-4', {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 1200px
        1200: {
            slidesPerView: 4,
            spaceBetween: 16,
        }
    }
});
  
var swiper2 = new Swiper('.swiper-3', {
    slidesPerView: 3,
    spaceBetween: 16,
});

var swiper3 = new Swiper('.swiper-reviews', {
    slidesPerView: 2,
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 993px
        993: {
            slidesPerView: 3,
            spaceBetween: 16,
        }
    }
});
