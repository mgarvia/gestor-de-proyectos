'use strict';

const resetInnerHTML = item => item.innerHTML = '';
const paintSavedLists = () => listArray.map(obj => list.innerHTML = createListDOM(obj.title, obj.id).innerHTML);

const paintSavedCards = () => {
  const lists = document.querySelectorAll('.app-list');
  for (let list of lists) {
    const cardsArea = list.querySelector('.js-cards-area');
    for (let arrayList of listArray){
      if(list.id === arrayList.id){
        arrayList.cards.map(obj => createCardDOM(obj.title, obj.id, cardsArea).innerHTML);
      }
    }
  }
}

const handlePaintLists = () => {
  resetInnerHTML(createdListsContainer);
  paintSavedLists();
  paintSavedCards();
  removeSidesBtns();
}

window.addEventListener('load', handlePaintLists());