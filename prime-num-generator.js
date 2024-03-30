function geneartePrimes(arr) {
  //initialize and empty array to store prime numbers
  const primeNumber = [];
  // loop through each number in the input array
  for (let i = 0; i < arr.length; i++) {
    // assume the number is prime initially
    let isPrime = true;
    // check if number is less than 2 (not prime number)
    if (arr[i] < 2) {
      // if so set it false
      isPrime = false;
    } else {
      // check if number is greater than 2
      for (let j = 2; j < arr[i]; j++) {
        // if divible other than and itself then is not prime number
        if (arr[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
    }
    // if prime pushes the number to the new array
    if (isPrime) {
      primeNumber.push(arr[i]);
    }
  } // returns array of primenumbers
  return primeNumber;
}
