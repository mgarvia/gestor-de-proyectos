'use strict'

const setToLocal = () => {
  const localObj = {
    lists: listArray,
    listCounter: listCounter,
    cardCounter: cardCounter
  }
  localStorage.setItem('board', JSON.stringify(localObj));
}

const getFromLocal = item => {
  let board = JSON.parse(localStorage.getItem('board'));
  if (board !== null) {
    if (item === 'lists') {
      return board.lists;
    } else if (item === 'listCounter') {
      return board.listCounter; 
    } else {
      return board.cardCounter;
    }
    
  } else if (item === 'lists') {
    return board = [];
  } else {
    return board = 0;
  }
}

// const getListFromLocal = () => {
//   let board = JSON.parse(localStorage.getItem('board'));
//   if (board !== null) {
//     return board.lists;
//   } else {
//     return board = [];
//   }
// }

// const getListCounterFromLocal = () => {
//   let board = JSON.parse(localStorage.getItem('board'));
//   if (board !== null) {
//     return board.listCounter;
//   } else {
//     return board = 0;
//   }
// }

// const getCardCounterFromLocal = () => {
//   let board = JSON.parse(localStorage.getItem('board'));
//   if (board !== null) {
//     return board.cardCounter;
//   } else {
//     return board = 0;
//   }
// }

let listArray = getFromLocal('lists');
let listCounter = getFromLocal('listCounter');
let cardCounter = getFromLocal('cardCounter');