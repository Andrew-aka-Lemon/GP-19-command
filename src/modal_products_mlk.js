(() => {
  const refs = {
    openModalBtn: document.querySelector('.btn__products-mlk'),
    closeModalBtn: document.querySelector('.btn__products-mlk-close'),
    modal: document.querySelector('.modal__products-mlk'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('prevent-scroll');
  }
})();
