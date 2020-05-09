'use strict';

const findItem = (e, itemClass) => e.currentTarget.closest(itemClass);

const toggleNewCard = list => list.querySelectorAll('.js-card-new, .app-list-footer').forEach(area => area.classList.toggle('hidden'));
const hideNameNewCard = e => toggleNewCard(findItem(e, '.app-list'));

const updateCardCounter = () => cardCounter += 1;

const nameNewCard = e => {
  const list = findItem(e, '.app-list');
  const input = list.querySelector('.js-card-name');
  toggleNewCard(list);
  resetInput(input);
}

const createCardDOM = (title, id, cardsArea) => {

  //card container
  const card = document.createElement('article');
  card.setAttribute('class', 'js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm');
  card.setAttribute('title', 'Abrir la tarjeta');
  card.setAttribute('id', id)

  const tagsArea = document.createElement('div');
  tagsArea.setAttribute('class', 'js-tags-area');

  const cardTitle = document.createElement('h3');
  cardTitle.setAttribute('class', 'card-title')
  const cardTitleContent = document.createTextNode(title)

  const tasksArea = document.createElement('div');
  tasksArea.setAttribute('class', 'text-black-50');

  const cardBtns = document.createElement('div');
  cardBtns.setAttribute('class', 'app-card-btns btn-group-vertical btn-group-sm');

  const cardBtnsUp = document.createElement('button');
  cardBtnsUp.setAttribute('class', 'card-btn-up btn btn-light text-muted border shadow-sm app-card-move-up');
  cardBtnsUp.setAttribute('type', 'button');
  cardBtnsUp.setAttribute('title', 'Mover esta tarjeta hacia arriba');

  const cardBtnsUpIcon = document.createElement('span');
  cardBtnsUpIcon.setAttribute('class', 'fas fa-arrow-up');

  const cardBtnsDown = document.createElement('button');
  cardBtnsDown.setAttribute('class', 'card-btn-down btn btn-light text-muted border shadow-sm app-card-move-down');
  cardBtnsDown.setAttribute('type', 'button');
  cardBtnsDown.setAttribute('title', 'Mover esta tarjeta hacia abajo');

  const cardBtnsDownIcon = document.createElement('span');
  cardBtnsDownIcon.setAttribute('class', 'fas fa-arrow-down');

  //structure
  cardsArea.appendChild(card);
  card.appendChild(tagsArea);
  card.appendChild(cardTitle);
  card.appendChild(tasksArea);
  card.appendChild(cardBtns);

  cardTitle.appendChild(cardTitleContent);

  cardBtns.appendChild(cardBtnsUp);
  cardBtns.appendChild(cardBtnsDown);

  cardBtnsUp.appendChild(cardBtnsUpIcon);
  cardBtnsDown.appendChild(cardBtnsDownIcon);

  addListenersToCard(card);
  return card;
}

const addListenersToCard = card => {
  const cardTitle = card.querySelector('.card-title');
  const cardBtnsUp = card.querySelector('.card-btn-up');
  const cardBtnsDown = card.querySelector('.card-btn-down');

  cardTitle.addEventListener('click', createEditCardDOM);
  cardBtnsUp.addEventListener('click', moveCardUp);
  cardBtnsDown.addEventListener('click', moveCardDown);
}

const createEditCardDOM = () => {
  // console.log('ok')
}

const moveCardUp = e => {
  const currentList = findItem(e, '.app-list');
  const card = findItem(e, '.js-card');

  for (let list of listArray) {
    if (list.id === currentList.id) {
      const cardIndex = list.cards.findIndex(obj => obj.id === card.id);
      const cardObj = list.cards.find(obj => obj.id === card.id)
      list.cards.splice(cardIndex, 1);
      list.cards.splice(cardIndex - 1, 0, cardObj);
    }
  }
  setListToLocal();
  handlePaintLists();
}

const moveCardDown = () => {
  console.log('ok')
}

const addNewCard = e => {
  const list = findItem(e, '.app-list');
  const cardsArea = list.querySelector('.js-cards-area');
  const title = list.querySelector('.js-card-name').value;
  const listCards = list.querySelector('.js-list-cards');

  if (title !== '') {
    updateCardCounter()
    hideNameNewCard(e);
    saveCardToArray(listCards, createCardDOM(title, cardCounter, cardsArea))
  }
}

const saveCardToArray = (list, card) => {
  const mainList = list.parentElement.parentElement;
  const currentList = listArray.find(obj => obj.id === mainList.id);

  let cardObj = {};
  cardObj.title = list.querySelector('.js-card-name').value;
  cardObj.id = card.id;

  currentList.cards.push(cardObj);
  setListToLocal();
}


