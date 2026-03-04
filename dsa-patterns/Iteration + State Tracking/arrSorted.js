function checkArrSorted(arr) {
  if (arr.length <= 1) return true;

  let isAscending = arr[0] < arr[1];
  let isSorted = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (isAscending) {
      if (!(arr[i] <= arr[i + 1])) {
        isSorted = false;
        break;
      }
    } else {
      if (!(arr[i] >= arr[i + 1])) {
        isSorted = false;
        break;
      }
    }
  }

  return isSorted;
}

console.log(checkArrSorted([3, 7, 2, 9, 4, 7, 2]));
console.log(checkArrSorted([1, 2, 3, 4, 5, 6, 7]));
console.log(checkArrSorted([1, 2, 3, 4, 5, 6, -1]));
console.log(checkArrSorted([9, 8, 7, 6, 5, 4, 3, 2, 1, 1]));

// solution 2 (optimized):
function checkArrSorted1(arr) {
  if (arr.length <= 1) return true;

  let isAscending = true;
  let isDescending = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) isDescending = false;
    if (arr[i] > arr[i + 1]) isAscending = false;
  }

  return isAscending || isDescending;
}

console.log(checkArrSorted1([9, 8, 7, 6, 5, 4, 3, 2, 1, 1]));
console.log(checkArrSorted1([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(checkArrSorted1([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(checkArrSorted1([4, 4, 4, 4, 4, 4]));
