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