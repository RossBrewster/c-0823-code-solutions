const $chars = document.querySelectorAll('span');
let count = 0;
$chars[count].className = 'next';

function handleKeyDown(event) {
  if (event.key === $chars[count].textContent) {
    $chars[count].className = 'correct';
    console.log('count', count);
    $chars[count + 1].className = 'next';
    count++;
  } else {
    $chars[count].className = 'incorrect';
  }
}

document.addEventListener('keydown', handleKeyDown);
