console.log("Binary Search");

function binarySearch(numbers, find) {
  if (!numbers) return -1;
  let startIndex = 0;
  let endIndex = numbers.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    console.log({ startIndex, middleIndex, endIndex });

    if (numbers[middleIndex] === find) {
      return middleIndex;
    }
    if (numbers[middleIndex] < find) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

console.log(`
-------------------------
Best Case:    O(1)
Average Case: O(log n)
Wrost Case:   O(log n)
-------------------------
`);
