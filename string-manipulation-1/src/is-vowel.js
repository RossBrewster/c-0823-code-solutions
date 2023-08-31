/* exported isVowel */
function isVowel(char) {
  const vowel = char.toUpperCase();
  if (
    vowel === 'A' ||
    vowel === 'E' ||
    vowel === 'I' ||
    vowel === 'O' ||
    vowel === 'U'
  ) {
    return true;
  } else {
    return false;
  }
}
