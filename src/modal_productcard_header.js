(() => {
    const refs = {
      openModalBtn: document.querySelectorAll("[data-modal-productcard-open]"),
      closeModalBtn: document.querySelector("[data-modal-productcard-close]"),
      modal: document.querySelector("[data-modal-productcard]"),
    };
  
    refs.openModalBtn.forEach(function (element) {
      element.addEventListener("click", toggleModal);
    });

    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
