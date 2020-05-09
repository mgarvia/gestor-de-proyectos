'use strict'

const setListToLocal = () => {
  localStorage.setItem('board', JSON.stringify(listArray));
  localStorage.setItem('listCounter', JSON.stringify(listCounter));
  localStorage.setItem('cardCounter', JSON.stringify(cardCounter));
}

const getListFromLocal = () => {
  let createdLists = JSON.parse(localStorage.getItem('board'));
  if (createdLists !== null) {
    return createdLists;
  } else {
    return createdLists = [];
  }
}

const getListCounterFromLocal = () => {
  let createdListsCounter = JSON.parse(localStorage.getItem('listCounter'));
  if (createdListsCounter !== null) {
    return createdListsCounter;
  } else {
    return createdListsCounter = 100;
  }
}

const getCardCounterFromLocal = () => {
  let createdCardCounter = JSON.parse(localStorage.getItem('cardCounter'));
  if (createdCardCounter !== null) {
    return createdCardCounter;
  } else {
    return createdCardCounter = 100;
  }
}

let listArray = getListFromLocal();
let listCounter = getListCounterFromLocal();
let cardCounter = getCardCounterFromLocal();