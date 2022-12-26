(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-ice-open]"),
    closeModalBtn: document.querySelector("[data-modal-ice-close]"),
    modal: document.querySelector("[data-modal-ice]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();