function min(numbers) {
  if (!numbers) return NaN; // 1
  let min = numbers[0]; // 1
  for (const number of numbers) {
    if (number < min) {
      min = number; // n
    }
  }
  return min; // 1
}

// Best Case - O(n)
// Average Case - O(n)
// Wrost Case - O(n)
// Linear Time Complexity

console.log(min([2, 3, 5, 7, 4, 5, 4, 1, 6, 9]) == 1 ? "success" : "Failed");
console.log(min([2, 3, 5, 7, 4, -1, 4, 1, 6, 9]) == -1 ? "success" : "Failed");
