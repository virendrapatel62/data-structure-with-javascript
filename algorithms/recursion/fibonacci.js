var counter = 0;
function fibonacci(number) {
  counter++;
  if (number === 1 || number === 0) {
    return 1;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
}

// O(2^n)
// not a good solution
//watch counter on console.

console.log(fibonacci(3), { counter });
console.log(fibonacci(5), { counter });
console.log(fibonacci(10), { counter });
console.log(fibonacci(15), { counter });
console.log(fibonacci(20), { counter });
console.log(fibonacci(30), { counter });
