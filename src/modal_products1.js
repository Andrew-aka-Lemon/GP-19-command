(() => {
    const refs = {
      openModalBtn: document.querySelector('.btn__products-ic'),
      closeModalBtn: document.querySelector('.btn__products-ic-close'),
      modal: document.querySelector('.modal__products-ic'),
      body: document.querySelector('body')
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("prevent-scroll");
    }
  })();