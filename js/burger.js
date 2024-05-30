(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__box');
  const menuCloseItem = document.querySelector('.header__nav-close')

  burgerItem.addEventListener('click', () => {
      menu.classList.add('header__box-active');
  });
  menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('header__box-active');
  });
}());