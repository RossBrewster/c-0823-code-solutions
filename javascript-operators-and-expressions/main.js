const width = 20;
const height = 10;

const area = width * height;
console.log('Area:', area);
console.log('typeof area:', typeof area);

const bill = 200;
const payment = 250;
const change = payment - bill;
console.log('Change', change);
console.log('typeof change:', typeof change);

const quizzes = 80;
const midterm = 90;
const final = 100;
const grade = (quizzes + midterm + final) / 3;
console.log('Grade:', grade);
console.log('typeof grade', typeof grade);

const firstName = 'Ross';
const lastName = 'Brewster';
const fullName = firstName + ' ' + lastName;
console.log('Fullname:', fullName);
console.log('typeof Fullname:', typeof fullName);

const pH = 9;
const isAcidic = pH < 7;
console.log('9 is acidic.', isAcidic);
console.log('typeof isAcidic', typeof isAcidic);

const headCount = 12;
const isSparta = headCount === 300;
console.log('isSparta;', isSparta);
console.log('typeof isSparta:', typeof isSparta);

let motto = fullName;
motto += ' is the GOAT';
console.log('motto:', motto);
console.log('typeof motto:', typeof motto);
