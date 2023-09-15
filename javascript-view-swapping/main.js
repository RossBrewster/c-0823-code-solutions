const $tabContainer = document.querySelector('.tab-container');
const $tabE = document.querySelectorAll('.tab');
const $viewE = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleTabClick);

function handleTabClick(e) {
  if (e.target.matches('.tab')) {
    for (let i = 0; i < $tabE.length; i++)
      if ($tabE[i] !== e.target) {
        $tabE[i].className = 'tab';
      } else {
        $tabE[i].className = 'tab active';
      }

    const dataView = e.target.getAttribute('data-view');
    for (let i = 0; i < $viewE.length; i++) {
      if ($viewE[i].getAttribute('data-view') !== dataView) {
        $viewE[i].className = 'view hidden';
      } else {
        $viewE[i].className = 'view';
      }
    }
  }
}
