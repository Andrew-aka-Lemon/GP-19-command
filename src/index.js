// Margo-js script for modal how its made
(() => {
  const mobileMenu = document.querySelector('.js-about-menu');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// Maxim Bogdan - script for header mobile menu/////
(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-menu__button'),
    closeMenuBtn: document.querySelector('.menu-close-btn'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
    HeaderMenuOpen: document.querySelector('.header-menu__button'),
    HeaderModalBtn: document.querySelector('.modal-button-header')
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('mob-menu--hide');
    refs.body.classList.toggle('prevent-scroll');
    refs.HeaderMenuOpen.classList.toggle('hidden')
    refs.HeaderModalBtn.classList.toggle('hidden')
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

