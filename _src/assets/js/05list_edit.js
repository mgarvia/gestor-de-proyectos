'use strict'

const paintSavedLists = array => {
  createdListsContainer.innerHTML = '';
  array.map(obj => list.innerHTML = createListDOM(obj.title, obj.id).innerHTML);
  // const objIndex = array.findIndex(obj => obj.id);
  const lastIndex = array.length - 1;
  for (let obj of array) {
    const objIndex = array.indexOf(obj);
    console.log(objIndex);
    if (objIndex === 0) {
      const btnLeft = document.querySelector('.js-btn-lft');
      btnLeft.classList.add('hidden');
    }
    if (objIndex === lastIndex) {
      const btnRight = document.querySelector('.js-btn-rgt');
      btnRight.classList.add('hidden');
    }
  }
  console.log(lastIndex);
}

const updateListArray = e => {
  const listId = e.currentTarget.parentElement.parentElement.parentElement.id
  const listObj = listArray.find(obj => obj.id === listId)
  listObj.title = e.currentTarget.value;
  setListToLocal()
}

const findIndex = e => {
  const listId = e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.id;
  const listIndex = listArray.findIndex(obj => obj.id === listId);
  return listIndex
}

const findObj = e => {
  const listId = e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.id;
  const list = listArray.find(obj => obj.id === listId);
  return list
}

const removeList = e => {
  const listIndex = findIndex(e)
  // e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.id;
  // const listIndex = listArray.findIndex(obj => obj.id === listId)
  listArray.splice(listIndex, 1)
  setListToLocal()
  paintSavedLists(listArray)
}

const moveToLeft = e => {
  const list = findObj(e)
  const listIndex = findIndex(e);

  // const reversedItems = listArray.slice(listIndex-1, listIndex+1).reverse();
  // const newArray = listArray.splice(listIndex-1, 2, reversedItems);
  listArray.splice(listIndex, 1);
  listArray.splice(listIndex - 1, 0, list);
  paintSavedLists(listArray)
  console.log(listArray);
}

window.addEventListener('load', paintSavedLists(listArray));