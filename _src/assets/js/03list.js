'use strict';

// list_new

const createListBtn = document.querySelector('.js-add-btn');
const newListBtns = document.querySelectorAll('.js-list, .js-remove-btn');
const listBoxes = document.querySelectorAll('.js-list, .js-create-list');
const newListName = document.querySelector('.js-input-name');
const createdListsContainer = document.querySelector('.created-lists');

const listName = () => {
  toggle(listBoxes);
  resetInput(newListName);
}

// const addNewList = e => {
//   if (newListName.value !== '') {
//     toggle(listBoxes);
//     updateListCounter();
//     saveToArray(listArray, createListDOM(newListName.value, counter('list')), '.app-list-input');
//     removeSidesBtns();
//   }
// }

const addNewList = () => {
  addNew(newListName.value, listBoxes, 'list', listArray, createListDOM(newListName.value, counter('list')), '.app-list-input')
}

const addListenersToList = parent => {
  addListener(parent, '.app-list-input','keyup', updateListArray);
  addListener(parent, '.list-btn-remove','click', removeList);
  addListener(parent, '.js-btn-lft','click', moveToLeft);
  addListener(parent, '.js-btn-rgt','click', moveToRight);
  addListener(parent, '.card-btn-add','click', addNewCard);
  addListener(parent, '.card-btn-remove','click', hideNameNewCard);
  addListener(parent, '.app-list-footer','click', nameNewCard);
}

const updateListArray = e => updateArray(e, listArray);
const removeList = e => removeFromArray(e, listArray, '.app-list');
const moveToLeft = e => move(e, -1, listArray);
const moveToRight = e => move(e, 1, listArray);

newListBtns.forEach(btn => btn.addEventListener('click', listName));
createListBtn.addEventListener('click', addNewList);