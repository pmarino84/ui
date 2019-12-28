var btn = document.querySelector('.btn.btn-icon');
var clazz = 'active';

function hasClass(el, clazz) {
  return el.classList.contains(clazz);
}

function addClass(el, clazz) {
  el.classList.add(clazz);
}

function removeClass(el, clazz) {
  el.classList.remove(clazz);
}

function handleClick(evt) {
  if (hasClass(btn, clazz)) {
    removeClass(btn, clazz);
  }
  else {
    addClass(btn, clazz);
  }
}

if (btn) {
  btn.addEventListener('click', handleClick);
}