export default function() {
    var countLM = 1;
    console.log('menu 0 ');
    // document.addEventListener("DOMContentLoaded", (e) => {
        console.log('menu 1');
        let navBurger = document.querySelector('.navBurger');
        let leftMenu = document.querySelector('.leftMenuSection');
        if (navBurger) {
            navBurger.addEventListener('click', (bEvent) => {
                bEvent.preventDefault();
                navBurger.classList.toggle('active');
                if (countLM % 2) {
                    leftMenu.classList.remove('hideLM');
                    leftMenu.classList.add('showLM');
                } else {
                    leftMenu.classList.remove('showLM');
                    leftMenu.classList.add('hideLM');
                }
                console.log('menu 2');
                countLM++;
            })
        }

        window.addEventListener("resize", (e) => {
            console.log('menu 3');
            if (document.body.clientWidth > 973 && navBurger && leftMenu) {
                navBurger.classList.remove('active');
                leftMenu.classList.add('showLM');
                leftMenu.classList.remove('hideLM');
                countLM = 1;
            } else if(navBurger && leftMenu){
                navBurger.classList.remove('active');
                leftMenu.classList.remove('showLM');
                leftMenu.classList.add('hideLM');
            }
        });
    // });
}