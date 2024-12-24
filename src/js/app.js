// Site menu
const navMenuBurgerOpen = document.querySelector(".nav-menu-burger__open")
const navMenuBurgerClose = document.querySelector(".nav-menu-burger__close")
const headerNavMenu = document.querySelector(".header-nav__menu")

navMenuBurgerOpen.addEventListener('click', () => { headerNavMenu.classList.add("active") })
navMenuBurgerClose.addEventListener('click', () => { headerNavMenu.classList.remove("active") })
