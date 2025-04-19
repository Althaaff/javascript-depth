// Problem:
// Calculate the sum of all elements in an array without using built-in methods.

function sumOfAllElements(arr) {
  let sum = 0;

  // using for loop :
  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  // }

  // using while loop :
  let i = 0;

  while (i < arr.length) {
    sum += arr[i];

    i++;
  }
  return sum;
}

const arr = [2, 7, 5, 9, 8, 7];
console.log(sumOfAllElements(arr));
