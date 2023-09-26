const $image = document.querySelector('.carousel-img');
const allCircles = document.querySelectorAll('.fa-circle');
const $circle1 = document.querySelector('#circle-1');
const $circle2 = document.querySelector('#circle-2');
const $circle3 = document.querySelector('#circle-3');
const $circle4 = document.querySelector('#circle-4');
const $circle5 = document.querySelector('#circle-5');
const $leftChevron = document.querySelector('.fa-chevron-left');
const $rightChevron = document.querySelector('.fa-chevron-right');
const $dotRow = document.querySelector('.dots');
let pokemonInterval = setInterval(loopForward, 1500);

function loopForward() {
  if ($image.getAttribute('src') === 'images/001.png') {
    $image.setAttribute('src', 'images/004.png');
    $circle1.setAttribute('class', 'fa-regular fa-circle');
    $circle2.setAttribute('class', 'fa-solid fa-circle');
  } else if ($image.getAttribute('src') === 'images/004.png') {
    $image.setAttribute('src', 'images/007.png');
    $circle2.setAttribute('class', 'fa-regular fa-circle');
    $circle3.setAttribute('class', 'fa-solid fa-circle');
  } else if ($image.getAttribute('src') === 'images/007.png') {
    $image.setAttribute('src', 'images/025.png');
    $circle3.setAttribute('class', 'fa-regular fa-circle');
    $circle4.setAttribute('class', 'fa-solid fa-circle');
  } else if ($image.getAttribute('src') === 'images/025.png') {
    $image.setAttribute('src', 'images/039.png');
    $circle4.setAttribute('class', 'fa-regular fa-circle');
    $circle5.setAttribute('class', 'fa-solid fa-circle');
  } else {
    $image.setAttribute('src', 'images/001.png');
    $circle5.setAttribute('class', 'fa-regular fa-circle');
    $circle1.setAttribute('class', 'fa-solid fa-circle');
  }
}

function loopBackward() {
  clearInterval(pokemonInterval);
  if ($image.getAttribute('src') === 'images/001.png') {
    $image.setAttribute('src', 'images/039.png');
    $circle1.setAttribute('class', 'fa-regular fa-circle');
    $circle5.setAttribute('class', 'fa-solid fa-circle');
  } else if ($image.getAttribute('src') === 'images/004.png') {
    $image.setAttribute('src', 'images/001.png');
    $circle2.setAttribute('class', 'fa-regular fa-circle');
    $circle1.setAttribute('class', 'fa-solid fa-circle');
  } else if ($image.getAttribute('src') === 'images/007.png') {
    $image.setAttribute('src', 'images/004.png');
    $circle3.setAttribute('class', 'fa-regular fa-circle');
    $circle2.setAttribute('class', 'fa-solid fa-circle');
  } else if ($image.getAttribute('src') === 'images/025.png') {
    $image.setAttribute('src', 'images/007.png');
    $circle4.setAttribute('class', 'fa-regular fa-circle');
    $circle3.setAttribute('class', 'fa-solid fa-circle');
  } else {
    $image.setAttribute('src', 'images/025.png');
    $circle5.setAttribute('class', 'fa-regular fa-circle');
    $circle4.setAttribute('class', 'fa-solid fa-circle');
  }
  pokemonInterval = setInterval(loopForward, 1500);
}

function showParticularImage(e) {
  clearInterval(pokemonInterval);
  for (let i = 0; i < allCircles.length; i++) {
    allCircles[i].setAttribute('class', 'fa-regular fa-circle');
  }
  if (e.target.getAttribute('id') === 'circle-1') {
    $circle1.setAttribute('class', 'fa-solid fa-circle');
    $image.setAttribute('src', 'images/001.png');
  } else if (e.target.getAttribute('id') === 'circle-2') {
    $circle2.setAttribute('class', 'fa-solid fa-circle');
    $image.setAttribute('src', 'images/004.png');
  } else if (e.target.getAttribute('id') === 'circle-3') {
    $circle3.setAttribute('class', 'fa-solid fa-circle');
    $image.setAttribute('src', 'images/007.png');
  } else if (e.target.getAttribute('id') === 'circle-4') {
    $circle4.setAttribute('class', 'fa-solid fa-circle');
    $image.setAttribute('src', 'images/025.png');
  } else if (e.target.getAttribute('id') === 'circle-5') {
    $circle5.setAttribute('class', 'fa-solid fa-circle');
    $image.setAttribute('src', 'images/039.png');
  }
  pokemonInterval = setInterval(loopForward, 1500);
}

$leftChevron.addEventListener('click', loopBackward);
$rightChevron.addEventListener('click', function (e) {
  clearInterval(pokemonInterval);
  loopForward();
  pokemonInterval = setInterval(loopForward, 1500);
});

$dotRow.addEventListener('click', showParticularImage);
