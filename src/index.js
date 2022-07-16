(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-menu__button'),
    closeMenuBtn: document.querySelector('.menu-close-btn'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
      refs.menu.classList.toggle('mob-menu--active');
      refs.menu.classList.toggle('mob-menu--hide');
    refs.body.classList.toggle('prevent-scroll');
  }
})();