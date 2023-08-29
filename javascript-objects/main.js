const student = {
  firstName: 'Ross',
  lastName: 'Brewster',
  age: 26,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('Full name:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Vacation rental manager';
console.log('Student lives in Irvine:', student.livesInIrvine);
console.log('Student previous occupation:', student.previousOccupation);
console.log('Value of student:', student);

const vehicle = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2015,
};

vehicle['color'] = 'gray';
vehicle['isConvertible'] = false;
console.log('Vehicle color:', vehicle['color']);
console.log('Vehicle is a convertible:', vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);

const pet = {
  name: 'Apollo',
  type: 'Dog',
};
delete pet.name;
delete pet.type;
console.log('Pet value', pet);
