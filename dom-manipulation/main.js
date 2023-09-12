let count = 0;
const $bttn = document.querySelector('.hot-button');
const $countElement = document.querySelector('.click-count');

function increment() {
  count++;
  $countElement.textContent = 'Clicks: ' + count;
  if (count < 4) {
    $bttn.className = 'hot-button cold';
  } else if (count < 7) {
    $bttn.className = 'hot-button cool';
  } else if (count < 10) {
    $bttn.className = 'hot-button tepid';
  } else if (count < 13) {
    $bttn.className = 'hot-button warm';
  } else if (count < 16) {
    $bttn.className = 'hot-button hot';
  } else if (count >= 16) {
    $bttn.className = 'hot-button nuclear';
  }
}

$bttn.addEventListener('click', increment);
