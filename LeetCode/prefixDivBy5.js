function prefixDivBy5(nums) {
  let res = [];
  // keep track of the remainder when divided by 5 //
  let remainder = 0;

  for (let i = 0; i < nums.length; i++) {
    remainder = (remainder * 2 + nums[i]) % 5;

    res.push(remainder === 0);
  }
  return res;
}

console.log(prefixDivBy5([0, 1, 1]));
console.log(prefixDivBy5([1, 1, 1]));
