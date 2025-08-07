let NumArray = function (nums) {
  this.nums = nums;
};

NumArray.prototype.sumRange = function (left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    sum += this.nums[i];
  }

  return sum;
};

let operations = ["NumArray", "sumRange", "sumRange", "sumRange"];
let values = [
  [-2, 0, 3, -5, 2, -1],
  [0, 2],
  [2, 5],
  [0, 5],
];

let numArray = new NumArray(values[0]);

let result = [];

let i = 0;
while (i < operations.length) {
  if (operations[i] === "NumArray") {
    result.push(null);
  }

  i++;
}

for (let i = 1; i < operations.length; i++) {
  if (operations[i] === "sumRange") {
    let left = values[i][0];
    let right = values[i][1];

    result.push(numArray.sumRange(left, right));
  }
}

console.log(result);
