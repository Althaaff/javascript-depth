// Approach 1 :
// function sumOfArrayElements(arr) {
//   return arr.reduce((sum, num) => sum + num, 0);
// }

// console.log(sumOfArrayElements([1, 2, 3, 4, 5]));

// Approach 2 :
// let array = [1, 2, 3, 4, 5];
// function sumOfArrayElements(a, idx) {
//   if (idx === a.length) {
//     return 0;
//   }

//   return a[idx] + sumOfArrayElements(a, idx + 1);
// }

// console.log(sumOfArrayElements(array, 0));

// Approach 3 :
function sumOfArrayElements(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

console.log(sumOfArrayElements([1, 2, 3, 4, 5]));
