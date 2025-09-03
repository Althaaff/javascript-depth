/*
 * Find the single unique number in an array.
 * Every other number in the array appears twice.
 */

// using reduce method :

function findUniqueNumber(arr) {
  return arr.reduce((acc, curr) => {
    return acc ^ curr;
  });
}

const nums1 = [4, 1, 2, 1, 2];
const nums2 = [1, 0, 1];
const nums3 = [3, 3, 1, 1, 9];

console.log(findUniqueNumber(nums3));
