'use strict';

const nameNewCard = e => {
  const currentList = e.currentTarget.parentElement.parentElement;
  const cardsArea = currentList.querySelector('.js-card-new');
  const listFooter = currentList.querySelector('.app-list-footer');

  listFooter.classList.add('hidden');
  cardsArea.classList.remove('hidden');
}

const createCardDOM = e => {
  const currentList = e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement;
  const title = currentList.querySelector('.js-card-name').value;
  const cardsArea = currentList.querySelector('.js-cards-area');
  
  //card container
  const card = document.createElement('article');
  card.setAttribute('class', 'js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm');
  card.setAttribute('title', 'Abrir la tarjeta');

  const tagsArea = document.createElement('div');
  tagsArea.setAttribute('class', 'js-tags-area');

  const cardTitle = document.createElement('h3');
  const cardTitleContent = document.createTextNode(title)

  const tasksArea = document.createElement('div');
  tasksArea.setAttribute('class', 'text-black-50');

  const cardBtns = document.createElement('div');
  cardBtns.setAttribute('class', 'app-card-btns btn-group-vertical btn-group-sm');

  const cardBtnsUp = document.createElement('button');
  cardBtnsUp.setAttribute('class', 'btn btn-light text-muted border shadow-sm app-card-move-up');
  cardBtnsUp.setAttribute('type', 'button');
  cardBtnsUp.setAttribute('title', 'Mover esta tarjeta hacia arriba');

  const cardBtnsUpIcon = document.createElement('span');
  cardBtnsUpIcon.setAttribute('class', 'fas fa-arrow-up');

  const cardBtnsDown = document.createElement('button');
  cardBtnsDown.setAttribute('class', 'btn btn-light text-muted border shadow-sm app-card-move-down');
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

  // listeners
  cardTitle.addEventListener('click', showCard);
}

const hideNameNewCard = e => {
  const currentList = e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement;

  const cardsTitleInput = e.currentTarget.parentElement.previousSibling;
  cardsTitleInput.value = '';

  const nameNewCard = currentList.querySelector('.js-card-new');
  nameNewCard.classList.add('hidden');

  const listFooter = currentList.querySelector('.app-list-footer');
  listFooter.classList.remove('hidden');
}

const addNewCard = e => {
  const cardsTitleInput = e.currentTarget.parentElement.previousSibling;
  if(cardsTitleInput.value !== '') {
    createCardDOM(e);
    hideNameNewCard(e);
  }
}

// const setCardToListArray = () => {
//   const cardsArray = [];
//   const cardsObj = {};

//   cardsObj.id;
//   cardsObj.title;
//   cardsObj.description;
//   cardsObj.tags;

//   setCardToLocal()
// }