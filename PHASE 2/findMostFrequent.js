// Find most frequent number in the array :
// How is it checking if 3 exists ?
// When freqMap[num] = (freqMap[num] || 0) + 1; runs:
// If num ex: 3 ? exists in freqMap, it retrieves the existing value and increments it.
// If num does NOT exist, freqMap[num] is undefined, so undefined || 0 returns 0, then it adds 1.
// function findMostFrequent(arr) {
//   if (arr.length === 0) return null; // Edge case: Empty array

// let freqMap = {}; // Step 1: Create frequency map
// let maxCount = 0;
// let mostFrequent = null;

//   // Step 2: Count occurrences
//   for (let num of arr) {
//     freqMap[num] = (freqMap[num] || 0) + 1;
//     if (freqMap[num] > maxCount) {
//       // Step 3: Track max frequency
//       maxCount = freqMap[num];

//       mostFrequent = num;
//     }
//   }

//   return mostFrequent;
// }

// Example Usage:
// console.log(findMostFrequent([1, 3, 2, 3, 4, 3, 5, 1])); // Output: 3
// console.log(findMostFrequent(["a", "b", "a", "c", "a", "b"])); // Output: 'a'
// console.log(findMostFrequent([])); // Output: null

// practice :
function findMostFrequent(arr) {
  let freqMap = {};
  let maxCount = 0;
  let mostFrequent = null;

  for (let num of arr) {
    freqMap[num] = (freqMap[num] || 0) + 1;

    if (freqMap[num] > maxCount) {
      maxCount = freqMap[num];
      mostFrequent = num;
    }
  }

  return mostFrequent;
}

console.log(findMostFrequent([1, 3, 5, 6, 7, 8, 8, 9, 0, 0, 0]));

// test
function check(arr) {
  let largest = arr[0];
  for (let item of arr) {
    if (item > largest) {
      largest = item;
    }
  }

  return largest;
}

console.log(check([1, 100, 2, 3, 4]));
