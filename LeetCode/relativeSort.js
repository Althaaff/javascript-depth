function relativeSortArray(arr1, arr2) {
  let countMap = new Map();
  let result = [];
  let leftOvers = [];

  for (let num of arr1) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (let num of arr2) {
    if (countMap.has(num)) {
      let count = countMap.get(num); // takes value

      while (count > 0) {
        result.push(num);
        count--;
      }
    }

    countMap.delete(num);
  }

  for (let [num, count] of countMap) {
    while (count > 0) {
      leftOvers.push(num);
      count--;
    }
  }

  // sort the leftOvers :
  leftOvers.sort((a, b) => a - b);

  return [...result, ...leftOvers];
}

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]),
);
