(() => {
    const refs = {
      openModalBtn: document.querySelector("[products2-modal-open]"),
      closeModalBtn: document.querySelector("[products2-modal-close]"),
      modal: document.querySelector("[data-modal-products2]"),
      body: document.querySelector('body')
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("prevent-scroll");
    }
  })();