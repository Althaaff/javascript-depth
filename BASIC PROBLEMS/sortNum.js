// // Approach 1 :
// function sortNum(arr) {
//   return arr.sort((a, b) => a - b); // compares a < b or a > b  1 - 0 = 1 positive 0 swaps before 1 in array, 3 < 5 --> 3 - 5 = -2 3 stays as it is
// }

// console.log(sortNum([1, 0, 3, 5, 4, 6]));

// Approach 2 :
// 2️⃣ Implementing Bubble Sort (For Better Logical Thinking)
// ✅ Concept: Bubble Sort repeatedly swaps adjacent elements until the array is sorted.

function sortNum(arr) {
  let n = arr.length;

  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements :
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped); // loop until swapped =  true

  return arr;
}

console.log(sortNum([0, 2, 9, 1, 5, 6, 8]));

// // Approach 3 :
// function sortNum(arr) {
//   const n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // Swaps elements:
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }

//   return arr; // funciton returns swapped array
// }

// console.log(sortNum([1, 3, 2, 5, 4, 9, 5]));
