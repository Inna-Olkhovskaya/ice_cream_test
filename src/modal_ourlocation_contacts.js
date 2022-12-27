(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-location-modal-open]'),
    closeMenuBtn: document.querySelector('[data-location-modal-close]'),
    menu: document.querySelector('[data-location-modal]'),
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


