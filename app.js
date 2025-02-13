const video = document.querySelector('.video-background');

const swiperText = new Swiper('.swiper', {
    speed: 1600,
    mousewheel: {
        enabled: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    }
});