'use strict';

// menu

const toggleMenu = () => menu.classList.toggle('show');

allMenuBtns.forEach(btn => btn.addEventListener('click', toggleMenu));