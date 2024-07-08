document.addEventListener("DOMContentLoaded", () => {
  const slider = {
    wrapper: document.querySelector("[data-homeSlider='wrapper']"),
    itens: document.querySelectorAll("[data-homeSlider='slide']"),
  };

  if (!slider.wrapper || slider.itens.length < 2) return;

  $("[data-homeSlider='wrapper']").slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 5000,
  });
});
