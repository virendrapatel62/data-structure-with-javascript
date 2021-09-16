// with dynamic programming
// DynamicProgramming = recursion + memoiazation;
// very powerfull

var counter = 0;

function fibonacci(number, memo = {}) {
  counter++;
  let result;

  if (memo[number]) return memo[number];

  if (number === 1 || number === 0) {
    result = 1;
  } else {
    result = fibonacci(number - 1, memo) + fibonacci(number - 2, memo);
  }

  memo[number] = result;
  return result;
}

// O(2^n)
// not a good solution
//watch counter on console.

console.log(fibonacci(3), { counter });
counter = 0;
console.log(fibonacci(5), { counter });
counter = 0;
console.log(fibonacci(10), { counter });
counter = 0;
console.log(fibonacci(15), { counter });
counter = 0;
console.log(fibonacci(20), { counter });
counter = 0;
console.log(fibonacci(30), { counter });
counter = 0;
console.log(fibonacci(50), { counter });
counter = 0;
console.log(fibonacci(100), { counter });
