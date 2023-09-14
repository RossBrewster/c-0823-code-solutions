/* exported isAnagram */
function isAnagram(firstString, secondString) {
  for (let i = 0; i < firstString.length; i++) {
    if (
      firstString.split(`${firstString[i]}`).length - 1 !==
      secondString.split(`${firstString[i]}`).length - 1
    ) {
      return false;
    }
  }
  return true;
}
