// Side panel and page padding
const sidePanel = document.querySelector('#panel');
const togglePanel = document.querySelector('#toggle');
const main = document.querySelector('main');

togglePanel?.addEventListener("click", () => {
  sidePanel?.classList.toggle('side-panel-open');
  if (sidePanel?.classList.contains('side-panel-open')) {
    main?.classList.add('margin');
  }
  else {
    main?.classList.remove('margin');
  }
  // console.log(sidePanel?.classList.contains('side-panel-open'));
});

// Vertical ellipsis menu
const dotMenu = document.querySelector('#dot-menu');
const toggleMenu = document.querySelector('.toggle-menu');

toggleMenu?.addEventListener("click", () => {
  dotMenu?.classList.toggle('show');
  dotMenu?.classList.toggle('hide');
  // console.log(dotMenu?.classList);
});

const addTask = document.querySelector('.add-task');
const headerOverlay = document.querySelector('#header-overlay');
const overlayCloseButton = document.querySelector('#overlay-close');

addTask?.addEventListener("click", () => {
  headerOverlay?.classList.toggle('overlay-show');
  headerOverlay?.classList.toggle('overlay-hide');
});

overlayCloseButton?.addEventListener("click", () => {
  headerOverlay?.classList.toggle('overlay-hide');
  headerOverlay?.classList.toggle('overlay-show');
});

const popPanelOverlay = document.querySelector('#pop-panel-overlay');
const popPanelClose = document.querySelector('#pop-panel-close');
const popPanelOpen = document.querySelector('#pop-panel-open');

popPanelOpen?.addEventListener("click", () => {
  popPanelOverlay?.classList.toggle('pop-panel-hide');
  popPanelOverlay?.classList.toggle('pop-panel-show');
});

popPanelClose?.addEventListener('click', () => {
  popPanelOverlay?.classList.toggle('pop-panel-show');
  popPanelOverlay?.classList.toggle('pop-panel-hide');
});
// Delete board confirmation
const deleteBoard = document.querySelector('#delete-board');
const deleteBoardConfirm = document.querySelector('#delete-board-overlay');
const deleteBoardClose = document.querySelector('#delete-overlay-close');

deleteBoard?.addEventListener('click', () => {
  deleteBoardConfirm?.classList.toggle('delete-show');
  deleteBoardConfirm?.classList.toggle('delete-hide');
});

deleteBoardClose?.addEventListener('click', () => {
  deleteBoardConfirm?.classList.toggle('delete-show');
  deleteBoardConfirm?.classList.toggle('delete-hide');
});
// edit board menu
const editBoard = document.querySelector('#edit-board');
const editBoardConfirm = document.querySelector('#edit-board-overlay');
const editBoardClose = document.querySelector('#edit-overlay-close');

editBoard?.addEventListener('click', () => {
  editBoardConfirm?.classList.toggle('edit-show');
  editBoardConfirm?.classList.toggle('edit-hide');
});

editBoardClose?.addEventListener('click', () => {
  editBoardConfirm?.classList.toggle('edit-show');
  editBoardConfirm?.classList.toggle('edit-hide');
});

const page = document.querySelector('html');
const toggleViewMode = document.querySelector('#toggle-view-mode');
const popViewMode = document.querySelector('#pop-view-mode');

toggleViewMode?.addEventListener('click', () => {
  page?.classList.toggle('dark');
});

popViewMode?.addEventListener('click', () => {
  page?.classList.toggle('dark');
});