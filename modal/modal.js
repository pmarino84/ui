var opener = document.getElementById('opener');
var modal = document.getElementById('modal');
var modalOverlay = modal.querySelector('.modal-overlay');
var closer = modal.querySelector('.modal__btn-closer');
var btnSuccess = modal.querySelector('.btn-success');
var btnCancel = modal.querySelector('.btn-cancel');

const isModalOpened = () => modal.classList.contains('open');

function openModal() {
  if(!isModalOpened()) {
    modal.classList.add('open');
  }
}

function closeModal() {
  if(isModalOpened()) {
    modal.classList.remove('open');
  }
}

opener.addEventListener('click', openModal);
[closer, modalOverlay, btnSuccess, btnCancel].forEach(el => el.addEventListener('click', closeModal));