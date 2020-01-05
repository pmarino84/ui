var toolbar = document.querySelector('.toolbar');
var opener = document.querySelector('.toolbar-opener');
var closer = document.querySelector('.toolbar-closer');

const TOOLBAR_OPEN_SELECTOR = 'toolbar--open';

const isToolbarOpened = () => toolbar.classList.contains(TOOLBAR_OPEN_SELECTOR);

const openToolbar = () => toolbar.classList.add(TOOLBAR_OPEN_SELECTOR);
const closeToolbar = () => toolbar.classList.remove(TOOLBAR_OPEN_SELECTOR);
const toggleToolbar = () => {
  if (isToolbarOpened()) {
    closeToolbar();
  } else {
    openToolbar();
  }
};

opener.addEventListener('click', () => {
  console.log("Clicked on opener button");
  toggleToolbar();
});

closer.addEventListener('click', () => {
  console.log("Clicked on closer button");
  closeToolbar();
});