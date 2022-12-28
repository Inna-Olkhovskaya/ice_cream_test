// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('[data-location-modal-open]'),
//     closeMenuBtn: document.querySelector('[data-location-modal-close]'),
//     menu: document.querySelector('[data-location-modal]'),
//     body: document.querySelector('body'),
//     menuList: document.querySelector('.menu-list'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);
//   refs.menuList.addEventListener('click', removeMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle('is-hidden');
//     refs.body.classList.toggle('no-scroll');
//   }

//   function removeMenu() {
//     refs.menu.classList.add('is-hidden');
//     refs.body.classList.remove('no-scroll');
//   }
// })();

(() => {
  const refs = {
    Ouvrir: document.querySelector('[data-location-modal-open]'),
    Fermer: document.querySelector('[data-location-modal-close]'),
    menue: document.querySelector('[data-location-modal]'),
    body: document.querySelector('body'),
    menueListe: document.querySelector('.menu-list'),
  };

  refs.Ouvrir.addEventListener('click', toggleMenu);
  refs.Fermer.addEventListener('click', toggleMenu);
  refs.menueListe.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menue.classList.toggle('is-hidden');
    refs.corps.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.menue.classList.add('is-hidden');
    refs.corps.classList.remove('no-scroll');
  }
})();




