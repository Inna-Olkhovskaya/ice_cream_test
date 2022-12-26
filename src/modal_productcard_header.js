(() => {
    const refs = {
      openWindowBtn: document.querySelector("[data-window-open]"),
      closeWindowBtn: document.querySelector("[data-window-close]"),
      window: document.querySelector("[data-window]"),
    };
  
    refs.openWindowBtn.addEventListener("click", toggleWindow);
    refs.closeWindowBtn.addEventListener("click", toggleWindow);
  
    function toggleWindow() {
      refs.window.classList.toggle("is-hidden");
    }
  })();