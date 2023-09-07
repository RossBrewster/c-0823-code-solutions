/* exported ransomCase */
function ransomCase(string) {
  let rCWord = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      rCWord += string[i].toLowerCase();
    } else {
      rCWord += string[i].toUpperCase();
    }
  }
  return rCWord;
}
