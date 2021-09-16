function factorial(number) {
  if (number === 1) return 1; // 1

  return number * factorial(number - 1); // 1
}

// In every funtion call => O(1)
// Multiple Function calls => n function calls
// T = n * O(1)=> O(n)

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
