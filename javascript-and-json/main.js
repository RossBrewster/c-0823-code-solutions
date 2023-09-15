const arr = [
  {
    title: 'How To Win Friends and Influence People',
    author: 'Dale Carnegie',
    ISBN: 9783988288998,
  },
  {
    title: 'Harry Potter and The Deathly Hallows',
    author: 'J.K. Rowling',
    ISBN: 9780545010221,
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    ISBN: 9780008283643,
  },
];
console.log('arr:', arr);
console.log('type of arr:', typeof arr);

const arrJSON = JSON.stringify(arr);
console.log('arrJSON:', arrJSON);
console.log('type of arrJSON:', typeof arrJSON);

const strJSON = '{"number-id":54363543,"name":"Harry Potter"}';

console.log('strJSON:', strJSON);
console.log('type of strJSON:', typeof strJSON);

const strParse = JSON.parse(strJSON);
console.log('strParse:', strParse);
console.log('type of strParse:', typeof strParse);
