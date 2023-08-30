/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
console.log('4 isUnderFive:', isUnderFive(4));
console.log('10 isUnderFive:', isUnderFive(10));
console.log('5 isUnderFive:', isUnderFive(5));

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log('7 isEven:', isEven(7));

function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}

console.log('JavaScript starts with J:', startsWithJ('Javascript'));
console.log('PHP starts with J:', startsWithJ('PHP'));
console.log('HTML starts with J:', startsWithJ('HTML'));
console.log('Java starts with J:', startsWithJ('Java'));
console.log('Kotlin starts with J:', startsWithJ('Kotlin'));
console.log('C# starts with J', startsWithJ('C#'));

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

const bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10,
};

console.log('Bart is old enough to Drink:', isOldEnoughToDrink(bart));

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

const homer = {
  name: 'Homer Jay Simpson',
  age: 39,
};

console.log('Homer is old enough to drive:', isOldEnoughToDrive(homer));

function isOldEnoughToDrinkAndDrive(person) {
  if (person) {
    return false;
  }
}
console.log(
  'Homer is old enough to drink and drive:',
  isOldEnoughToDrinkAndDrive(homer)
);

function categorizeAcidity(pH) {
  if (pH < 0 || pH > 14) {
    return 'invalid pH level';
  } else if (pH < 7) {
    return 'acid';
  } else if (pH > 7) {
    return 'base';
  } else if (pH === 7) {
    return 'neutral';
  }
}

console.log('categorizeAcidity(-1):', categorizeAcidity(-1));
console.log('categorizeAcidity(14.0000001):', categorizeAcidity(14.0000001));
console.log('categorizeAcidity(7):', categorizeAcidity(7));
console.log('categorizeAcidity(2):', categorizeAcidity(2));
console.log('categorizeAcidity(9):', categorizeAcidity(9));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return "We're the Warner brothers!";
    case 'wakko':
      return "We're the Warner brothers!";
    default:
      return 'Goodnight everybody!';
  }
}

console.log('yakko:', introduceWarnerBro('yakko'));
console.log('wakko:', introduceWarnerBro('wakko'));
console.log('cody:', introduceWarnerBro('cody'));
console.log('minerva:', introduceWarnerBro('minerva'));

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Top Gun';
    case 'comedy':
      return 'Talladega nights';
    case 'horror':
      return 'The Ring';
    case 'drama':
      return 'The Notebook';
    case 'musical':
      return 'Grease';
    case 'sci-fi':
      return 'Interstellar';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi.';
  }
}
console.log('action:', recommendMovie('action'));
console.log('comedy:', recommendMovie('comedy'));
console.log('random:', recommendMovie('random'));
