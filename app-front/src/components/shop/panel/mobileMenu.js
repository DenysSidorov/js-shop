export default function() {
    var countLM = 1;
    //console.log('menu 0 ');
    // document.addEventListener("DOMContentLoaded", (e) => {
        //console.log('menu 1');
        let navBurger = document.querySelector('.navBurger');
        let leftMenu = document.querySelector('.leftMenuSection');
        //console.log(navBurger, 'navBurgernavBurgernavBurgernavBurger');
        //console.log(leftMenu, 'leftMenuleftMenuleftMenuleftMenuleftMenu');
        if (navBurger) {
            //console.log('menu 2');
            navBurger.addEventListener('click', (bEvent) => {
                //console.log('menu 5');
                bEvent.preventDefault();
                navBurger.classList.toggle('active');
                if (countLM % 2) {
                    //console.log('menu 6');
                    leftMenu.classList.remove('hideLM');
                    leftMenu.classList.add('showLM');
                } else {
                    //console.log('menu 3');
                    leftMenu.classList.remove('showLM');
                    leftMenu.classList.add('hideLM');
                }
                //console.log('menu 4');
                countLM++;
            })
        }

        window.addEventListener("resize", (e) => {
            //console.log('menu 3');
            if (document.body.clientWidth > 973 && navBurger && leftMenu) {
                navBurger.classList.remove('active');
                leftMenu.classList.add('showLM');
                leftMenu.classList.remove('hideLM');
                countLM = 1;
                //console.log('menu 8');
            } else if(navBurger && leftMenu){
                //console.log('menu 9');
                navBurger.classList.remove('active');
                leftMenu.classList.remove('showLM');
                leftMenu.classList.add('hideLM');
            }
        });
     // });
}