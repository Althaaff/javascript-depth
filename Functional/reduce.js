// Write a function to calculate the sum of an array using reduce :
function sumOfElementsUsingReduce(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(sumOfElementsUsingReduce(arr));
