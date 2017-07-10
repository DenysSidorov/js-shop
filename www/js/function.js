

// $(document).ready(function () {
window.onload = function () { // после загрузки страницы
    window.$ = $;

// https://github.com/jellekralt/Responsive-Tabs



    /* 1. Global! При ресайзе следить за отступом меню, т.к. оно fixed*/
    var menuSection = $('.js_search-height');
    var menuInfoSection = $('.js_search-margin');
    // if (menuSection.length && menuInfoSection.length) {
    if (menuSection.length && menuInfoSection.length) {

        setHeight();
        $(document).on('scroll', setHeight);
        $(window).resize(setHeight);
    }

    function setHeight() {
        var heightMenu = menuSection.height();
        //console.log(heightMenu, 'heightMenu');
        menuInfoSection.css('margin-top', heightMenu);
    }


    // 2. Кнопка подняться наверх
    var scrollUp = document.getElementById('scrollup'); // найти элемент

    scrollUp.onmouseover = function () { // добавить прозрачность
        scrollUp.style.opacity = 0.3;
        scrollUp.style.filter = 'alpha(opacity=30)';
    };

    scrollUp.onmouseout = function () { //убрать прозрачность
        scrollUp.style.opacity = 0.5;
        scrollUp.style.filter = 'alpha(opacity=50)';
    };

    scrollUp.onclick = function () { //обработка клика
        window.scrollTo(0, 0);
    };

    // show button

    window.onscroll = function () { // при скролле показывать и прятать блок
        if (window.pageYOffset > 0) {
            scrollUp.style.display = 'block';
        } else {
            scrollUp.style.display = 'none';
        }
    };

    // 3 Подняться наверх 2
    //window.scrollTo(x,y)
    var scrolled;
    var timer;

    var clickBtnToTop = document.getElementById('top');
    if(clickBtnToTop){
        clickBtnToTop.onclick = function () {
            scrolled = window.pageYOffset;
            //window.scrollTo(0,0);
            scrollToTop();
        }
    }

    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 50; //100 - скорость прокрутки
            timer = setTimeout(scrollToTop, 200);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }


    // console.log(a);
    // console.log(b);
//     if ($('.navBurger').length > 0) {
//         $('.navBurger').on('click', function (e) {
//             e.preventDefault();
//             $('body').toggleClass('nonScroll');
//             $(this).toggleClass('active')
//                 .parents('.headerSection')
//                 .find('.headerNavigation ul')
//                 .toggleClass('active');
//         });
//     }
//
//

//
//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();
//         var parallaxBlock = $('.contentGoodsSection').offset().top;
//         var i = 0;
//         if (scroll >= parallaxBlock - 200) {
//             $(".parallaxService .serviceItem").each(function () {
//                 var block = $(this);
//                 i += 500;
//                 setTimeout(function () {
//                     block.addClass('active');
//                 }, i);
//             });
//         }
//     })
}

// );
