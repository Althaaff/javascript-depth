function isMonoTonic(nums) {
  let direction = 0;
  let n = nums.length - 1;

  /* increase --> (1) / decrease --> (-1) */

  for (let i = 1; i <= n; i++) {
    let previous = nums[i - 1];
    let current = nums[i];

    // for tracking increase  :
    if (current > previous) {
      if (direction === 0) {
        direction = 1; // set 1 for tracking increase
      } else if (direction === -1) {
        // if mixed found (increase nums + decrease nums up/down) :
        return false;
      }
      // or else if direction is still (1) keep going (tracking increase)
    } else if (current < previous) {
      if (direction === 0) {
        direction = -1; // set -1 for tracking decrease
      } else if (direction === 1) return false;
      // or else if direction still (-1) keep going  (tracking decrease)
    }
  }

  return true;
}

console.log(isMonoTonic([1, 2, 2, 3]));
console.log(isMonoTonic([6, 5, 4, 4]));
console.log(isMonoTonic([1, 3, 2]));
console.log(isMonoTonic([1, 1, 1]));
