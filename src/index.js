///////Counter for hero & advantages./////////////////
const counterAnim = (qSelector, start = 0, end, duration = 3000) => {
 const target = document.querySelector(qSelector);
 let startTimestamp = null;
 const step = (timestamp) => {
  if (!startTimestamp) startTimestamp = timestamp;
  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  target.innerText = Math.floor(progress * (end - start) + start);
  if (progress < 1) {
   window.requestAnimationFrame(step);
  }
 };
 window.requestAnimationFrame(step);
};
//#endregion - end of - number counter animation

document.addEventListener("DOMContentLoaded", () => {
 counterAnim("#count1", 0, 16, 3000);
 counterAnim("#count2", 0, 23, 3000);
 counterAnim("#count3", 0, 721, 3000);
 counterAnim("#count4", 0, 16, 3000);
 counterAnim("#count5", 0, 84, 3000);
 
});

//  Maxim Bogdan - script for header mobile menu and buy-now modal window
(() => {
  const refs = {
    toggleMenuBtn: document.querySelector('.nav-icon'),
    closeMenuBtn: document.querySelector('.menu-close-btn'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
    // HeaderMenuOpen: document.querySelector('.nav-icon1'),
    HeaderModalBtn: document.querySelector('.hide-mob'),
    mobMenuLink: document.querySelectorAll('.mob-menu__link'),
  };

  refs.toggleMenuBtn.addEventListener('click', toggleMenu)

  for (let index = 0; index < refs.mobMenuLink.length; index++) {
    refs.mobMenuLink[index].addEventListener('click', toggleMenu);
  }

  function toggleMenu() {
    refs.toggleMenuBtn.classList.toggle('open');
    refs.menu.classList.toggle('mob-menu--hide');
    refs.body.classList.toggle('prevent-scroll');
    // refs.HeaderMenuOpen.classList.toggle('hidden');
    refs.HeaderModalBtn.classList.toggle('hide');
  }

  const modalBtn = {
    openModalBtn: document.querySelector('.modal-open'),
    productsMobOpenModalBtn: document.querySelectorAll('.modal-product-mob'),
    mobOpenModalBtn: document.querySelector('.modal-open-mob'),
    closeModalBtn: document.querySelector('.close-modal-button-buynow'),
    backdrop: document.querySelector('.backdrop-buynow'),
    body: document.querySelector('body'),
  };

  for (
    let index = 0;
    index < modalBtn.productsMobOpenModalBtn.length;
    index++
  ) {
    modalBtn.productsMobOpenModalBtn[index].addEventListener(
      'click',
      toggleModal
    );
  }

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
    refs.modal.classList.toggle('its-hidden');
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

///////////////////////Lemon - new cool скрипт для Hero mini-modal

let openModal = document.querySelector('.milk-bucket__button');
let bodyModal = document.querySelector('.modal-eco-milk');
const toggleMenu = () => {
  bodyModal.classList.toggle('is-hidden');
  bodyModal.classList.toggle('not-hidden');
};
openModal.addEventListener('click', e => {
  e.stopPropagation();
  toggleMenu();
});
document.addEventListener('click', e => {
  let target = e.target;
  let its_bodyModal = target == bodyModal || bodyModal.contains(target);
  let its_openModal = target == openModal;
  let bodyModal_is_active = bodyModal.classList.contains('not-hidden');
  if (!its_bodyModal && !its_openModal && bodyModal_is_active) {
    toggleMenu();
  }
})();

