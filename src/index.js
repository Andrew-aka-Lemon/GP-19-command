// Maxim Bogdan - script for header mobile menu/////
(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-menu__button'),
    closeMenuBtn: document.querySelector('.menu-close-btn'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body')
    // header: document.querySelector('header')
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('mob-menu--hide');
    refs.body.classList.toggle('prevent-scroll');
    // refs.header.classList.toggle('prevent-scroll');
  }
})();

///////////////////EL - скрипт для головної модалки Buy Now//////////////////////

const refs = {
    openModalBtn: document.querySelector(".modal-button"),
    closeModalBtn: document.querySelector(".close-modal-button-buynow"),
    backdrop: document.querySelector(".backdrop-buynow"),
  };
  
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  
  refs.backdrop.addEventListener('click', logBackdropClick);
  
  function toggleModal() {
    refs.backdrop.classList.toggle('is-hidden');
    refs.ищвн.classList.toggle('no-scroll');

  }
