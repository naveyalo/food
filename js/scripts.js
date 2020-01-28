$(function() {
    var menuLink = $('.header__link');
    var menu = $('.header-menu__nav');
    var close = $('.close-btn');



    menuLink.click(function() {
        menu.toggleClass('active-menu');
    });
    close.click(function() {
        menu.toggleClass('active-menu');
    });

});

