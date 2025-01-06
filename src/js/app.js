// Site menu
const navMenuBurgerOpen = document.querySelector(".nav-menu-burger__open")
const navMenuBurgerClose = document.querySelector(".nav-menu-burger__close")
const headerNavMenu = document.querySelector(".header-nav__menu")

navMenuBurgerOpen.addEventListener('click', () => { headerNavMenu.classList.add("active") })
navMenuBurgerClose.addEventListener('click', () => { headerNavMenu.classList.remove("active") })


// Site submenu
// Функция для расчета и корректировки позиции подменю
function adjustSubmenuPosition(submenu) {
    const submenuRect = submenu.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth; // Учитывает область без полосы прокрутки

    // Проверяем, выходит ли подменю за правый край вьюпорта
    if (submenuRect.right > viewportWidth) {
        const overflow = submenuRect.right - viewportWidth;

        // Сдвигаем подменю влево, чтобы оно оставалось видимым
        submenu.style.left = `calc(50% - ${overflow}px)`;
        submenu.style.transform = 'translateX(-50%)';
    } else {
        // Сбрасываем позицию, если нет выхода за границы
        submenu.style.left = '';
        submenu.style.transform = 'translateX(-50%)';
    }
}

// Обработчик клика по меню
headerNavMenu.addEventListener('click', (event) => {
    const e = event.target;

    // Проверяем, если элемент является ссылкой меню
    if (e.classList.contains('nav-menu-item__link')) {
        // Закрываем другие открытые подменю
        const activeSubmenu = headerNavMenu.querySelector('.header-nav__submenu.active');
        if (activeSubmenu && activeSubmenu !== e.nextElementSibling) {
            activeSubmenu.classList.remove('active');
            activeSubmenu.style.left = ''; // Сброс положения
            activeSubmenu.style.transform = ''; // Сброс трансформации
        }

        // Переключаем состояние текущего подменю
        const submenu = e.nextElementSibling;
        submenu.classList.toggle('active');

        // Корректируем позицию подменю, если оно активное
        if (submenu.classList.contains('active')) {
            adjustSubmenuPosition(submenu);
        }
    }
});

// Обработчик клика вне меню
document.addEventListener('click', (event) => {
    if (!headerNavMenu.contains(event.target)) {
        const activeSubmenu = headerNavMenu.querySelector('.header-nav__submenu.active');
        if (activeSubmenu) {
            activeSubmenu.classList.remove('active');
            activeSubmenu.style.left = ''; // Сброс положения
            activeSubmenu.style.transform = ''; // Сброс трансформации
        }
    }
});