$(document).ready(function () {
    // Открытие меню мобильного
$('.header__mobile-burger').on('click', function (e) {
    e.preventDefault();
    const menuMobile = $('.header__nav');
    menuMobile.slideToggle("normal");
})

    //переключение активного таба
$('.result .tabs .tab').on('click', function (e) {
    e.preventDefault();
    const target = e.target;
    $(target).siblings('.tab').removeClass('tab_active');
    $(target).addClass('tab_active');
});

})