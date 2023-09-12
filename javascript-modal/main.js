const $open = document.querySelector('.open');
const $close = document.querySelector('.close');
const $overlay = document.querySelector('.overlay');

function toggleOn() {
  $overlay.className = 'overlay on';
}

function toggleOff() {
  $overlay.className = 'overlay off';
}

$open.addEventListener('click', toggleOn);
$close.addEventListener('click', toggleOff);
