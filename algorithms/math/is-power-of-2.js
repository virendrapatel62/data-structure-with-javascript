function isPowerOf2(number) {
  while (number !== 1) {
    if (number % 2 !== 0) {
      return false;
    }
    number = number / 2;
  }
  return true;
}

console.log(isPowerOf2(6) == false);
console.log(isPowerOf2(100000) == false);
console.log(isPowerOf2(16) == true);

// Best Case : Number 13 => O(1)
// Average Case : Number 13 => O(1)
// Worst Case : Number 1,125,899,906,842,624 => O(log(n)) => 50 loop
