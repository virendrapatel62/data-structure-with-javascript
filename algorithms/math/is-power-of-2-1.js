function isPowerOf2(number) {
  if (number < 1) return false;
  return (number & (number - 1)) == 0; // O(1)
}

console.log(isPowerOf2(6) == false);
console.log(isPowerOf2(100000) == false);
console.log(isPowerOf2(1, 125, 899, 906, 842, 624) == true);

// Best Case : Number 13 => O(1)
// Average Case : Number 13 => O(1)
// Worst Case : Number 1,125,899,906,842,624 => O(1)
