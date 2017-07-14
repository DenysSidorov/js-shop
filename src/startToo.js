import slick from './vendor/slick';


//TODO поменять на react
// https://github.com/akiran/react-slick
// http://kenwheeler.github.io/slick/
var slickContainerSimilarGoods = $('.slickContainerSimilarGoods');

if(slickContainerSimilarGoods.length) {
    $('.slickContainerSimilarGoods').slick({ // -----------------------slick slider #2---------------
        //dots: true,
        infinite: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    //dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });//все дети этого дива станут слайдами// -----------------------slick slider #2---------------
}