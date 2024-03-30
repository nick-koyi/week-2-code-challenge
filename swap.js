//swaps character cases
function swapCharacter(str) {
  // variable for holding the swapped characters
  let swapped = '';
  // iterating through the string input
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      swapped += str[i].toLowerCase();
    } else {
      swapped += str[i].toUpperCase();
    }
  }
  // return swapped variable
  return swapped;
}
