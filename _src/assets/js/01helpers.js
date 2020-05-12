'use strict'

//new
const addNew = (title, toggleArr, counter, array, item, inputClass) => {

  if (title !== '') {
    toggle(toggleArr);
    updateCounter(counter);
    saveToArray(array, item, inputClass);
    removeSidesBtns();
  }
}

//display
const toggle = (array) => array.forEach(item => item.classList.toggle('hidden'));
const resetInput = input => input.value = '';

//find
const findItem = (e, itemClass) => e.currentTarget.closest(itemClass);

const findIndexInArray = (e, array, item) => {
  const listId = findItem(e, item).id;
  const listIndex = array.findIndex(obj => obj.id === listId);
  return listIndex
}

const findObjInArray = (e, array, item) => {
  const listId = findItem(e, item).id;
  const list = array.find(obj => obj.id === listId);
  return list
}

//array
const saveToArray = (array, item, inputClass) => {
  let obj = {};
  obj.title = item.querySelector(inputClass).value;
  obj.id = item.id;
  obj.cards = []

  array.push(obj);
  setToLocal();
}

const updateArray = (e, array) => {
  const listId = findItem(e, '.app-list').id;
  const listObj = array.find(obj => obj.id === listId)
  listObj.title = e.currentTarget.value;
  setToLocal()
}

//counters
let counter = item => `${item}-${listCounter}`;
const updateCounter = item => {
  if (item === 'card') {
    cardCounter += 1;
  } 
  if (item === 'list') {
    listCounter += 1;
  }
}
const updateListCounter = () => listCounter += 1;
const updateCardCounter = () => cardCounter += 1;

//listeners

const addListener = (parent, itemClass, event, action) => {
  const item = parent.querySelector(itemClass);
  item.addEventListener(event, action)
}

//move
const move = (e, listPosition, array) => {
  const list = findObjInArray(e, listArray, '.app-list')
  // const list = findObj(e)
  // const listIndex = findIndex(e);
  const listIndex = findIndexInArray(e, listArray, '.app-list');

  array.splice(listIndex, 1);
  array.splice(listIndex + listPosition, 0, list);
  setToLocal();
  handlePaintLists();
}

//remove
const removeFromArray = (e, array, item) => {
  const listIndex = findIndexInArray(e, listArray, item);
  array.splice(listIndex, 1)
  setToLocal()
  handlePaintLists()
}

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
      const lastIndexCard = list.cards.length - 1;
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