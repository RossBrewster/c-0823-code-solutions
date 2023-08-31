/* exported capitalize */
function capitalize(word) {
  const firstLetter = word.charAt(0);
  const allOtherLetters = word.slice(1);
  return firstLetter.toUpperCase() + allOtherLetters.toLowerCase();
}
