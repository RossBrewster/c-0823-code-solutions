/* exported pick */
function pick(source, keys) {
  const obj = {};
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in source) {
      obj[keys[i]] = source[keys[i]];
    }
  }
  return obj;
}
