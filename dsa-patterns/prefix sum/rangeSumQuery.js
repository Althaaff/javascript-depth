function rangeSumQuery(nums, queries) {
  let prefix = new Array(nums.length);

  prefix[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }

  let result = [];

  for (let [L, R] of queries) {
    if (L === 0) {
      result.push(prefix[R]);
    } else {
      result.push(prefix[R] - prefix[L - 1]);
    }
  }

  return result;
}

console.log(
  rangeSumQuery(
    [2, 4, 1, 7, 3, 6],
    [
      [1, 3],
      [0, 4],
      [2, 5],
    ],
  ),
);
