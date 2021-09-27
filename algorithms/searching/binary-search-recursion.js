function binarySearch(sortedArray, element, offset) {
  //   if (!sortedArray) return -1;
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  console.log(sortedArray, element);

  let middleIndex = Math.floor((endIndex - startIndex) / 2);

  console.log({ startIndex, middleIndex, endIndex });

  if (sortedArray[middleIndex] === element) {
    return middleIndex + offset;
  }
  if (sortedArray[middleIndex] < element) {
    startIndex = middleIndex + 1;
    offset = offset + middleIndex + 1;
    return binarySearch(
      sortedArray.slice(startIndex, endIndex + 1),
      element,
      offset
    );
  } else {
    endIndex = middleIndex;
    return binarySearch(sortedArray.slice(0, endIndex), element);
  }
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9, 0));

function binarySearch2(sortedArray, element) {
  function _sort(sortedArray, element, startIndex, endIndex) {
    if (startIndex >= endIndex) {
      return -1;
    }

    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    const elementAtMiddle = sortedArray[middleIndex];
    if (elementAtMiddle == element) {
      return middleIndex;
    }

    if (elementAtMiddle < element) {
      return _sort(sortedArray, element, middleIndex + 1, endIndex);
    }

    return _sort(sortedArray, element, startIndex, middleIndex - 1);
  }

  return _sort(sortedArray, element, 0, sortedArray.length - 1);
}

console.log("Found At Index :", binarySearch2([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
