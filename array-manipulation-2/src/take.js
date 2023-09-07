/* exported take */
function take(array, count) {
  const arr = [];
  if (count > array.length) {
    return array;
  }
  for (let i = 0; i < count; i++) {
    arr.push(array[i]);
  }
  return arr;
}
