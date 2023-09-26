function ExampleConstructor() {}

console.log(
  'Value of ExampleConstructor.prototype:',
  ExampleConstructor.prototype
);
console.log(
  'typeof ExampleConstructor.prototype:',
  ExampleConstructor.prototype
);

const example1 = new ExampleConstructor();
console.log('Value of example1:', example1);

const isExample1InstanceofExConstructor =
  example1 instanceof ExampleConstructor;
console.log(
  'Value of isExample1InstanceofExConstructor:',
  isExample1InstanceofExConstructor
);
