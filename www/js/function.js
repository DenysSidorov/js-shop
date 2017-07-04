console.log(444);


/*JS part
 Допустим есть массив строк. Все строки содержар одинаковые символы, кроме одной строки.
 Надо написать функцию, которая будет принимать этот массив и находить это слово.
 Строки могут содержать пробелы, их нужно игнорировать, только non-spaces символы имеют значение. Гарантировано, что массив будет содержать больше 3 строк
 Примр:
 findUniq([ 'abc', 'acb', 'bac', 'test', 'bca', 'cab', 'cba' ]) === 'test'
 */
function findUniq(initArr) {
    // Каждое слово массива очищаем от пробелов
    var arr = initArr.map(word => {
        return (Array.prototype.filter.call(word, (elem) => {
            return elem !== ' ' ? elem : null
        })).join('')
    });

    // Текущий индекс слова в массиве (отчет начаинаем со второго слова)
    var wordIndex = 1;
    // Кол-во символов в каждом слове
    var countSymb = 0;
    var result = '';
    // Отдельная проверка для первого слова
    var countFirstWord = 0;

    // Пробегаемся по массиву
    arr.forEach((word, ind) => {
            // Сбрасываем счетчик букв в каждом слове
            // Проверка за выход переделы массива
            if (wordIndex < arr.length) {
                countSymb = 0;
                // Пробегаемся по буквам
                for (var currentSymbol of word) {
                    if (arr[wordIndex].includes(currentSymbol))
                        countSymb++;
                }

                //  Сравниваем длину слова с кол-вом найденных символов

                if (arr[wordIndex].length === countSymb) {

                    wordIndex++;
                } else {
                    result = arr[wordIndex];
                }

            }
        }
    )

    // Если результат равен второму элементу делаем дополнительную проверку проверку
    if (result === arr[1]) {

        // Внутренний счетчик первого слова
        var countFirst = 0;
        Array.prototype.forEach.call(arr[0], (symb) => {
            if (arr[2].includes(symb)) {
                countFirst++;
            }
        });

        // Если первое слово равно третьему (по нашим условиям)
        if (countFirst === arr[2].length) {
            result = arr[1]; // Результатом будет второе слово
        } else {
            // Если же алгоритм не нашел слово и оно не совпадает с третьем
            result = arr[0];
        }
    }
    return result;
}

console.log(findUniq([ 'abc', 'acb', 'bac', 'test', 'bca', 'cab', 'cba' ]) === 'test'); // В середине
console.log(findUniq([ 'test', 'acb', 'bac', 'bac', 'bca', 'cab', 'cba' ]) === 'test'); // В начале
console.log(findUniq([ 'abc', 'acb', 'bac', 'bca', 'bca', 'cab', 'test' ]) === 'test'); // В конце
console.log(findUniq([ 'abc', 'acb', 'bac', 'bca', 'bca', 'cab', 'aaa' ]) === 'test'); // Нет искомого элемента
console.log(findUniq([ 'ab c', 'ac b', 'ba c', 't e s t', 'bc  a', 'c a b', 'cb a' ]) === 'test'); // Пробелы в тесте
console.log(findUniq([ 'a bc', 'a cb', 'b ac', 'test', 'bca', 'cab', 'c   ba' ]) === 'test'); // Пробелы в словах
console.log(findUniq([ 'ab c', 'acb', 'ba  c', 'tes    t', 'b  ca', 'ca  b', 'c     ba' ]) === 'test');  // Пробелы в словах



// $(document).ready(function () {
window.onload = function () { // после загрузки страницы
    window.$ = $;

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

    // 3 Подняться нверх 2
    //window.scrollTo(x,y)
    var scrolled;
    var timer;

    document.getElementById('top').onclick = function () {
        scrolled = window.pageYOffset;
        //window.scrollTo(0,0);
        scrollToTop();
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
