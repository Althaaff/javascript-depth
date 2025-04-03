// // Approach 1 :
// function findSecondLargestNum(arr) {
//   const uniqueArr = [...new Set(arr)]; // removes duplicate numbers //
//   uniqueArr.sort((a, b) => b - a); // converts to descending order //

//   return uniqueArr.length > 1 ? uniqueArr[1] : null;
// }

// console.log(findSecondLargestNum([2, 1, 4, 6, 9]));

// second Approach :
function findSecondLargestNum(arr) {
  let largest = -Infinity,
    secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;

      largest = num;
    } else if (num > secondLargest && largest !== secondLargest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

console.log(findSecondLargestNum([3, 67, 90, 76, 43]));
