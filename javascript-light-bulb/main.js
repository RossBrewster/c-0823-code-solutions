const $bulb = document.querySelector('.bulb');
const $background = document.querySelector('.container');

function toggle() {
  if ($bulb.className === 'bulb off') {
    $bulb.className = 'bulb on';
    $background.className = 'container bright';
  } else {
    $bulb.className = 'bulb off';
    $background.className = 'container dark';
  }
}

$bulb.addEventListener('click', toggle);
