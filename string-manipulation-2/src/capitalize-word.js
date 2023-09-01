/* exported capitalizeWord */
function capitalizeWord(word) {
  const firstLetter = word.charAt(0);
  const otherLetters = word.slice(1);
  const newWord = firstLetter.toUpperCase() + otherLetters.toLowerCase();
  if (newWord === 'Javascript') {
    return 'JavaScript';
  }
  return newWord;
}
