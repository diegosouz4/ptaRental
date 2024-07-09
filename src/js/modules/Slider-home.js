document.addEventListener("DOMContentLoaded", () => {
  slideHero();
  slideSoluctions();
  slideBlog();
});

function slideHero() {
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
    lazyLoad: "ondemand",
    autoplay: true,
    autoplaySpeed: 5000,
  });
}

function slideSoluctions() {
  const slider = {
    wrapper: document.querySelector("[data-coursesSlider='wrapper']"),
    itens: document.querySelectorAll("[data-coursesSlider='slide']"),
  };

  if (!slider.wrapper || slider.itens.length < 2) return;

  $("[data-coursesSlider='wrapper']").slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

function slideBlog() {
  const slider = {
    wrapper: document.querySelector("[data-blogSlider='wrapper']"),
    itens: document.querySelectorAll("[data-blogSlider='slide']"),
  };

  if (!slider.wrapper || slider.itens.length < 2) return;

  $("[data-blogSlider='wrapper']").slick({
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
