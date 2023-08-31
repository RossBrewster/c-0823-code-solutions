/* exported filterOutNulls */
function filterOutNulls(values) {
  const valuesMinusNulls = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] != null) {
      valuesMinusNulls.push(values[i]);
    }
  }
  return valuesMinusNulls;
}
