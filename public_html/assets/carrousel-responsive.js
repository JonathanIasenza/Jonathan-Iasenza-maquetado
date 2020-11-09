window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel-list'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel-indicadores',
        arrows: {
            prev: '.carousel-back',
            next: '.carousel-next'
        }, responsive: [
         {
                // screens greater than >= 640px
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    duration: 0.25
                }
            },{
                // screens greater than >= 900px
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    duration: 0.25
                }
            },{
                // screens greater than >= 1224px
                breakpoint: 1224,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    duration: 0.25
                }
            }
        ]
    });
});
