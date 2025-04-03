// Approach 1  using reduce method:

// function sumOfArrayElements(arr) {
//   return arr.reduce((sum, num) => sum + num, 0);
// }

// console.log(sumOfArrayElements([5, 6, 8, 3]));

// Approach 2 for normal numbers sum calculation :
// function sumOfNumbers(num) {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(sumOfNumbers(5));

// 3rd Approach :
// function sumOfArrayElements() {
//   const a = [2, 4, 6, 7, 8];
//   let sum = 0;

//   for (let i = 0; i < a.length; i++) {
//     sum += a[i];
//   }

//   return sum;
// }

// console.log(sumOfArrayElements());

// Approach 2: using forEach Method :
// function sumOfArrayElements() {
//   const a = [2, 4, 6, 7, 8];
//   let sum = 0;

//   a.forEach((num) => {
//     sum += num;
//   });

//   return sum;
// }

// console.log(sumOfArrayElements());

// Approach 3:
let array = [2, 3, 4, 5, 6];

function sumArrayElements(a, idx) {
  if (idx === a.length) {
    return 0;
  }

  return a[idx] + sumArrayElements(a, idx + 1);
}

console.log(sumArrayElements(array, 0));
