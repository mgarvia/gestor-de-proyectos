'use strict';

// menu
const menu = document.querySelector('.js-menu');
const allMenuBtns = document.querySelectorAll('.js-menu-btn');

const toggleMenu = () => menu.classList.toggle('show');

allMenuBtns.forEach(btn => btn.addEventListener('click', toggleMenu));
