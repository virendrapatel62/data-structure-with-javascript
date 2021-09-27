function findElement(array, element, predicate) {
  let index = 0;
  for (const item of array) {
    if (item === element) {
      return index;
    }
    index++;
  }

  return -1;
}

const array = [1, 2, 54, 6, 4, 34, 6, 56, 7, 8];

console.log(findElement(array, 10));
console.log(findElement(array, 34));
