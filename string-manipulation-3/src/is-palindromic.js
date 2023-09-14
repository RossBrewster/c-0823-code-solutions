/* exported isPalindromic */
function isPalindromic(string) {
  let newStr = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string.charAt(i);
  }
  if (newStr.replace(/ /g, '') === string.replace(/ /g, '')) {
    return true;
  } else {
    return false;
  }
}
