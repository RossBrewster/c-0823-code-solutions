/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const ending = suffix;
  const newWords = [];
  for (let i = 0; i < words.length; i++) {
    newWords.push(words[i] + ending);
  }
  return newWords;
}
