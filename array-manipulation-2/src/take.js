/* exported take */
function take(array, count) {
  const arr = [];
  if (array === []) {
    return arr;
  } else {
    for (let i = 0; i < count; i++) {
      arr.push(array[i]);
    }
  }
  return arr;
}
