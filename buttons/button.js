/* Gestisco il click sul pulsante con l'icona hamburger */
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

/* modifico i pulsanti con gli effetti */
let _forEach = (arr, cb) => Array.prototype.forEach.call(arr, cb);

function rippleEffectEnd({ target }) {
  console.log("Transition end: ", target);
  target.classList.remove('active');
}

function activateRippleEffect(e) {
  /* console.log("Activate ripple effect: ", e); */
  const { offsetX, offsetY, target } = e;
  const rippler = target.querySelector('.btn__ripple');
  rippler.style.top = offsetY + 'px';
  rippler.style.left = offsetX + 'px';
/*   rippler.style.width = '0';
  rippler.style.height = '0'; */

  rippler.classList.add('active');
  /* const bbox = rippler.getBoundingClientRect();
  const ripplerWidth = bbox.width;
  const ripplerHeight = bbox.height;
  rippler.style.top = (offsetY - ripplerHeight / 4) + 'px';
  rippler.style.left = (offsetX - ripplerWidth / 4) + 'px'; */
}

/* ripple */
let rippledButtons = document.getElementsByClassName('btn--effect-ripple');
const rippleButtonCount = rippledButtons.length;
if (rippleButtonCount) {
  // for(let i = 0; i < rippleButtonCount; i++) {}
  _forEach(rippledButtons, (item) => {
    /* console.log("Add ripple effect to: ", item); */
    let rippler = document.createElement('div');
    rippler.classList.add('btn__ripple');
    rippler.addEventListener('transitionend', rippleEffectEnd);
    item.append(rippler);

    item.addEventListener('click', activateRippleEffect);
  });
}