// Approach 1 :
// function findLargestNum() {
//   const arr = [1, 4, 50, 100];

//   return arr.reduce((largest, current) => {
//     return current > largest ? current : largest;
//   });
// }

// console.log(findLargestNum());

// Approach 2 :
// function findLargestNum(arr) {
//   return Math.max(...arr);
// }

// const numbers = [1, 2, 4, 56, 7];
// const largestNum = findLargestNum(numbers);

// console.log(largestNum);

const arr = [1, 2, 3];
const removedArr = arr.splice(1, 2);

console.log(arr);
console.log(removedArr);

// using for loop :
function findLargestNum(arr) {
  let largestNum = arr[0]; // 2

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }

  return largestNum;
}
const numbers = [2, 4, 5, 7, 22];

console.log(findLargestNum(numbers));

// Using the sort() method :
// function findLargestNum(arr) {
//   arr.sort((a, b) => a - b);

//   return arr[arr.length - 1]; // after ascending order return last element from the array
// }

// console.log(findLargestNum([1, 4, 6, 8, 0]));

// use forEach method :
function findLargestNum(arr) {
  let largest = arr[0];

  arr.forEach((element) => {
    if (element > largest) {
      largest = element;
    }
  });
  return largest;
}

console.log(findLargestNum([1, 3, 44, 5, 4]));
