let formEl;
let btnEl;
let usernameEl;
let passwordEl;

const PENDING_CLASSNAME = 'login-form--pending';
const PENDING_START_CLASSNAME = 'login-form--pending-start';
const PENDING_END_CLASSNAME = 'login-form--pending-end';
const NEXTPAGE_CLASSNAME = 'login-form--nextpage';

const addClass = (el, className) => el && el.classList.add(className);
const removeClass = (el, className) => el && el.classList.remove(className);

const addPendingClass = () => addClass(formEl, PENDING_CLASSNAME);
const removePendingClass = () => removeClass(formEl, PENDING_CLASSNAME);

const addNextPageClass = () => addClass(formEl, NEXTPAGE_CLASSNAME);
const removeNextPageClass = () => removeClass(formEl, NEXTPAGE_CLASSNAME);

const disableBtn = () => btnEl.disabled = true;
const enableBtn = () => btnEl.disabled = false;

function handleSubmit(e) {
  e.preventDefault();
  login();
  // return false;
}

function login() {
  addPendingClass();
  setTimeout(() => {
    nextPage();
  }, 3000);
}

function nextPage() {
  removePendingClass();
  addNextPageClass();
}

window.addEventListener('load', () => {
  formEl = document.querySelector('.login-form');
  btnEl = document.querySelector('.login-form__submit');
  usernameEl = document.querySelector('.login-form__input[type="text"]');
  passwordEl = document.querySelector('.login-form__input[type="password"]');
  formEl && formEl.addEventListener('submit', handleSubmit);
});