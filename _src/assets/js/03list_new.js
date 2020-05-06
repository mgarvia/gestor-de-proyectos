'use strict';

// list_new

const nameNewList = () => {
  newListName.value = '';
  newListBtn.classList.add('hidden');
  createListBox.classList.remove('hidden');
}

const addNewList = e => {
  updateListCounter();
  saveListToArray(createNewList(e));
  hideCreateList();
}

const createNewList = e => newListName.value !== '' ? createListDOM(newListName.value, listCounter) : e.preventDefault();

const createListDOM = (title, id) => {
  // list CONTAINER
  const list = document.createElement('div');
  list.setAttribute('class', 'app-list');
  list.setAttribute('id', id)

  const listBox = document.createElement('div');
  listBox.setAttribute('class', 'p-1 rounded-sm bg-primary shadow');

  // list HEADER
  const listHeader = document.createElement('form');
  listHeader.setAttribute('class', 'app-list-form align-middle p-1 position-relative');

  const listHeaderInput = document.createElement('input');
  listHeaderInput.setAttribute('class', 'app-list-input form-control form-control-sm');
  listHeaderInput.setAttribute('placeholder', 'Nueva lista');
  listHeaderInput.setAttribute('type', 'text');
  listHeaderInput.setAttribute('value', title);
  listHeaderInput.setAttribute('title', 'Crear una lista nueva');

  const listHeaderBox = document.createElement('div');
  listHeaderBox.setAttribute('class', 'app-list-options');

  // list HEADER buttons
  const listHeaderBoxIcon = document.createElement('span');
  listHeaderBoxIcon.setAttribute('class', 'pl-2 pr-2 text-white-50 fas fa-ellipsis-v');

  const listHeaderBoxBtns = document.createElement('div');
  listHeaderBoxBtns.setAttribute('class', 'app-list-btns btn-group btn-group-sm');

  // list HEADER button remove
  const listHeaderBoxBtnsRemove = document.createElement('button');
  listHeaderBoxBtnsRemove.setAttribute('class', 'btn btn-light text-muted border shadow-sm');
  listHeaderBoxBtnsRemove.setAttribute('type', 'button');
  listHeaderBoxBtnsRemove.setAttribute('title', 'Borrar esta tarjeta');

  const listHeaderBoxBtnsRemoveIcon = document.createElement('span');
  listHeaderBoxBtnsRemoveIcon.setAttribute('class', 'fas fa-trash-alt');

  // list HEADER button move left
  const listHeaderBoxBtnsLeft = document.createElement('button');
  listHeaderBoxBtnsLeft.setAttribute('class', 'js-btn-lft btn btn-light text-muted border shadow-sm app-list-move-left');
  listHeaderBoxBtnsLeft.setAttribute('type', 'button');
  listHeaderBoxBtnsLeft.setAttribute('title', 'Mover esta lista hacia la izquierda');

  const listHeaderBoxBtnsLeftIcon = document.createElement('span');
  listHeaderBoxBtnsLeftIcon.setAttribute('class', 'fas fa-arrow-left');

  // list HEADER button move right
  const listHeaderBoxBtnsRight = document.createElement('button');
  listHeaderBoxBtnsRight.setAttribute('class', 'js-btn-rgt btn btn-light text-muted border shadow-sm app-list-move-right');
  listHeaderBoxBtnsRight.setAttribute('type', 'button');
  listHeaderBoxBtnsRight.setAttribute('title', 'Mover esta lista hacia la derecha');

  const listHeaderBoxBtnsRightIcon = document.createElement('span');
  listHeaderBoxBtnsRightIcon.setAttribute('class', 'fas fa-arrow-right');

  // list CARDS
  const listCards = document.createElement('div');
  listCards.setAttribute('class', 'js-list-cards')

  // list FOOTER
  const listFooter = document.createElement('button');
  listFooter.setAttribute('class', 'app-list-footer ml-1 btn btn-primary btn-sm text-white-50');
  listFooter.setAttribute('type', 'button');
  listFooter.setAttribute('title', 'Añadir una nueva tarjeta"');

  const listFooterIcon = document.createElement('span');
  listFooterIcon.setAttribute('class', 'fas fa-plus');

  const listFooterContent = document.createTextNode('Añadir otra tarjeta');

  // structure

  createdListsContainer.appendChild(list)

  list.appendChild(listBox);
  listBox.appendChild(listHeader);
  listBox.appendChild(listCards);
  listBox.appendChild(listFooter);

  listHeader.appendChild(listHeaderInput);
  listHeader.appendChild(listHeaderBox);

  listHeaderBox.appendChild(listHeaderBoxIcon);
  listHeaderBox.appendChild(listHeaderBoxBtns);

  listHeaderBoxBtns.appendChild(listHeaderBoxBtnsRemove);
  listHeaderBoxBtns.appendChild(listHeaderBoxBtnsLeft);
  listHeaderBoxBtns.appendChild(listHeaderBoxBtnsRight);

  listHeaderBoxBtnsRemove.appendChild(listHeaderBoxBtnsRemoveIcon);
  listHeaderBoxBtnsLeft.appendChild(listHeaderBoxBtnsLeftIcon);
  listHeaderBoxBtnsRight.appendChild(listHeaderBoxBtnsRightIcon);

  listFooter.appendChild(listFooterIcon);
  listFooter.appendChild(listFooterContent);

  //listeners
  listHeaderInput.addEventListener('keyup', updateListArray);
  listHeaderBoxBtnsRemove.addEventListener('click', removeList);
  listHeaderBoxBtnsLeft.addEventListener('click', moveToLeft);
  // listFooter.addEventListener('click', nameNewCard)

  // addNewList(list);
  // addListenersToList();
  return list
}

const updateListCounter = () => listCounter += 1;

const saveListToArray = (list) => {
  let listObj = {};
  listObj.title = list.querySelector('.app-list-input').value;
  listObj.id = list.id;

  listArray.push(listObj);
  setListToLocal();
}

const hideCreateList = () => {
  newListBtn.classList.remove('hidden');
  createListBox.classList.add('hidden');
}

newListBtn.addEventListener('click', nameNewList);
createListBtn.addEventListener('click', addNewList);
cancelCreateListBtn.addEventListener('click', hideCreateList)