(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-franchise-modal-open]'),
    closeMenuBtn: document.querySelector('[data-franchise-modal-close]'),
    menu: document.querySelector('[data-franchise-modal]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.menu-list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.menu.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
})();


// (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-franchise-modal-open]"),
//       closeModalBtn: document.querySelector("[data-franchise-modal-close]"),
//       modal: document.querySelector("[data-franchise-modal]"),
//     };
  
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
  
//     function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//     }
//   })();