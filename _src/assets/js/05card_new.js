'use strict';

const newCardBtn = document.querySelector('.app-list-footer');


const hideNameNewCard = e => toggle(findItem(e, '.app-list').querySelectorAll('.js-card-new, .app-list-footer'));

const nameNewCard = e => {
  const list = findItem(e, '.app-list');
  const input = list.querySelector('.js-card-name');
  toggle(list.querySelectorAll('.js-card-new, .app-list-footer'));
  resetInput(input);
}

const createCardDOM = (title, id, cardsArea) => {

  //card container
  const card = document.createElement('article');
  card.setAttribute('class', 'js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm');
  card.setAttribute('title', 'Abrir la tarjeta');
  card.setAttribute('id', id)

  const tagsArea = document.createElement('div');
  tagsArea.setAttribute('class', 'js-tags-area');

  const cardTitle = document.createElement('h3');
  // cardTitle.setAttribute('class', 'card-title'); 
  const cardTitleContent = document.createTextNode(title);

  const cardInput = document.createElement('input');
  cardInput.setAttribute('class', 'card-title hidden'); 
  cardInput.setAttribute('value', title); 
  

  const tasksArea = document.createElement('div');
  tasksArea.setAttribute('class', 'text-black-50');

  const cardBtns = document.createElement('div');
  cardBtns.setAttribute('class', 'app-card-btns btn-group-vertical btn-group-sm');

  const cardBtnsUp = document.createElement('button');
  cardBtnsUp.setAttribute('class', 'card-btn-up btn btn-light text-muted border shadow-sm app-card-move-up');
  cardBtnsUp.setAttribute('type', 'button');
  cardBtnsUp.setAttribute('title', 'Mover esta tarjeta hacia arriba');

  const cardBtnsUpIcon = document.createElement('span');
  cardBtnsUpIcon.setAttribute('class', 'fas fa-arrow-up');

  const cardBtnsDown = document.createElement('button');
  cardBtnsDown.setAttribute('class', 'card-btn-down btn btn-light text-muted border shadow-sm app-card-move-down');
  cardBtnsDown.setAttribute('type', 'button');
  cardBtnsDown.setAttribute('title', 'Mover esta tarjeta hacia abajo');

  const cardBtnsDownIcon = document.createElement('span');
  cardBtnsDownIcon.setAttribute('class', 'fas fa-arrow-down');

  //structure
  cardsArea.appendChild(card);
  card.appendChild(tagsArea);
  card.appendChild(cardTitle);
  card.appendChild(cardInput);
  card.appendChild(tasksArea);
  card.appendChild(cardBtns);

  cardTitle.appendChild(cardTitleContent);

  cardBtns.appendChild(cardBtnsUp);
  cardBtns.appendChild(cardBtnsDown);

  cardBtnsUp.appendChild(cardBtnsUpIcon);
  cardBtnsDown.appendChild(cardBtnsDownIcon);

  addListenersToCard(card);
  createEditCardDOM(title, 'lista', id);
  return card;
}

const addListenersToCard = card => {
  const cardTitle = card.querySelector('.card-title');
  const cardBtnsUp = card.querySelector('.card-btn-up');
  const cardBtnsDown = card.querySelector('.card-btn-down');

  cardTitle.addEventListener('click', showCard);
  cardBtnsUp.addEventListener('click', moveCardUp);
  cardBtnsDown.addEventListener('click', moveCardDown);
}

const createEditCardDOM = (title, list, id) => {
  const app = document.querySelector('.edit');

  // edit CONTAINER
  const container = document.createElement('div');
  container.setAttribute('class', 'js-edit js-edit-close app-edit modal d-none');
  container.setAttribute('tabindex', '1');
  container.setAttribute('id', id)

  const column = document.createElement('section');
  column.setAttribute('class', 'js-edit-modal modal-dialog modal-dialog-centered modal-lg');

  const edit = document.createElement('div');
  edit.setAttribute('class', 'modal-content bg-light shadow border-0');

  const form = document.createElement('form');

  // edit HEADER
  const headerBox = document.createElement('div');
  headerBox.setAttribute('class', 'modal-header border-bottom-0');

  const headerTitle = document.createElement('h5');
  headerTitle.setAttribute('class', 'modal-title d-flex w-100');

  const headerIcon = document.createElement('span');
  headerIcon.setAttribute('class', 'fas fa-columns mt-3 mr-2 text-muted');

  const headerInputBox = document.createElement('div');
  headerInputBox.setAttribute('class', 'w-100');

  const headerInput = document.createElement('input');
  headerInput.setAttribute('class', 'app-edit-title form-control mb-0 border-0');
  headerInput.setAttribute('placeholder', 'Escribe el título de tu tarjeta aquí');
  headerInput.setAttribute('type', 'text');
  headerInput.setAttribute('value', title);

  const headerInList = document.createElement('small');
  headerInList.setAttribute('class', 'app-edit-subtitle d-block mt-0 text-muted');

  const headerInListContent = document.createTextNode('en la lista ');

  const headerInListStrong = document.createElement('strong');
  const headerInListStrongContent = document.createTextNode(list);

  const headerButton = document.createElement('button');
  headerButton.setAttribute('class', 'js-edit-close close');
  headerButton.setAttribute('type', 'button');
  headerButton.setAttribute('data-dismiss', 'modal');

  const headerButtonIcon = document.createElement('span');

  const headerButtonIconContent = document.createTextNode('x');

  // edit CONTENT
  const contentBox = document.createElement('div');
  contentBox.setAttribute('class', 'modal-body');

  const contentRow = document.createElement('div');
  contentRow.setAttribute('class', 'row');

  // edit CONTENT left column
  const contentLeft = document.createElement('div');
  contentLeft.setAttribute('class', 'col-xl-9 col-8');

  // edit CONTENT left column description
  const descriptionBox = document.createElement('div');
  descriptionBox.setAttribute('class', 'container-fluid mb-4');

  const descriptionRow = document.createElement('div');
  descriptionRow.setAttribute('class', 'row');

  const descriptionMargin = document.createElement('div');
  descriptionMargin.setAttribute('class', 'col-1 pl-0 pr-0');

  const descriptionMarginIcon = document.createElement('span');
  descriptionMarginIcon.setAttribute('class', 'fas fa-align-left text-muted');

  const descriptionContentArea = document.createElement('div');
  descriptionContentArea.setAttribute('class', 'col-11 pl-0 pr-0');

  const descriptionTitle = document.createElement('h6');
  descriptionTitle.setAttribute('class', 'h6');

  const descriptionTitleContent = document.createTextNode('Descripción');

  const descriptionTextArea = document.createElement('textarea');
  descriptionTextArea.setAttribute('class', 'app-edit-textarea');
  descriptionTextArea.setAttribute('placeholder', 'Escribe una descripción de tu tarjeta')

  // edit CONTENT left column tasks
  const tasksBox = document.createElement('div');
  tasksBox.setAttribute('class', 'container-fluid mb-4');

  const tasksBoxRow = document.createElement('div');
  tasksBoxRow.setAttribute('class', 'row')

  const tasksMargin = document.createElement('div');
  tasksMargin.setAttribute('class', 'col-1 pl-0 pr-0');

  const tasksMarginIcon = document.createElement('span');
  tasksMarginIcon.setAttribute('class', 'far fa-check-square text-muted');

  const tasksContentArea = document.createElement('div');
  tasksContentArea.setAttribute('class', 'col-11 pl-0 pr-0');

  const tasksTitle = document.createElement('input');
  tasksTitle.setAttribute('class', 'h6 mb-3');
  tasksTitle.setAttribute('type', 'text');
  tasksTitle.setAttribute('placeholder', 'Añade un título para tu lista de tareas');
  tasksTitle.setAttribute('value', 'Checklist');

  const tasksProgressBarBox = document.createElement('div');
  tasksProgressBarBox.setAttribute('class', 'app-edit-progress progress mb-3');

  const tasksProgressBar = document.createElement('div');
  tasksProgressBar.setAttribute('class', 'progress-bar');
  tasksProgressBar.setAttribute('style', 'width: 60%;');

  const tasksChecklistArea = document.createElement('div');

  const tasksBtnBox = document.createElement('div');
  tasksBtnBox.setAttribute('class', 'custom-control custom-checkbox mb-2');

  const newTaskBtn = document.createElement('button');
  newTaskBtn.setAttribute('class', 'btn btn-primary btn-sm mb-2 w-100 text-left');
  newTaskBtn.setAttribute('type', 'button');

  const newTaskBtnContent = document.createTextNode('Añadir tarea');

  // edit CONTENT right column
  const contentRight = document.createElement('div');
  contentRight.setAttribute('class', 'col-xl-3 col-4');

  const addSubtitle = document.createElement('h6');
  addSubtitle.setAttribute('class', 'h6 text-uppercase');

  const tagsTitle = document.createTextNode('Añadir a la tarjeta');

  const editBtn = document.createElement('button');
  editBtn.setAttribute('class', 'btn btn-primary btn-sm mb-2 w-100 text-left');
  editBtn.setAttribute('type', 'button');

  const tagBtn = document.createTextNode('Etiquetas');

  const actionsSubtitle = document.createElement('h6');
  actionsSubtitle.setAttribute('class', 'h6 text-uppercase');

  const actionsTitle = document.createTextNode('Acciones');

  const copyBtn = document.createElement('button');
  copyBtn.setAttribute('class', 'btn btn-primary btn-sm mb-2 w-100 text-left');
  copyBtn.setAttribute('type', 'button');

  const copyBtnIcon = document.createElement('span');
  copyBtnIcon.setAttribute('class', 'fas fa-copy mr-2')

  const copyBtnContent = document.createTextNode('Copiar');

  const moveBtn = document.createElement('button');
  moveBtn.setAttribute('class', 'btn btn-primary btn-sm mb-2 w-100 text-left');
  moveBtn.setAttribute('type', 'button');

  const moveBtnIcon = document.createElement('span');
  moveBtnIcon.setAttribute('class', 'fas fa-trash-alt mr-2')

  const moveBtnContent = document.createTextNode('Mover');

  const removeBtn = document.createElement('button');
  removeBtn.setAttribute('class', 'btn btn-primary btn-sm mb-2 w-100 text-left');
  removeBtn.setAttribute('type', 'button');

  const removeBtnIcon = document.createElement('span');
  removeBtnIcon.setAttribute('class', 'fas fa-trash-alt mr-2')

  const removeBtnContent = document.createTextNode('Borrar');

  // STRUCTURE
  app.appendChild(container)

  container.appendChild(column);
  column.appendChild(edit);
  edit.appendChild(form);
  form.appendChild(headerBox);
  form.appendChild(contentBox);

  // STRUCTURE header
  headerBox.appendChild(headerTitle);
  headerBox.appendChild(headerButton);

  headerTitle.appendChild(headerIcon);
  headerTitle.appendChild(headerInputBox);

  headerInputBox.appendChild(headerInput);
  headerInputBox.appendChild(headerInList);

  headerInList.appendChild(headerInListContent);
  headerInList.appendChild(headerInListStrong);

  headerInListStrong.appendChild(headerInListStrongContent);

  headerButton.appendChild(headerButtonIconContent);

  // STRUCTURE content
  contentBox.appendChild(contentRow);

  contentRow.appendChild(contentLeft);
  contentRow.appendChild(contentRight);

  contentLeft.appendChild(descriptionBox);
  contentLeft.appendChild(tasksBox);

  // STRUCTURE content description
  descriptionBox.appendChild(descriptionRow);

  descriptionRow.appendChild(descriptionMargin);
  descriptionRow.appendChild(descriptionContentArea);

  descriptionMargin.appendChild(descriptionMarginIcon);

  descriptionContentArea.appendChild(descriptionTitle);

  descriptionTitle.appendChild(descriptionTitleContent);
  descriptionTitle.appendChild(descriptionTextArea);

  // STRUCTURE content tasks
  tasksBox.appendChild(tasksBoxRow);

  tasksBoxRow.appendChild(tasksMargin);
  tasksBoxRow.appendChild(tasksContentArea);

  tasksMargin.appendChild(tasksMarginIcon);

  tasksContentArea.appendChild(tasksTitle);
  tasksContentArea.appendChild(tasksProgressBarBox);
  tasksContentArea.appendChild(tasksChecklistArea);
  tasksContentArea.appendChild(tasksBtnBox);

  tasksProgressBarBox.appendChild(tasksProgressBar);

  tasksBtnBox.appendChild(newTaskBtn);
  newTaskBtn.appendChild(newTaskBtnContent);

  // STRUCTURE column
  contentRight.appendChild(addSubtitle);
  contentRight.appendChild(editBtn);
  contentRight.appendChild(actionsSubtitle);
  contentRight.appendChild(copyBtn);
  contentRight.appendChild(moveBtn);
  contentRight.appendChild(removeBtn);

  addSubtitle.appendChild(tagsTitle);
  editBtn.appendChild(tagBtn);

  actionsSubtitle.appendChild(actionsTitle);

  copyBtn.appendChild(copyBtnIcon);
  copyBtn.appendChild(copyBtnContent);

  moveBtn.appendChild(moveBtnIcon);
  moveBtn.appendChild(moveBtnContent);

  removeBtn.appendChild(removeBtnIcon);
  removeBtn.appendChild(removeBtnContent);

  addListenersToEdit(container);
}

const addListenersToEdit = card => {
  const cardArea = card.querySelector('.js-edit-modal');
  const closeBtn = card.querySelector('.js-edit-close');

  closeBtn.addEventListener('click', hideEdit);
  cardArea.addEventListener('click', preventEditClosing);
}

const createTaskDOM = (title, id) => {
  const taskBox = document.createElement('div');
  taskBox.setAttribute('class', 'custom-control custom-checkbox mb-2');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('class', 'custom-control-input');
  checkbox.setAttribute('type', 'checkbos');
  checkbox.setAttribute('id', id)

  const label = document.createElement('label');
  label.setAttribute('class', 'custom-control-label');
  label.setAttribute('for', id);

  const taskTitle = document.createTextNode(title);

  taskBox.appendChild(checkbox);
  taskBox.appendChild(label);

  label.appendChild(taskTitle);
}

const moveCard = (e, cardPosition) => {
  const currentList = findItem(e, '.app-list');
  const card = findItem(e, '.js-card');

  for (let list of listArray) {
    if (list.id === currentList.id) {
      const cardIndex = list.cards.findIndex(obj => obj.id === card.id);
      const cardObj = list.cards.find(obj => obj.id === card.id)
      list.cards.splice(cardIndex, 1);
      list.cards.splice(cardIndex + cardPosition, 0, cardObj);
    }
  }
  setToLocal();
  handlePaintLists();
}

const moveCardUp = e => moveCard(e, - 1);
const moveCardDown = e => moveCard(e, 1);

const addNewCard = e => {
  const list = findItem(e, '.app-list');
  const title = list.querySelector('.js-card-name').value;
  const cardsArray = listArray.find(obj => obj.id === list.id).cards;
  const cardsArea = list.querySelector('.js-cards-area');
  const toggleArr = findItem(e, '.app-list').querySelectorAll('.js-card-new, .app-list-footer');

  addNew(title, toggleArr, 'card', cardsArray, createCardDOM(title, cardCounter, cardsArea), '.card-title')

  // if (title !== '') {
  //   updateCounter('card')
  //   toggle(findItem(e, '.app-list').querySelectorAll('.js-card-new, .app-list-footer'));
  //   saveToArray(cardsArray, createCardDOM(title, cardCounter, cardsArea), '.card-title');
  //   removeSidesBtns();
  // }
}