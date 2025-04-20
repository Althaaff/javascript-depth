// // Problem:
// // Find the first index of a given target in an array
// // (Essentially doing a linear search manually)

// // NO builtin :
// function findIndexOfTarget(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }

//   return -1;
// }

// const arrs = [1, 3, 5, 3, 2, 6, 7, 8];
// let targets = 3;

// console.log(findIndexOfTarget(arrs, targets));

// // // using Builtin Method findIndex() :
// // // Find the index of the first occurrence of a target element in an array.

// function findIndexOfTarget(arr, target) {
//   const index = arr.findIndex((element) => element === target);

//   // console.log(index);
//   return index;
// }

// const arr = [1, 5, 6, 2, 3, 7, 8];
// console.log(findIndexOfTarget(arr, 8));

// // using indexOf Method :
// const arr = [1, 3, 4, 5, 6, 3, 2];

// const target = 2;

// const index = array.indexOf(target);
// console.log(index);

// // Problem: find all the indexes where the value is 3

// function findIndexOfTarget(arr, target) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// const arr = [1, 2, 3, 5, 3, 7, 6, 3, 0];

// console.log(findIndexOfTarget(arr, 3));

// // using filter method :
// function findIndex(arr, target) {
//   let indexes = [];

//   const find = arr.filter((value, index) => {
//     if (value === target) {
//       indexes.push(index);
//     }
//   });

//   return indexes;
// }

// const arrays = [1, 2, 4, 5, 4, 6, 4];

// console.log(findIndex(arrays, 4));

function findFirstOccuranceIndexOfTarget(arr, target) {
  let found = false;

  const result = arr
    .map((value, index) => ({ value, index }))
    .filter((item) => {
      if (item.value === target && !found) {
        found = true;
        return true;
      }

      return false;
    });

  console.log(result);

  return result.length > 0 ? result[0].index : -1;
}

const arr = [1, 2, 3, 4, 5, 3, 4];

console.log(findFirstOccuranceIndexOfTarget(arr, 3));
