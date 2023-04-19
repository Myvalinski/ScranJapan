// #########      mobile menu

const flipmenu = document.querySelector('#mobile-menu');
const flipmenulinks = document.querySelector('.navbar__menu');

flipmenu.addEventListener('click', function() {
    flipmenu.classList.toggle('is-active');
    flipmenulinks.classList.toggle('active');
})


// #########      contact form

