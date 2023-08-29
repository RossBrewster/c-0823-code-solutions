function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(1);
console.log('Convert minutes to seconds: 1 = ', convertMinutesToSecondsResult);

function greet(name) {
  const greeting = 'Hello, ' + name;
  return greeting;
}
const greetResult = greet('Ross');
console.log("Result of greet('Ross'):", greetResult);

function getArea(width, height) {
  const area = width * height;
  return area;
}
const getAreaResult = getArea(17, 42);
console.log('Result of getArea(17, 42):', getAreaResult);

const president = {
  firstName: 'Joseph',
  lastName: 'Biden',
};

function getFirstName(person) {
  return person.firstName;
}
const getFirstNameResult = getFirstName(president);
console.log('getFirstName(president):', getFirstNameResult);

const numbers = [1, 2, 3];
function getLastElement(array) {
  const lastElement = array.at(-1);
  return lastElement;
}
const getLastElementResult = getLastElement(numbers);
console.log('getLastElement(numbers):', getLastElementResult);
