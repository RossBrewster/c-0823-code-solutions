/* exported numVowels */
function numVowels(string) {
  const arr = [];
  for (let i = 0; i < string.length; i++) {
    let letter = string.charAt(i);
    letter = letter.toUpperCase();
    switch (letter) {
      case 'A':
        arr.push(string.charAt(i));
        break;
      case 'E':
        arr.push(string.charAt(i));
        break;
      case 'I':
        arr.push(string.charAt(i));
        break;
      case 'O':
        arr.push(string.charAt(i));
        break;
      case 'U':
        arr.push(string.charAt(i));
        break;
    }
  }
  return arr.length;
}
