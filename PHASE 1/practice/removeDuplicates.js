// Approach 1 :
// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates([2, 3, 3, 4, 5, 5, 6, 7, 8, 8]));

// Approach 2 :
function removeDuplicates(arr) {
  let seen = {};
  let result = [];

  for (let num of arr) {
    if (!seen[num]) {
      result.push(num);

      seen[num] = true;
    }
  }

  return result;
}

console.log(removeDuplicates([1, 2, 2, 4, 5, 5, 4, 4]));
