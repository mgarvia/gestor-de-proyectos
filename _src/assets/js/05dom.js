'use strict';

const createDOM = (parent, data) => {
  const element = document.createElement(data.tag);
  if (data.class !== undefined) {
    element.classList.add(...data.class.split(' '));
    Object.assign(element, data.attributes);
  }
  parent.appendChild(element);
  return element;
}

const createButton = (parent, data, icon, name) => {
  const button = createDOM(parent, {tag: 'button', class: data.class, attributes: { type: 'button', title: data.attributes.title}});
  if (icon !== undefined) {
    createDOM(button, {tag: 'span', class: icon });
  }
  if (name !== undefined) {
    const text = document.createTextNode(name);
    button.appendChild(text);
  }
  return button
}

const createListDOM = (title, id) => {
  // list CONTAINER
  const list = createDOM(createdListsContainer, {tag: 'div', class: 'app-list', attributes: {id: id}})
  const listBox = createDOM(list, {tag: 'div', class: 'p-1 rounded-sm bg-primary shadow'});

  // list HEADER
  const listHeader = createDOM(listBox, {tag: 'form', class: 'app-list-form align-middle p-1 position-relative'});
  const listHeaderInput = createDOM(listHeader, {tag: 'input', class: 'app-list-input form-control form-control-sm', attributes: {placeholder: 'Nueva lista', type: 'text', value: title, title: 'Crear una lista nueva'}});

  // list HEADER buttons
  const listHeaderBox = createDOM(listHeader, {tag: 'div', class: 'app-list-options'});
  const listHeaderIcon = createDOM(listHeaderBox, {tag: 'span', class: 'pl-2 pr-2 text-white-50 fas fa-ellipsis-v'})
  const listHeaderBtns = createDOM(listHeaderBox, {tag: 'div', class: 'app-list-btns btn-group btn-group-sm'});

  const listBtnRemove = createButton(listHeaderBtns, {class: 'list-btn-remove btn btn-light text-muted border shadow-sm', attributes: {title: 'Borrar esta tarjeta'}}, 'fas fa-trash-alt');
  const listBtnLeft = createButton(listHeaderBtns, {class: 'js-btn-lft btn btn-light text-muted border shadow-sm app-list-move-left', attributes: {title: 'Mover esta lista hacia la izquierda'}}, 'fas fa-arrow-left');
  const listBtnRight = createButton(listHeaderBtns, {class: 'js-btn-rgt btn btn-light text-muted border shadow-sm app-list-move-right', attributes: {title: 'Mover esta lista hacia la derecha'}}, 'fas fa-arrow-right');

  // list CARDS
  const listCards = createDOM(listBox, {tag: 'div', class: 'js-list-cards'});
  const listCardsArea = createDOM(listCards,  {tag: 'div', class: 'js-cards-area'});
  const cardName = createDOM(listCards, {tag: 'div', class: 'js-card-new hidden p-1 rounded-sm shadow'});
  const cardNameInput = createDOM(cardName, {tag: 'textarea', class: 'js-card-name form-control form-control-sm', attributes: {placeholder: 'Introduzca un título para esta tarjeta', title: 'Crear una tarjeta nueva'}})

  // list CARDS buttons
  const cardBtns = createDOM(cardName, {tag: 'div'});
  const cardBtnsAdd = createButton(cardBtns, {class: 'card-btn-add btn btn-light btn-outline-primary btn-sm shadow-sm', attributes: {title: 'Crear tarjeta'}},undefined, 'Añadir tarjeta');
  const cardBtnsRemove = createButton(cardBtns, {class: 'card-btn-remove btn', attributes: {title: 'Borrar tarjeta'}}, 'fas fa-times')

  // list FOOTER
  const listFooter = createButton(listBox, {class: 'app-list-footer ml-1 btn btn-primary btn-sm text-white-50', attributes: {title: 'Añadir una nueva tarjeta'}}, 'fas fa-plus', 'Añadir otra tarjeta');

  addListenersToList(list);
  return list
}