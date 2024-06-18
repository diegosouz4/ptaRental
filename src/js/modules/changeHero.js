function changeHero() {
  const section = document.querySelector('.hero');
  if(!section) return;

  const options = ["./dest/img/hero-01.jpg", "./dest/img/hero-02.jpg", "./dest/img/hero-03.jpg"];
  let index = 0;

  setInterval(() => {
    section.style.backgroundImage =  `url(${options[index]})`;
    index = index + 1 > options.length - 1 ? index = 0 : index + 1; 
  }, 4000);
}