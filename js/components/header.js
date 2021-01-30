const Header = () => {
  const navItems = document.querySelectorAll('.nav__item');

  const classRemover = (className) => {
    navItems.forEach((item) => {
      item.classList.remove(className);
    });
  };

  const classToglerOnClick = (className) => {
    navItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        classRemover(className); // call a function which removes all classes from other items
        navItems[index].classList.add(className); // add class to clicked item
      });
    });
  };

  const onClickToMenu = () => {
    const burgerMenu = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const badges = document.querySelector('.badges');

    burgerMenu.addEventListener('click', () => {
      badges.classList.toggle('badges--active');
      nav.classList.toggle('nav--active');
      burgerMenu.classList.toggle('burger--active');
    });
  };

  onClickToMenu();
  classToglerOnClick('nav__item--active');
};

export default Header;
