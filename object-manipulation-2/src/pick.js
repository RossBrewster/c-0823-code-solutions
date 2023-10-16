/* exported pick */
function pick(source, keys) {
  const newObj = {};
  for (let i = 0; i < keys.length; i++) {
    if (Object.hasOwn(source, keys[i])) {
      newObj[keys[i]] = source[keys[i]];
    }
    if (newObj[keys[i]] === undefined) {
      delete newObj[keys[i]];
    }
  }
  return newObj;
}
