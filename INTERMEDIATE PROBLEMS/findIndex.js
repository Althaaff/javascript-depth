// Problem:
// Find the first index of a given target in an array
// (Essentially doing a linear search manually)

// NO builtin :
function findIndexOfTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

const arr = [1, 3, 5, 2, 6, 7, 8];
let target = 7;

console.log(findIndexOfTarget(arr, target));

// using Builtin Method findIndex() :
// Find the index of the first occurrence of a target element in an array.

function findIndexOfTarget(arr, target) {
  const index = arr.findIndex((element) => element === target);

  // console.log(index);
  return index;
}

const arr = [1, 5, 6, 2, 3, 7, 8];
console.log(findIndexOfTarget(arr, 8));

// using indexOf Method :
const arr = [1, 3, 4, 5, 6, 3, 2];

const target = 2;

const index = array.indexOf(target);
console.log(index);
