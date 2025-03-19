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






// Обработчик отправки формы
document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const errorMessageDiv = document.getElementById('errorMessage');
    errorMessageDiv.textContent = ''; // Очистить предыдущие ошибки

    try {
        const response = await fetch('send-email.php', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const result = await response.json();
            if (result.success) {
                window.location.href = 'thank-you.html';
            } else {
                errorMessageDiv.textContent = result.message || 'An error has occurred. Please try again later';
            }
        } else {
            errorMessageDiv.textContent = 'Server error. Try again later';
        }
    } catch (error) {
        errorMessageDiv.textContent = 'A network error has occurred. Please check your internet connection';
    }
});






/* copyright year */
document.addEventListener('DOMContentLoaded', () => {
    const copyYear = document.getElementById("footer-second-copy__year");
    copyYear.textContent = `${new Date().getFullYear()}`;
}, { once: true });





/* does scroll the block after page loading */
window.addEventListener('load', () => {
    const block = document.querySelector('.cards-group--end');
    block.scrollLeft = block.scrollWidth;
});






/* go to visit section */
function goToVisit() {
    document.getElementById('visit').scrollIntoView({ behavior: 'smooth' });
}





/* go to contact's page */
function goToContact() {
    window.location.href = './contact.html';
}





/* video with video preview */
const video80Wrapper = document.querySelector(".video80-wrapper");
const video80Preview = document.querySelector(".video80-item__preview");
const video80video = document.querySelector(".video80-item__video");
const video80button = document.querySelector(".video80-item__playbutton");

video80Wrapper.addEventListener('click', () => {
    video80Preview.style.display = "none";
    video80button.style.display = "none";
    video80video.style.display = "block";
    video80video.play();
});
