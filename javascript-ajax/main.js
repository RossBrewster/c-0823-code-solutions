const $results = document.querySelector('.results');

const $li = document.createElement('li');
const $img = document.createElement('img');

const xhr = new XMLHttpRequest();
xhr.open(
  'GET',
  'https://api.artic.edu/api/v1/artworks/185905?fields=id,title,image_id'
);
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response.data);
  const imageId = xhr.response.data.image_id;
  const source = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
  $img.setAttribute('src', source);
  $img.setAttribute('alt', xhr.response.data.title);
  $li.appendChild($img);
  $results.appendChild($li);
});
xhr.send();
