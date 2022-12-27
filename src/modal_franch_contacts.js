(() => {
  const refs = {
    ouvrirMenu: document.querySelector('[data-franchise-modal-open]'),
    fermerMenu: document.querySelector('[data-franchise-modal-close]'),
    menues: document.querySelector('[data-franchise-modal]'),
    corps: document.querySelector('body'),
    menuesLists: document.querySelector('.menu-list'),
  };

  refs.ouvrirMenu.addEventListener('click', toggleMenu);
  refs. fermerMenu.addEventListener('click', toggleMenu);
  refs.menuesLists.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menues.classList.toggle('is-hidden');
    refs.corps.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.menues.classList.add('is-hidden');
    refs.corps.classList.remove('no-scroll');
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