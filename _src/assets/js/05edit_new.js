'use strict';

const nameNewCard = () => {
  console.log('ok')
  const cardsArea = document.querySelector('.js-list-cards');
  const listFooter = document.querySelector('.app-list-footer');

  listFooter.classList.add('hidden');
  
  // input
  const cardName = document.createElement('div');
  cardName.setAttribute('class', 'p-1  rounded-sm  shadow');

  const cardNameInput = document.createElement('textarea');
  cardNameInput.setAttribute('class', 'js-card-name form-control form-control-sm');
  cardNameInput.setAttribute('placeholder', 'Introduzca un título para esta tarjeta');
  cardNameInput.setAttribute('type', 'textarea');
  cardNameInput.setAttribute('title', 'Crear una tarjeta nueva');

  // buttons

  const cardNameBtns = document.createElement('div');

  const cardNameBtnsAdd = document.createElement('button');
  cardNameBtnsAdd.setAttribute('class', 'btn btn-light btn-outline-primary btn-sm  shadow-sm');
  cardNameBtnsAdd.setAttribute('type', 'button');
  cardNameBtnsAdd.setAttribute('title', 'Crear tarjeta"');

  const cardNameBtnsAddContent = document.createTextNode('Añadir tarjeta');

  const cardNameBtnsRemove = document.createElement('button');
  cardNameBtnsRemove.setAttribute('class', 'btn');
  cardNameBtnsRemove.setAttribute('type', 'button');
  cardNameBtnsRemove.setAttribute('title', 'Borrar tarjeta');

  const cardNameBtnsRemoveContent = document.createTextNode('X');

  cardsArea.appendChild(cardName);
  cardName.appendChild(cardNameInput);
  cardName.appendChild(cardNameBtns);

  cardNameBtns.appendChild(cardNameBtnsAdd);
  cardNameBtns.appendChild(cardNameBtnsRemove);

  cardNameBtnsAdd.appendChild(cardNameBtnsAddContent);
  cardNameBtnsRemove.appendChild(cardNameBtnsRemoveContent);
  
}

