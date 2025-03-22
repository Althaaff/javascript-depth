// Approach 1 :
// function flattenArray(arr) {
//   let result = [];

//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       result = result.concat(flattenArray(item));
//     } else {
//       result.push(item);
//     }
//   }

//   return result;
// }

// console.log(flattenArray([1, [2, [3, [4, 5]]], 6, 7]));

// // Approach 2 :
// function flattenArray(arr) {
//   return arr.reduce((acc, item) => {
//     console.log(acc);
//     return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
//   }, []);
// }

// console.log(flattenArray([1, [2, [3, [4, 5]]], 6, 7]));

// Approach 3 :
function flattenArray(arr) {
  return arr.toString().split(",").map(Number); // map returns new array //
}

console.log(flattenArray([1, [2, [3, [4, 5]]], 6, 7]));

// Approach 4 :
function flattenArray(arr) {
  return arr.flat(Infinity); //flat(Infinity) to completely flatten any deeply nested array.
}

console.log(flattenArray([1, [2, [3, [, 4, 5]]], 6, 7]));

// recursion
function factorial(num) {
  if (num === 1) {
    return 1;
  }

  const fact = num * factorial(num - 1);
  return fact; // 2 6 24
}

console.log(factorial(5));

// const arr = ["a", "", "c"];
// const sparseKeys = Object.keys(arr);
// const denseKeys = [...arr.keys()];
// console.log(sparseKeys);
// // console.log(denseKeys);
// console.log(arr[sparseKeys[1]]);

// // console.log(arr[denseKeys[2]]);
