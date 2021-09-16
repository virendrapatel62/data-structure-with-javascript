function factorial(number) {
  let result = number; // 1
  for (let index = 2; index < number; index++) {
    result *= index; // (n-2)
  }
  return result; // 1
}

// 1 + 1 + n - 2 => n => O(n)
// Linear Time Complexity

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
