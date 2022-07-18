// Maxim Bogdan - script for header mobile menu and buy-now modal window/////
(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-menu__button'),
    closeMenuBtn: document.querySelector('.menu-close-btn'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
    HeaderMenuOpen: document.querySelector('.header-menu__button'),
    HeaderModalBtn: document.querySelector('.modal-button-header'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('mob-menu--hide');
    refs.body.classList.toggle('prevent-scroll');
    refs.HeaderMenuOpen.classList.toggle('hidden');
    refs.HeaderModalBtn.classList.toggle('hidden');
  }

  const modalBtn = {
    openModalBtn: document.querySelector('.modal-open'),
    mobOpenModalBtn: document.querySelector('.modal-open-mob'),
    closeModalBtn: document.querySelector('.close-modal-button-buynow'),
    backdrop: document.querySelector('.backdrop-buynow'),
    body: document.querySelector('body'),
  };

  modalBtn.openModalBtn.addEventListener('click', toggleModal);
  modalBtn.mobOpenModalBtn.addEventListener('click', handleModalButton);
  modalBtn.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    modalBtn.backdrop.classList.toggle('hidden');
    modalBtn.body.classList.toggle('no-scroll');
  }

  function handleModalButton() {
    toggleModal();
    toggleMenu();
  }
})();

// Margo-js script for modal how its made
(() => {
  const refs = {
    openModalBtn: document.querySelector('.button-about-open'),
    closeModalBtn: document.querySelector('.js-close-button'),
    modal: document.querySelector('.about-menu'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('hidden');
    refs.body.classList.toggle('prevent-scroll');
  }
})();

///////////////////EL - скрипт для головної модалки Buy Now//////////////////////

// const refs = {
//     openModalBtn: document.querySelector(".modal-button-header"),
//     closeModalBtn: document.querySelector(".close-modal-button-buynow"),
//     backdrop: document.querySelector(".backdrop-buynow"),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   refs.backdrop.addEventListener('click', logBackdropClick);

//   function toggleModal() {
//     refs.backdrop.classList.toggle('hidden');
//     refs.body.classList.toggle('no-scroll');
//   }

// Скритп Саші для Contacts
(() => {
  const refs = {
    openModalBtn: document.querySelector('.contacts__button'),
    closeModalBtn: document.querySelector('.contacts-modal-close-loc__button'),
    backdrop: document.querySelector('.backdrop-contacts-loc'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.backdrop.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('.contacts__button__script'),
    closeModalBtn: document.querySelector('.contacts-modal-close-fr__button'),
    backdrop: document.querySelector('.backdrop-contacts-fr'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.backdrop.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
