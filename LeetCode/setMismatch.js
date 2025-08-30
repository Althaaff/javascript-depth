// (set misMatch) Find the number that occurs twice and the number that is missing and return them in the form of an array.

function setMisMatch(nums) {
  let set = new Set();
  let duplicate = -1;
  let missing = -1;

  for (let num of nums) {
    if (set.has(num)) {
      duplicate = num;
    } else {
      set.add(num);
    }
  }

  // find missing :
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      missing = i;
    }
  }

  return [duplicate, missing];
}

console.log(setMisMatch([1, 2, 2, 4]));
console.log(setMisMatch([1, 1]));
console.log(setMisMatch([2, 2]));
console.log(setMisMatch([3, 2]));
