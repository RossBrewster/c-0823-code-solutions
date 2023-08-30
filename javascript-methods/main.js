const num1 = 1;
const num2 = 2;
const num3 = 3;

const maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue:', maximumValue);

const heroes = ['Mom', 'Absent Father', 'Grandma', 'Grandpa'];

let randomNumber = Math.random();

randomNumber *= heroes.length;

const randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  {
    title: 'The Giver',
    author: 'Lois Lowry',
  },
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling',
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
  },
];

const lastBook = library.pop();
console.log('lastBook:', lastBook);

const firstBook = library.shift();
console.log('firstBook', firstBook);

const js = {
  title: 'Javascript for Impatient Beginners',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

const fullName = 'Ross Brewter';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
