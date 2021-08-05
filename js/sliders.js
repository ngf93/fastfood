var swiper1 = new Swiper('.swiper-popular', {
    slidesPerView: 2,
    spaceBetween: 4,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: false,
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 4,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 16,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
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
        // when window width is >= 992px
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


if (window.matchMedia("(max-width: 767px)").matches) {
    var swiper5 = new Swiper(".vacancy-box", {
        slidesPerView: "auto",
        spaceBetween: 8,
        freeMode: true,
        breakpoints: {
            576: {
                spaceBetween: 16,
            }
        }
    });
}
var swiper6 = new Swiper(".vacancy-swiper", {
    slidesPerView: "auto",
    spaceBetween: 8,
    freeMode: true,
    breakpoints: {
        576: {
            spaceBetween: 16,
        }
    }
});