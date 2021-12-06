'use strict';
const scrollUpBtn = document.querySelector('.scroll-up-btn');
const navBar = document.querySelector('.navbar');
const span = document.querySelector('.span');
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.menu');
const listItem = document.querySelectorAll('.list__item');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

    //animate links

    listItem.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.1
            }s `; //delay index le decide garxa
        }
    });
});

const stickyNav = () => {
    const scrolling = window.scrollY;
    // console.log(scrolling);

    if (scrolling > 40) {
        navBar.classList.add('sticky');
        span.style.color = 'red';
    } else {
        navBar.classList.remove('sticky');
        span.style.color = 'red';
    }
    if (scrolling > 200) {
        scrollUpBtn.classList.add('active');
    } else {
        scrollUpBtn.classList.remove('active');
    }
};
window.addEventListener('scroll', stickyNav);

// const hideMobileMenu = () => {
//     const menuBars = document.querySelector('.is-active');

//     if (window.innerWidth <= 960 && menuBars) {
//         menu.classList.toggle('is-active');
//         menuLinks.classList.remove('active');
//     }
// };
const scrollFunction = () => {
    // console.log('clicked');
    window.scrollTo(0, 0);
};
scrollUpBtn.addEventListener('click', scrollFunction);

// menuLinks.addEventListener('click', hideMobileMenu);

menuLinks.addEventListener('click', () => {
    const menuBars = document.querySelector('.is-active');

    if (menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
        listItem.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 7 + 0.1
                }s `; //delay index le decide garxa
            }
        });
    }
});

// typing animation jquery

const typed = new Typed('.typing', {
    strings: ['Youtuber', 'Frontend Developer', 'Gamer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});
const typed2 = new Typed('.typing-2', {
    strings: ['Youtuber', 'Frontend Developer', 'Gamer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

//loading

const preLoader = document.getElementById('loader');
// console.log(preLoader);

function myFunction() {
    preLoader.style.display = 'none';
}
window.addEventListener('load', myFunction);
