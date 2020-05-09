'use strict'

const setListToLocal = () => {
  localStorage.setItem('board', JSON.stringify(listArray));
  localStorage.setItem('listCounter', JSON.stringify(listCounter));
}

const getListFromLocal = () => {
  let createdLists = JSON.parse(localStorage.getItem('board'));
  if (createdLists !== null) {
    return createdLists;
  } else {
    return createdLists = [];
  }
}

const getCounterFromLocal = () => {
  let createdListsCounter = JSON.parse(localStorage.getItem('listCounter'));
  if (createdListsCounter !== null) {
    return createdListsCounter;
  } else {
    return createdListsCounter = 100;
  }

}

let listArray = getListFromLocal();
let listCounter = getCounterFromLocal();

let cardCounter = 100;
// let cardArray = [];