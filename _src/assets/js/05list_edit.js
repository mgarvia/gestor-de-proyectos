'use strict'

const removeSidesBtns = () => {
  const allLists = document.querySelectorAll('.app-list');
  const lastIndex = listArray.length -1;
  const firstList = allLists.item(0);
  const lastList = allLists.item(lastIndex);
  const showAllBtns = document.querySelectorAll('.js-btn-lft, .js-btn-rgt').forEach(btn => btn.classList.remove('hidden'));

  for (let obj of listArray) {
    const objIndex = listArray.indexOf(obj);
    if (objIndex === 0) {
      const btnLeft = firstList.querySelector('.js-btn-lft');
      btnLeft.classList.add('hidden');
    }
    if (objIndex === lastIndex) {
      const btnRight = lastList.querySelector('.js-btn-rgt');
      btnRight.classList.add('hidden');
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

const moveToLeft = e => {
  const list = findObj(e)
  const listIndex = findIndex(e);

  listArray.splice(listIndex, 1);
  listArray.splice(listIndex - 1, 0, list);
  handlePaintLists();
}

const moveToRight = e => {
  const list = findObj(e)
  const listIndex = findIndex(e);

  listArray.splice(listIndex, 1);
  listArray.splice(listIndex + 1, 0, list);
  handlePaintLists(listArray)
}