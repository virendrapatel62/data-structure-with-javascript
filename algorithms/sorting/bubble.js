console.log("Bubble Sort..");

let run = 0;
function bubbleSort(array = [], predicate) {
  const result = [...array];
  for (let outer = 0; outer < result.length; outer++) {
    let outerElement = result[outer];
    for (let inner = outer + 1; inner < result.length; inner++) {
      run++;
      let innerElement = result[inner];
      if (predicate(outerElement, innerElement)) {
        result[inner] = outerElement;
        result[outer] = innerElement;

        outerElement = result[outer];
        innerElement = result[inner];
      }
    }
  }

  console.log("RUN : ", run);

  return result;
}

const array = new Array(10)
  .fill()
  .map((_, index) => Math.random() * 100)
  .map((e) => Number.parseInt(e));

console.log("Before: ", array);
const sortedArray = bubbleSort(array, (a, b) => a > b);
console.log("After : ", sortedArray);
