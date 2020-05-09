'use strict';

// edit

const showCard = e => {
  // const cardTitle = e.currentTarget.innerHTML;
  // const list = findItem(e, '.app-list');
  // const listTitle = list.querySelector('.app-list-input').value;

  const allEdit = document.querySelectorAll('.js-edit');
  const cardId = findItem(e, '.js-card').id;
  allEdit.forEach(edit => edit.classList.add('d-none'))

  for (let edit of allEdit) {
    if (edit.id === cardId) {
      edit.classList.toggle('show');
      edit.classList.toggle('d-none');
    }
  }
}

const hideEdit = e => {
  const currentEdit = findItem(e, '.js-edit');
  console.log(currentEdit)
  currentEdit.classList.toggle('show');
}

// const toggleEdit = ev => {
//   ev.stopPropagation();
//   document.querySelector('.js-edit').classList.toggle('show');
//   document.querySelector('.js-edit').classList.remove('d-none');
// };

// document.querySelectorAll('.js-card, .js-edit-close').forEach(card => card.addEventListener('click', toggleEdit));

const preventEditClosing = ev => ev.stopPropagation();
// document.querySelector('.js-edit-modal').addEventListener('click', preventEditClosing);

