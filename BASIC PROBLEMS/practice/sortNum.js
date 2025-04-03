// Approach 1 :
// function sortNum(arr) {
//   return arr.sort((a, b) => a - b);
// }
// console.log(sortNum([1, 2, 4, 3, 6, 5, 7, 6]));

// Approach 2 :
function sortNum(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(sortNum([9, 8, 7, 6, 5, 4]));
