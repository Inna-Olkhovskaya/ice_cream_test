// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//  const mobileMenuRef = document.querySelector("[data-menu]");
//   menuBtnRef.addEventListener("click", () => {
//      const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;
//     menuBtnRef.classList.toggle("is-open");
//  menuBtnRef.setAttribute("aria-expanded", !expanded);

//  mobileMenuRef.classList.toggle("is-open");
// });
// })();




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
//       openModalBtn: document.querySelector("[data-modal]"),
//       closeModalBtn: document.querySelector("[data-modal-close]"),
//       modal: document.querySelector("[data-modal]"),
//     };
  
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
  
//     function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//     }
//   })();