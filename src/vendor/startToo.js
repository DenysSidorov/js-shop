import slick from './slick';

// https://github.com/akiran/react-slick
// http://kenwheeler.github.io/slick/
var slickContainerSimilarGoods = $('.slickContainerSimilarGoods');
// console.log(slickContainerSimilarGoods);
if(slickContainerSimilarGoods.length) {
    $('.slickContainerSimilarGoods').slick({ // -----------------------slick slider #2---------------
        //dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                //breakpoint: 1024,
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