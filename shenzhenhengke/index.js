$(function(){
    // 首页大图幻灯
    var banner = new Swiper('.banner', {
        autoplay: {
            delay: 5000,
        },
        loop: true,
        navigation: {
            prevEl: '.banner .swiper-button-prev',
            nextEl: '.banner .swiper-button-next'
        },
        pagination: {
            el: '.banner .swiper-pagination',
            clickable: true
        },
        on: {
            init: function (swiper) {
                var slide = this.slides.eq(0);
                slide.addClass('ani-slide');
            },
            transitionStart: function () {
                for (i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i);
                    slide.removeClass('ani-slide');
                }
            },
            transitionEnd: function () {
                var slide = this.slides.eq(this.activeIndex);
                slide.addClass('ani-slide');
            },
        }
    });
})