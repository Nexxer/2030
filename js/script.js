$(document).ready(function () {
    // Открытие меню мобильного
$('.header__mobile-burger').on('click', function () {
    const menuMobile = $('.header__nav');
    menuMobile.slideToggle("normal");
})

})