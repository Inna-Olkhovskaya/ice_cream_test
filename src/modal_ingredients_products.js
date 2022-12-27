(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-ingredients-open]"),
      closeModalBtn: document.querySelector("[data-modal-ingredients-close]"),
      modal: document.querySelector("[data-modal-ingredients]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-ingredients-icecoffee-open]"),
      closeModalBtn: document.querySelector("[data-modal-ingredients-icecoffee-close]"),
      modal: document.querySelector("[data-modal-ingredients-icecoffee]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-ingredients-milkshakes-open]"),
      closeModalBtn: document.querySelector("[data-modal-ingredients-milkshakes-close]"),
      modal: document.querySelector("[data-modal-ingredients-milkshakes]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  