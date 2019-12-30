var opener = document.getElementById('opener');
var modalWrapper = document.getElementById('modal');
var modalOverlay = modalWrapper.querySelector('.modal-overlay');
var modal = modalWrapper.querySelector('.modal');
var closer = modal.querySelector('.modal__btn-closer');
var btnSuccess = modal.querySelector('.btn-success');
var btnCancel = modal.querySelector('.btn-cancel');

const isModalOpened = () => modalWrapper.classList.contains('open');

function openModal(e) {
  setTimeout(() => {
    e.preventDefault();
    if (!isModalOpened()) {
      modalWrapper.classList.add('open');
      closer.tabindex = 1;
      btnCancel.tabindex = 0;
      btnSuccess.tabindex = 3;
      btnCancel.focus();
    }
  });
}

function closeModal(e) {
  setTimeout(() => {
    e.preventDefault();
    if (isModalOpened()) {
      modalWrapper.classList.remove('open');
      closer.removeAttribute("tabindex");
      btnCancel.removeAttribute("tabindex");
      btnSuccess.removeAttribute("tabindex");
      btnCancel.blur();
    }
  });
}

opener.addEventListener('click', openModal);
[closer, modalOverlay, btnSuccess, btnCancel].forEach(el => el.addEventListener('click', closeModal));