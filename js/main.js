var menuButton = document.querySelector('.mobile_menu_logo');
var mobileMenu = document.querySelector('.mobile_menu');
var header = document.querySelector('header')
var state = menuButton.getAttribute('state')

menuButton.onclick = function() {
    if (state == 'close') {
        mobileMenu.style.transform = 'translateY(0)'
        state = 'open'
        header.style.boxShadow = 'none'
    }
    else if (state == 'open') {
        mobileMenu.style.transform = 'translateY(-230px)'
        state = 'close'
        header.style.boxShadow = '-1px 15px 60px 2px rgba(170, 169, 169, 0.23)'
    }
}