// PROBLEM: Intersection of Arrays: Find common elements between two unsorted arrays. (Hashing or sorting, applies to Intersection of Two Sorted Arrays.)
// Return a new array with elements that appear in both arrays, without duplicates.

function findIntersection(arr1, arr2) {
  let map = {};
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];

    map[value] = true;
  }

  // return map;

  console.log(map);

  for (let j = 0; j < arr2.length; j++) {
    const value = arr2[j];
    // console.log(value);

    if (map[value]) {
      console.log(map[value]);
      result.push(value);

      delete map[value];

      // console.log("deleted", delete map[value]);
    }
  }

  return result;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 1, 3, 3, 7, 5];

console.log(findIntersection(arr1, arr2));

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 3, 4];

let map = {};
array1.forEach((v) => (map[v] = true));

console.log(map);

let result = [];

array2.forEach((v) => {
  if (map[v]) {
    result.push(v); // should push both 3s if delete is not used

    delete map[v];
  }
});

console.log(result); // Should be [3, 3, 4]
