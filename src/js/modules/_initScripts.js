(() => {
  document.addEventListener("DOMContentLoaded", () => {
    initLozad();
    initMobileMenu();
    // changeHero();
  });

  function initLozad() {
    const observer = lozad();
    observer.observe();
  }
})();
