let nav = document.querySelector("nav");
let navBurgerButtonTrue = document.querySelector(".nav__burger-button-true");

function toggleBurger() {
  nav.classList.toggle("is-active");
  navBurgerButtonTrue.classList.toggle("nav__burger-button-true--display-none");
}

// let nav = document.querySelector("nav");
// let navBurgerButton = document.querySelector(".nav__burger-button");

// navBurgerButton.addEventListener(
//   "click",
//   () => {
//     nav.classList.toggle("is-active");
//     navBurgerButton.classList.toggle("nav__burger-button--bias");
//   },
//   false
// );
