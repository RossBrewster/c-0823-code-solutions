/* exported oddOrEven */
function oddOrEven(numbers) {
  let index = '';
  const evenOrOddIndex = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      index = 'even';
    } else {
      index = 'odd';
    }
    evenOrOddIndex.push(index);
  }
  return evenOrOddIndex;
}
