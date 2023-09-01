/* exported capitalizeWords */
function capitalizeWords(string) {
  const arr = string.split(' ');
  let capitalWords = '';
  for (let i = 0; i < arr.length; i++) {
    const firstLetter = arr[i].charAt(0);
    const otherLetters = arr[i].slice(1);
    const capitalWord = firstLetter.toUpperCase() + otherLetters.toLowerCase();
    if (i === arr.length - 1) {
      capitalWords += capitalWord;
    } else {
      capitalWords += capitalWord + ' ';
    }
  }
  return capitalWords;
}
