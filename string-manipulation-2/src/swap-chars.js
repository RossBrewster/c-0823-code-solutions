/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const num2 = secondIndex;
  const num1 = firstIndex;
  const charsBefore = string.slice(0, firstIndex);
  let charsBetween;
  if (secondIndex === firstIndex++) {
    charsBetween = '';
  } else {
    charsBetween = string.slice(firstIndex, secondIndex);
  }
  const charsAfter = string.slice(secondIndex + 1);
  return (
    charsBefore +
    string.charAt(num2) +
    charsBetween +
    string.charAt(num1) +
    charsAfter
  );
}

// I was trying to use string.charAt(firstIndex) and string.charAt(secondIndex). Why doesn't that work?
