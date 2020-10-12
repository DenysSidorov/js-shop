export default function () {
  let countLM = 1;
  // document.addEventListener("DOMContentLoaded", (e) => {
  const navBurger = document.querySelector('.navBurger');
  const leftMenu = document.querySelector('.leftMenuSection');
  if (navBurger && leftMenu) {
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
      countLM++;
    });
  }

  window.addEventListener('resize', () => {
    if (document.body.clientWidth > 973 && navBurger && leftMenu) {
      navBurger.classList.remove('active');
      leftMenu.classList.add('showLM');
      leftMenu.classList.remove('hideLM');
      countLM = 1;
    } else if (navBurger && leftMenu) {
      navBurger.classList.remove('active');
      leftMenu.classList.remove('showLM');
      leftMenu.classList.add('hideLM');
    }
  });
  // });
}
