document.querySelector(".animeer-knop").addEventListener("click", (e) => {
  document.querySelector(".vlakje").classList.toggle("box_right");
});

setTimeout(() => {
  document.querySelector(".vlakje").classList.toggle("box_right");
}, 2000);

const menuBtn = document.querySelector(".nav__btn");
const navItem = document.querySelectorAll(".nav__link");
menuBtn.addEventListener("click", () => {
  navItem.forEach((item, index) => {
    setTimeout(() => {
      item.classList.toggle("nav__link--slide");
    }, 100 * index);
  });
});
