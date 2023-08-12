// Side panel and page padding
var sidePanel = document.querySelector('#panel');
var togglePanel = document.querySelector('#toggle');
var main = document.querySelector('main');
togglePanel === null || togglePanel === void 0 ? void 0 : togglePanel.addEventListener("click", function () {
    sidePanel === null || sidePanel === void 0 ? void 0 : sidePanel.classList.toggle('side-panel-open');
    if (sidePanel === null || sidePanel === void 0 ? void 0 : sidePanel.classList.contains('side-panel-open')) {
        main === null || main === void 0 ? void 0 : main.classList.add('margin');
    }
    else {
        main === null || main === void 0 ? void 0 : main.classList.remove('margin');
    }
    // console.log(sidePanel?.classList.contains('side-panel-open'));
});
// Vertical ellipsis menu
var dotMenu = document.querySelector('#dot-menu');
var toggleMenu = document.querySelector('.toggle-menu');
toggleMenu === null || toggleMenu === void 0 ? void 0 : toggleMenu.addEventListener("click", function () {
    dotMenu === null || dotMenu === void 0 ? void 0 : dotMenu.classList.toggle('show');
    dotMenu === null || dotMenu === void 0 ? void 0 : dotMenu.classList.toggle('hide');
    // console.log(dotMenu?.classList);
});
var addTask = document.querySelector('.add-task');
var headerOverlay = document.querySelector('#header-overlay');
var overlayCloseButton = document.querySelector('#overlay-close');
addTask === null || addTask === void 0 ? void 0 : addTask.addEventListener("click", function () {
    headerOverlay === null || headerOverlay === void 0 ? void 0 : headerOverlay.classList.toggle('overlay-show');
    headerOverlay === null || headerOverlay === void 0 ? void 0 : headerOverlay.classList.toggle('overlay-hide');
});
overlayCloseButton === null || overlayCloseButton === void 0 ? void 0 : overlayCloseButton.addEventListener("click", function () {
    headerOverlay === null || headerOverlay === void 0 ? void 0 : headerOverlay.classList.toggle('overlay-hide');
    headerOverlay === null || headerOverlay === void 0 ? void 0 : headerOverlay.classList.toggle('overlay-show');
});
var popPanelOverlay = document.querySelector('#pop-panel-overlay');
var popPanelClose = document.querySelector('#pop-panel-close');
var popPanelOpen = document.querySelector('#pop-panel-open');
popPanelOpen === null || popPanelOpen === void 0 ? void 0 : popPanelOpen.addEventListener("click", function () {
    popPanelOverlay === null || popPanelOverlay === void 0 ? void 0 : popPanelOverlay.classList.toggle('pop-panel-hide');
    popPanelOverlay === null || popPanelOverlay === void 0 ? void 0 : popPanelOverlay.classList.toggle('pop-panel-show');
});
popPanelClose === null || popPanelClose === void 0 ? void 0 : popPanelClose.addEventListener('click', function () {
    popPanelOverlay === null || popPanelOverlay === void 0 ? void 0 : popPanelOverlay.classList.toggle('pop-panel-show');
    popPanelOverlay === null || popPanelOverlay === void 0 ? void 0 : popPanelOverlay.classList.toggle('pop-panel-hide');
});
// Delete board confirmation
var deleteBoard = document.querySelector('#delete-board');
var deleteBoardConfirm = document.querySelector('#delete-board-overlay');
var deleteBoardClose = document.querySelector('#delete-overlay-close');
deleteBoard === null || deleteBoard === void 0 ? void 0 : deleteBoard.addEventListener('click', function () {
    deleteBoardConfirm === null || deleteBoardConfirm === void 0 ? void 0 : deleteBoardConfirm.classList.toggle('delete-show');
    deleteBoardConfirm === null || deleteBoardConfirm === void 0 ? void 0 : deleteBoardConfirm.classList.toggle('delete-hide');
});
deleteBoardClose === null || deleteBoardClose === void 0 ? void 0 : deleteBoardClose.addEventListener('click', function () {
    deleteBoardConfirm === null || deleteBoardConfirm === void 0 ? void 0 : deleteBoardConfirm.classList.toggle('delete-show');
    deleteBoardConfirm === null || deleteBoardConfirm === void 0 ? void 0 : deleteBoardConfirm.classList.toggle('delete-hide');
});
// edit board menu
var editBoard = document.querySelector('#edit-board');
var editBoardConfirm = document.querySelector('#edit-board-overlay');
var editBoardClose = document.querySelector('#edit-overlay-close');
editBoard === null || editBoard === void 0 ? void 0 : editBoard.addEventListener('click', function () {
    editBoardConfirm === null || editBoardConfirm === void 0 ? void 0 : editBoardConfirm.classList.toggle('edit-show');
    editBoardConfirm === null || editBoardConfirm === void 0 ? void 0 : editBoardConfirm.classList.toggle('edit-hide');
});
editBoardClose === null || editBoardClose === void 0 ? void 0 : editBoardClose.addEventListener('click', function () {
    editBoardConfirm === null || editBoardConfirm === void 0 ? void 0 : editBoardConfirm.classList.toggle('edit-show');
    editBoardConfirm === null || editBoardConfirm === void 0 ? void 0 : editBoardConfirm.classList.toggle('edit-hide');
});
var page = document.querySelector('html');
var toggleViewMode = document.querySelector('#toggle-view-mode');
var popViewMode = document.querySelector('#pop-view-mode');
toggleViewMode === null || toggleViewMode === void 0 ? void 0 : toggleViewMode.addEventListener('click', function () {
    page === null || page === void 0 ? void 0 : page.classList.toggle('dark');
});
popViewMode === null || popViewMode === void 0 ? void 0 : popViewMode.addEventListener('click', function () {
    page === null || page === void 0 ? void 0 : page.classList.toggle('dark');
});
