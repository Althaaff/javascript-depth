// Approach 1 :
function findSmallestNum(arr) {
  let smallestNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }

  return smallestNumber;
}

console.log(findSmallestNum([3, 5, 7, 9, 12, 1, -1]));

// Approach 2 :
// function findSmallestNum(arr) {
//   const smallestNumber = arr.sort((a, b) => a - b);
//   console.log(smallestNumber);

//   return smallestNumber[0];
// }

// console.log(findSmallestNum([1, 1, 4, 3, 5]));
