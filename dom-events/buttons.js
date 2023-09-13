function handleClick(event) {
  console.log('button clicked');
  console.log('event object', event);
  console.log('target', event.target);
}
const $btnClk = document.querySelector('.click-button');
$btnClk.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event object', event);
  console.log('target', event.target);
}

const $btnHvr = document.querySelector('.hover-button');
$btnHvr.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event object', event);
  console.log('target', event.target);
}

const $dblClk = document.querySelector('.double-click-button');
$dblClk.addEventListener('dblclick', handleDoubleClick);
