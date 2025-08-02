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
