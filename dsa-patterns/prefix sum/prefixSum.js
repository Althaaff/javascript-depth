// Implementation of Prefix Sum :

class PrefixSum {
  constructor(nums) {
    this.prefix = new Array(nums.length);
    this.prefix[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
      this.prefix[i] = this.prefix[i - 1] + nums[i];
    }
  }

  getSum(left, right) {
    if (left === 0) return this.prefix[right];

    return this.prefix[right] - this.prefix[left - 1];
  }
}

const solver = new PrefixSum([3, 1, 4, 2, 5]);
console.log(solver.getSum(0, 2));
console.log(solver.getSum(1, 4));
