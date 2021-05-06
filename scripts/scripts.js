'use strict';

const headerBurger = document.querySelector(`.header__burger`);
const headerNav = document.querySelector(`.header__nav`);

headerBurger.addEventListener(`click`, () => {
  headerNav.classList.toggle(`header__nav_hidden`);
});
