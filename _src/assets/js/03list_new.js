'use strict';

// list_new

const toggleNewList = () => listBoxes.forEach(box => box.classList.toggle('hidden'));
const resetInput = input => input.value = '';
const updateListCounter = () => listCounter += 1;

const listName = () => {
  toggleNewList();
  resetInput(newListName);
}

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

  // list HEADER input
  const listHeaderInput = document.createElement('input');
  listHeaderInput.setAttribute('class', 'app-list-input form-control form-control-sm');
  listHeaderInput.setAttribute('placeholder', 'Nueva lista');
  listHeaderInput.setAttribute('type', 'text');
  listHeaderInput.setAttribute('value', title);
  listHeaderInput.setAttribute('title', 'Crear una lista nueva');

  // list HEADER buttons
  const listHeaderBox = document.createElement('div');
  listHeaderBox.setAttribute('class', 'app-list-options');

  const listHeaderBoxIcon = document.createElement('span');
  listHeaderBoxIcon.setAttribute('class', 'pl-2 pr-2 text-white-50 fas fa-ellipsis-v');

  const listHeaderBoxBtns = document.createElement('div');
  listHeaderBoxBtns.setAttribute('class', 'app-list-btns btn-group btn-group-sm');

  // list HEADER button remove
  const listHeaderBtnRemove = document.createElement('button');
  listHeaderBtnRemove.setAttribute('class', 'list-btn-remove btn btn-light text-muted border shadow-sm');
  listHeaderBtnRemove.setAttribute('type', 'button');
  listHeaderBtnRemove.setAttribute('title', 'Borrar esta tarjeta');

  const listHeaderBtnRemoveIcon = document.createElement('span');
  listHeaderBtnRemoveIcon.setAttribute('class', 'fas fa-trash-alt');

  // list HEADER button move left
  const listHeaderBtnLeft = document.createElement('button');
  listHeaderBtnLeft.setAttribute('class', 'js-btn-lft btn btn-light text-muted border shadow-sm app-list-move-left');
  listHeaderBtnLeft.setAttribute('type', 'button');
  listHeaderBtnLeft.setAttribute('title', 'Mover esta lista hacia la izquierda');

  const listHeaderBtnLeftIcon = document.createElement('span');
  listHeaderBtnLeftIcon.setAttribute('class', 'fas fa-arrow-left');

  // list HEADER button move right
  const listHeaderBtnRight = document.createElement('button');
  listHeaderBtnRight.setAttribute('class', 'js-btn-rgt btn btn-light text-muted border shadow-sm app-list-move-right');
  listHeaderBtnRight.setAttribute('type', 'button');
  listHeaderBtnRight.setAttribute('title', 'Mover esta lista hacia la derecha');

  const listHeaderBtnRightIcon = document.createElement('span');
  listHeaderBtnRightIcon.setAttribute('class', 'fas fa-arrow-right');

  // list CARDS
  const listCards = document.createElement('div');
  listCards.setAttribute('class', 'js-list-cards');

  // list CARDS area
  const listCardsArea = document.createElement('div');
  listCardsArea.setAttribute('class', 'js-cards-area')

  // list CARDS input
  const cardName = document.createElement('div');
  cardName.setAttribute('class', 'js-card-new hidden p-1  rounded-sm  shadow');

  const cardNameInput = document.createElement('textarea');
  cardNameInput.setAttribute('class', 'js-card-name form-control form-control-sm');
  cardNameInput.setAttribute('placeholder', 'Introduzca un título para esta tarjeta');
  cardNameInput.setAttribute('type', 'textarea');
  cardNameInput.setAttribute('title', 'Crear una tarjeta nueva');

  // list CARDS buttons
  const cardNameBtns = document.createElement('div');

  const cardNameBtnsAdd = document.createElement('button');
  cardNameBtnsAdd.setAttribute('class', 'card-btn-add btn btn-light btn-outline-primary btn-sm  shadow-sm');
  cardNameBtnsAdd.setAttribute('type', 'button');
  cardNameBtnsAdd.setAttribute('title', 'Crear tarjeta"');

  const cardNameBtnsAddContent = document.createTextNode('Añadir tarjeta');

  const cardNameBtnsRemove = document.createElement('button');
  cardNameBtnsRemove.setAttribute('class', 'card-btn-remove btn');
  cardNameBtnsRemove.setAttribute('type', 'button');
  cardNameBtnsRemove.setAttribute('title', 'Borrar tarjeta');

  const cardNameBtnsRemoveContent = document.createTextNode('X');

  // list FOOTER
  const listFooter = document.createElement('button');
  listFooter.setAttribute('class', 'app-list-footer ml-1 btn btn-primary btn-sm text-white-50');
  listFooter.setAttribute('type', 'button');
  listFooter.setAttribute('title', 'Añadir una nueva tarjeta"');

  const listFooterIcon = document.createElement('span');
  listFooterIcon.setAttribute('class', 'fas fa-plus');

  const listFooterContent = document.createTextNode('Añadir otra tarjeta');


  // list STRUCTURE
  createdListsContainer.appendChild(list)

  list.appendChild(listBox);

  listBox.appendChild(listHeader);
  listBox.appendChild(listCards);
  listBox.appendChild(listFooter);

  // list STRUCTURE header
  listHeader.appendChild(listHeaderInput);
  listHeader.appendChild(listHeaderBox);

  listHeaderBox.appendChild(listHeaderBoxIcon);
  listHeaderBox.appendChild(listHeaderBoxBtns);

  listHeaderBoxBtns.appendChild(listHeaderBtnRemove);
  listHeaderBoxBtns.appendChild(listHeaderBtnLeft);
  listHeaderBoxBtns.appendChild(listHeaderBtnRight);

  listHeaderBtnRemove.appendChild(listHeaderBtnRemoveIcon);
  listHeaderBtnLeft.appendChild(listHeaderBtnLeftIcon);
  listHeaderBtnRight.appendChild(listHeaderBtnRightIcon);

  // list STRUCTURE cards
  listCards.appendChild(listCardsArea);
  listCards.appendChild(cardName);
  cardName.appendChild(cardNameInput);
  cardName.appendChild(cardNameBtns);

  cardNameBtns.appendChild(cardNameBtnsAdd);
  cardNameBtns.appendChild(cardNameBtnsRemove);

  cardNameBtnsAdd.appendChild(cardNameBtnsAddContent);
  cardNameBtnsRemove.appendChild(cardNameBtnsRemoveContent);

  // list STRUCTURE footer
  listFooter.appendChild(listFooterIcon);
  listFooter.appendChild(listFooterContent);

  addListenersToList(list);
  return list
}

const addListenersToList = list => {
  const listHeaderInput = list.querySelector('.app-list-input');
  const listHeaderBtnRemove = list.querySelector('.list-btn-remove');
  const listHeaderBtnLeft = list.querySelector('.js-btn-lft');
  const listHeaderBtnRight = list.querySelector('.js-btn-rgt');
  const cardNameBtnsAdd = list.querySelector('.card-btn-add');
  const cardNameBtnsRemove = list.querySelector('.card-btn-remove');
  const listFooter = list.querySelector('.app-list-footer');

  listHeaderInput.addEventListener('keyup', updateListArray);
  listHeaderBtnRemove.addEventListener('click', removeList);
  listHeaderBtnLeft.addEventListener('click', moveToLeft);
  listHeaderBtnRight.addEventListener('click', moveToRight);

  cardNameBtnsAdd.addEventListener('click', addNewCard);
  cardNameBtnsRemove.addEventListener('click', hideNameNewCard);

  listFooter.addEventListener('click', nameNewCard);
}

const saveListToArray = (list) => {
  let listObj = {};
  listObj.title = list.querySelector('.app-list-input').value;
  listObj.id = list.id;
  listObj.cards = []

  listArray.push(listObj);
  setListToLocal();
}

const addNewList = e => {
  const listName = newListName.value;
  if (listName !== '') {
    toggleNewList();
    updateListCounter();
    saveListToArray(createListDOM(listName, listCounter));
    removeSidesBtns();
  }
}

newListBtns.forEach(btn => btn.addEventListener('click', listName));
createListBtn.addEventListener('click', addNewList);