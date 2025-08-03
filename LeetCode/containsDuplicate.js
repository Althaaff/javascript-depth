// brute-force solution 1 (using hashmap):

var containsDuplicate = function (nums) {
  if (nums.length === 0) return [];

  let freq = {};
  let isDuplicate = false;

  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;

    if (freq[num] > 1) {
      return true;
    } else {
      isDuplicate = false;
    }
  }

  return isDuplicate;
};

console.log(containsDuplicate([0, 4, 5, 0, 3, 6]));

// brute-force solution 2 (using nested loop)  -- below solution will not work for larger inputs:
function containsDuplicate2(nums) {
  if (nums.length === 0) return [];

  let isDuplicate = false;

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j + 1] === nums[i]) {
        isDuplicate = true;
        count++;

        if (count >= 1) {
          return isDuplicate;
        }
      } else {
        isDuplicate = false;
      }
    }
  }

  return isDuplicate;
}

console.log(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// optimized solution :
function findDuplicate1(nums) {
  if (nums.length === 0) return [];

  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) return true;
  }
  return false;
}

console.log(findDuplicate1([1, 2, 2, 3]));

// optimized solution :
function findDuplicate2(nums) {
  if (nums.length === 0) return [];

  let seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) return true;

    seen.add(num);
  }

  return false;
}

console.log(findDuplicate2([1, 2, 3, 4]));
console.log(findDuplicate2([1, 2, 3, 3]));
