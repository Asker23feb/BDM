$('#fullpage').fullpage();


jQuery(function($){
    $("#date").mask("99/99/9999");
    $("#phone").mask(" +1 (999) 999-9999");
    $("#tin").mask("99-9999999");
    $("#ssn").mask("999-99-9999");
});


const overlay = document.querySelector('.overlay');

const tween = TweenMax.to('.overlay h1', 2, {
    opacity: 0,
    y: -80,
    ease: Expo.easeInOut
})
TweenMax.to('.overlay', 2, {
    delay: 1,
    top: '-100%',
    ease: Expo.easeInOut
})
TweenMax.staggerFrom('.nav ul li', 1, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        navText: ["<img src='./img/left.png'>", "<img src='./img/right.png'>"],
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
});


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const NavLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',() => {
            nav.classList.toggle('nav-active');

        NavLinks.forEach((link, index) => {
               // link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 2}s';
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'fadeInLeft 0.5s ease forwards ${index / 7 + 0}';
            }
          });
        burger.classList.toggle('toggle');
     });

}
navSlide();


