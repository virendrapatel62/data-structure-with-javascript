function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) return false;
  }
  return true;
}

console.log(isPrime(9) === false);
console.log(isPrime(5) === true);

// Linear Time Complexity
