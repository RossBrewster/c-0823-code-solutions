/* exported filterOutStrings */
function filterOutStrings(values) {
  const valuesMinusStrings = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      valuesMinusStrings.push(values[i]);
    }
  }
  return valuesMinusStrings;
}
