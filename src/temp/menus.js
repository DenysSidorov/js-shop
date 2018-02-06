// TODO need rewrite this file in react-component

// For mobile menu newRD
// var countLM = 1;
document.addEventListener('DOMContentLoaded', e => {
    //     let navBurger = document.querySelector('.navBurger');
    //     let leftMenu = document.querySelector('.leftMenuSection');
    //     if(navBurger){
    //        navBurger.addEventListener('click', (bEvent)=>{
    //            bEvent.preventDefault();
    //            navBurger.classList.toggle('active');
    //            if( countLM%2){
    //                leftMenu.classList.remove('hideLM');
    //                leftMenu.classList.add('showLM');
    //            } else{
    //                leftMenu.classList.remove('showLM');
    //                leftMenu.classList.add('hideLM');
    //            }
    //            countLM++;
    //        })
    //     }
    //
    //     window.addEventListener("resize", (e)=>{
    //         if (document.body.clientWidth > 973 && navBurger && leftMenu) {
    //             navBurger.classList.remove('active');
    //             leftMenu.classList.add('showLM');
    //             leftMenu.classList.remove('hideLM');
    //             countLM = 1
    //         } else {
    //             navBurger.classList.remove('active');
    //             leftMenu.classList.remove('showLM');
    //             leftMenu.classList.add('hideLM');
    //         }
    //     });

    // show/hide settings for desktop
    // const menuBtn = document.body.querySelector('.headerSection__appTools_settings');
    // const menuHeader = document.body.querySelector('.userProfileHeader');
    // let counOfClickMenu = 1;
    // menuBtn.addEventListener(
    //   'click',
    //   e => {
    //       console.log(3);
    //       if (e.target.className === 'headerSection__appTools_settings_logo') {
    //           if (counOfClickMenu % 2 > 0) {
    //               menuHeader.classList.remove('hideSettingsClass');
    //               menuHeader.classList.add('showSettingsClass');
    //               counOfClickMenu++;
    //               // console.log(counOfClickMenu, '-----------');
    //           } else {
    //               menuHeader.classList.remove('showSettingsClass');
    //               menuHeader.classList.add('hideSettingsClass');
    //               counOfClickMenu++;
    //               // console.log(counOfClickMenu, '+++++++++');
    //           }
    //       }
    //   },
    //   false,
    // );


    // // show/hide left menu for mobile
    // const menuBtnLeft = document.body.querySelector('.mob_header_leftMenu');
    // const menuBodyLeft = document.body.querySelector('.leftMenuContainer');
    // let counOfClickMenuLeft = 1;
    //
    // if(menuBtnLeft){
    //     menuBtnLeft.addEventListener(
    //       'click',
    //       e => {
    //           console.log(e.target, 'w1');
    //           // if (e.target.className === 'headerSection__appTools_settings_logo') {
    //           if (counOfClickMenuLeft % 2 > 0) {
    //               menuBodyLeft.classList.remove('hideLeftMenuClass');
    //               menuBodyLeft.classList.add('showLeftMenuClass');
    //               counOfClickMenuLeft++;
    //               // console.log(counOfClickMenuLeft, '-----------');
    //           } else {
    //               menuBodyLeft.classList.remove('showLeftMenuClass');
    //               menuBodyLeft.classList.add('hideLeftMenuClass');
    //               counOfClickMenuLeft++;
    //               // console.log(counOfClickMenuLeft, '+++++++++');
    //           }
    //           // }
    //       },
    //       false,
    //     );
    // }
    //
    //
    // // show/hide right menu for mobile
    // const menuBtnRight = document.body.querySelector('.mob_header_rightMenu');
    // const menuBodyRight = document.body.querySelector('.rightMenuContainer');
    // let counOfClickMenuRight = 1;
    //
    // if(menuBtnRight){
    //     menuBtnRight.addEventListener(
    //       'click',
    //       e => {
    //           console.log(e.target, 'right');
    //           // if (e.target.className === 'headerSection__appTools_settings_logo') {
    //           if (counOfClickMenuRight % 2 > 0) {
    //               menuBodyRight.classList.remove('hideRightMenuClass');
    //               menuBodyRight.classList.add('showRightMenuClass');
    //               counOfClickMenuRight++;
    //               // console.log(counOfClickMenuRight, '-----------');
    //           } else {
    //               menuBodyRight.classList.remove('showRightMenuClass');
    //               menuBodyRight.classList.add('hideRightMenuClass');
    //               counOfClickMenuRight++;
    //               // console.log(counOfClickMenuRight, '+++++++++');
    //           }
    //           // }
    //       },
    //       false,
    //     );
    // }


    if(window.innerWidth > 1024 && menuBodyLeft) {
        menuBodyLeft.classList.add('showLeftMenuClass');
    } else if(menuBodyLeft) {
        menuBodyLeft.classList.add('hideLeftMenuClass');
    }
    window.addEventListener('resize',(e)=>{
       let widthWindow = window.innerWidth;
       console.log(`Screen =  ${widthWindow}`);
       if(widthWindow > 1024) {
           menuBodyLeft && menuBodyLeft.classList.remove('hideLeftMenuClass');
           menuBodyLeft && menuBodyLeft.classList.add('showLeftMenuClass');
       } else {
           // menuBodyLeft.classList.remove('showLeftMenuClass');
           menuBodyLeft && menuBodyLeft.classList.add('hideLeftMenuClass');



           // menuBodyRight.classList.remove('showRightMenuClass');
           menuBodyRight && menuBodyRight.classList.add('hideRightMenuClass');
       }
    })

});
