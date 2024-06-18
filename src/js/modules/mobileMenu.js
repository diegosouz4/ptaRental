function initMobileMenu() {
  const menu = {
    wrapper: document.querySelector(".header [data-menu='wrapper']"),
    btn: document.querySelector(".header [data-menu='btn']"),
  };

  if (!menu.btn || !menu.wrapper) return;

  menu.btn.addEventListener("click", handleClick);

  function handleClick(e) {
    e.preventDefault();
    const { currentTarget } = e;

    console.log("botão");

    if (currentTarget.classList.contains("show")) {
      currentTarget.classList.remove("show");

      menu.wrapper.classList.remove("show");
      setTimeout(() => {
        menu.wrapper.style.display = "none";
      }, 500);
    } else {
      currentTarget.classList.add("show");

      menu.wrapper.style.display = "block";
      setTimeout(() => {
        menu.wrapper.classList.add("show");
      }, 500);
    }
  }

  window.addEventListener("resize", () => {
    menu.wrapper.setAttribute("style", "");
    menu.wrapper.classList.remove("show");
    menu.btn.classList.remove("show");
  });
}
