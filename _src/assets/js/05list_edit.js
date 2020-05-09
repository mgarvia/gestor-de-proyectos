'use strict'

const removeSidesBtns = () => {
  const allLists = document.querySelectorAll('.app-list');
  const lastIndexList = listArray.length - 1;
  const firstList = allLists.item(0);
  const lastList = allLists.item(lastIndexList);
  const showAllBtns = document.querySelectorAll('.js-btn-lft, .js-btn-rgt, .card-btn-up, .card-btn-down').forEach(btn => btn.classList.remove('hidden'));
  const allCards = document.querySelectorAll('.js-card');

  for (let list of listArray) {
    const listIndex = listArray.indexOf(list);
    // const currentList = allLists.find(currentList => currentList.id === list.id)
    if (listIndex === 0) {
      const btnLeft = firstList.querySelector('.js-btn-lft');
      btnLeft.classList.add('hidden');
    }
    if (listIndex === lastIndexList) {
      const btnRight = lastList.querySelector('.js-btn-rgt');
      btnRight.classList.add('hidden');
    }

    for (let card of list.cards) {
      const cardIndex = list.cards.indexOf(card);
      const lastIndexCard = list.cards.length -1;
      if (cardIndex === 0) {
        for (let currentCard of allCards) {
          if (currentCard.id === card.id) {
            const button = currentCard.querySelector('.card-btn-up');
            button.classList.add('hidden');
          }
        }
      }
      if (cardIndex === lastIndexCard) {
        for (let currentCard of allCards) {
          // console.log(currentCard)
          if (currentCard.id === card.id) {
            const button = currentCard.querySelector('.card-btn-down');
            button.classList.add('hidden');
          }
        }
      }

    }
  }
}

const updateListArray = e => {
  const listId = findItem(e, '.app-list').id;
  const listObj = listArray.find(obj => obj.id === listId)
  listObj.title = e.currentTarget.value;
  setListToLocal()
}

const findIndex = e => {
  const listId = findItem(e, '.app-list').id;
  const listIndex = listArray.findIndex(obj => obj.id === listId);
  return listIndex
}

const findObj = e => {
  const listId = findItem(e, '.app-list').id;
  const list = listArray.find(obj => obj.id === listId);
  return list
}

const removeList = e => {
  const listIndex = findIndex(e);
  listArray.splice(listIndex, 1)
  setListToLocal()
  handlePaintLists()
}

const moveList = (e, listPosition) => {
  const list = findObj(e)
  const listIndex = findIndex(e);

  listArray.splice(listIndex, 1);
  listArray.splice(listIndex + listPosition, 0, list);
  setListToLocal();
  handlePaintLists();
}

const moveToLeft = e => moveList(e, -1);
const moveToRight = e => moveList(e, 1);