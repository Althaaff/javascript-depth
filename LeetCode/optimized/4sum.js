function fourSum(nums, target) {
  nums.sort((a, b) => a - b);

  let n = nums.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      // console.log("skips", i);
      continue;
    }
    for (let j = i + 1; j < n; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        // console.log("skips", j);
        continue;
      }
      // console.log(j > i + 1 && nums[j] === nums[j - 1]);

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        // console.log("excuted!");
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;

          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
