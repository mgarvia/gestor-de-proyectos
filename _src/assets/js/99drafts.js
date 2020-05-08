//DOM CREATE NEW LIST

  // input
  // const listName = document.createElement('div');
  // listName.setAttribute('class', 'js-new-list p-1 bg-primary rounded-sm  shadow');

  // const listNameInput = document.createElement('input');
  // listNameInput.setAttribute('class', 'js-input-name app-list-input form-control form-control-sm');
  // listNameInput.setAttribute('placeholder', 'Nueva lista');
  // listNameInput.setAttribute('type', 'text');
  // listNameInput.setAttribute('title', 'Crear una lista nueva');

  // // buttons

  // const listNameBtns = document.createElement('div');

  // const listNameBtnsAdd = document.createElement('button');
  // listNameBtnsAdd.setAttribute('class', 'js-add-btn btn btn-light btn-outline-primary btn-sm  shadow-sm');
  // listNameBtnsAdd.setAttribute('type', 'button');
  // listNameBtnsAdd.setAttribute('title', 'Crear lista"');

  // const listNameBtnsAddContent = document.createTextNode('Añadir lista');

  // const listNameBtnsRemove = document.createElement('button');
  // listNameBtnsRemove.setAttribute('class', 'btn');
  // listNameBtnsRemove.setAttribute('type', 'button');
  // listNameBtnsRemove.setAttribute('title', 'Borrar lista');

  // const listNameBtnsRemoveContent = document.createTextNode('X');

  // document.querySelector('.js-new-list').appendChild(listName);
  // listName.appendChild(listNameInput);
  // listName.appendChild(listNameBtns);

  // listNameBtns.appendChild(listNameBtnsAdd);
  // listNameBtns.appendChild(listNameBtnsRemove);

  // listNameBtnsAdd.appendChild(listNameBtnsAddContent);
  // listNameBtnsRemove.appendChild(listNameBtnsRemoveContent);



  // HTML:

  //main - 3

  // <div class="app-list">
  //     <div class="p-1 rounded-sm bg-primary shadow">
  //       <partial src="_list_header.html" title="Backlog"></partial>
  //       <partial src="_card.html" title="Publicar en GitHub Pages"></partial>
  //       <partial src="_list_footer.html"></partial>
  //     </div>
  //   </div> -->

  //   <!-- <div class="app-list">
  //   <div class="p-1 rounded-sm bg-primary shadow">
  //     <partial src="_list_header.html" title="Por hacer"></partial>
  //     <partial src="_card.html" title="Unificar funcionalidad"></partial>
  //     <partial src="_card.html" title="Pintar el DOM"></partial>
  //     <partial src="_list_footer.html"></partial>
  //   </div>
  // </div> -->

  //   <!-- <div class="app-list">
  //   <div class="p-1 rounded-sm bg-primary shadow">
  //     <partial src="_list_header.html" title="Haciendo"></partial>
  //     <partial src="_card.html" title="Escuchar eventos"></partial>
  //     <partial src="_list_footer.html"></partial>
  //   </div>
  // </div> -->

  //   <!-- <div class="app-list">
  //   <div class="p-1 rounded-sm bg-primary shadow">
  //     <partial src="_list_header.html" title="Hecho"></partial>
  //     <partial src="_card.html" title="Manipular datos"></partial>
  //     <partial src="_card.html" title="Guardar los datos en local storage"></partial>
  //     <partial src="_card.html" title="Obtener datos del API"></partial>
  //     <partial src="_list_footer.html"></partial>
  //   </div>
  // </div>


  // const createNewList = e => newListName.value !== '' ? createListDOM(newListName.value, listCounter) : e.preventDefault();

    // list LISTENERS
  // listHeaderInput.addEventListener('keyup', updateListArray);
  // listHeaderBtnRemove.addEventListener('click', removeList);
  // listHeaderBtnLeft.addEventListener('click', moveToLeft);
  // listHeaderBtnRight.addEventListener('click', moveToRight);
  // listFooter.addEventListener('click', nameNewCard);

  // cardNameBtnsAdd.addEventListener('click', addNewCard);
  // cardNameBtnsRemove.addEventListener('click', hideNameNewCard);

  // const hideCreateList = () => {
//   newListBtn.classList.remove('hidden');
//   createListBox.classList.add('hidden');
// }