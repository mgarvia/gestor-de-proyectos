'use strict'

// menu
const menu = document.querySelector('.js-menu');
const allMenuBtns = document.querySelectorAll('.js-menu-btn');

// list_new

const newListBtn = document.querySelector('.js-list');
const createListBox = document.querySelector('.js-create-list');
const newListName = document.querySelector('.js-input-name');
const createListBtn = document.querySelector('.js-add-btn');
const cancelCreateListBtn = document.querySelector('.js-remove-btn');
const createdListsContainer = document.querySelector('.created-lists');

// list_edit
const list = document.createElement('div');
// const listTitleInput = document.querySelector('.app-list-input')

// edit_new
const newCardBtn = document.querySelector('.app-list-footer');