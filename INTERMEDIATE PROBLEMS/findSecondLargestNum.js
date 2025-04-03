function findSecondLargestNum(arr) {
  let max = -Infinity;
  let secondLargest = -Infinity;

  // (for in loop targets key in arrays index of the elements but in Objects targets properties not values)
  // for (let index in arr) {
  //   if (arr[index] > max) {
  //     secondLargest = max;

  //     max = arr[index];
  //   } else {
  //     if (arr[index] > secondLargest && arr[index] !== max) {
  //       secondLargest = arr[index];
  //     }
  //   }
  // }

  for (let num of arr) {
    if (num > max) {
      secondLargest = max;

      max = num;
    } else if (num > secondLargest && num !== max) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity
    ? "Error: second largest not found!"
    : secondLargest;
}

console.log(findSecondLargestNum([1, 3, 2, 4, 6, 5, 12, 9]));

// for...in → Loops over keys (indexes in arrays, properties in objects).

// for...of → Loops over values (actual elements of arrays, iterable objects like strings, sets, maps).
