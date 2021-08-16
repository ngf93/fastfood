var swiper1 = new Swiper('.swiper-4', {
    slidesPerView: 2,
    spaceBetween: 4,
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 4,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 16,
        }
    }
});
  
var swiper2 = new Swiper('.swiper-offers', {
    slidesPerView: 2,
    spaceBetween: 4,
    breakpoints: {
        // when window width is >= 992px
        767: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 16,
        }
    }
});

var swiper3 = new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 16,
        }
    }
});

var swiper4 = new Swiper('.swiper-about', {
    slidesPerView: 2,
    spaceBetween: 4,
});

var swiper5 = new Swiper(".soops", {
    slidesPerView: "auto",
    spaceBetween: 0,
    freeMode: true,
});

var swiper6 = new Swiper(".subcategories", {
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: true,
});