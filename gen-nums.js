//function for generating numbers between the ones provided
function generateNumber(start, end) {
  // variable for holding generated numbers
  const result = [];
  // loop through the provided numbers
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  // return the final array for numbers generated
  return result;
}
