const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', handleClick);

function handleClick(e) {
  console.log(
    'target and tag name:',
    e.target,
    '\ntag name:',
    e.target.tagName
  );
  if (e.target && e.target.matches('button')) {
    console.log('closest:', e.target.closest('.task-list-item'));
    e.target.closest('.task-list-item').remove();
  }
}
