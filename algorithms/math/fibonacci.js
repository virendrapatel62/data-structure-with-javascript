function fibonacci(n) {
  let x = 0; // 1
  let y = 1; // 1
  let result = 0; // 1
  for (let i = 0; i < n; i++) {
    result = x + y; // n
    y = x; // n
    x = result; // n
  }

  return result; // 1
}
// i 1+1+1+n+n+n+1 => 2 + 3n => 3n => n
// O(n)
// Linear Time Complexity

console.log(fibonacci(6));
