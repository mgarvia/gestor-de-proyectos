'use strict'

// list_new
const newListName = document.querySelector('.js-input-name');
// const newListBtn = document.querySelector('.js-list');
// const createListBox = document.querySelector('.js-create-list');
const createListBtn = document.querySelector('.js-add-btn');
const createdListsContainer = document.querySelector('.created-lists');
const newListBtns = document.querySelectorAll('.js-list, .js-remove-btn');
const listBoxes = document.querySelectorAll('.js-list, .js-create-list')

// list_edit
const list = document.createElement('div');

// edit_new
const newCardBtn = document.querySelector('.app-list-footer');