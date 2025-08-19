// using sort method (1):

function arrayPartition(nums) {
  let sum = 0;
  let n = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i += 2) {
    sum += nums[i];
  }

  return sum;
}

console.log(arrayPartition([6, 2, 6, 5, 1, 2]));
console.log(arrayPartition([1, 4, 3, 2]));

// using two pointer approach (2) :

function arrayPartition2(nums) {
  const sorted = nums.sort((a, b) => a - b);

  let sum = 0;

  let left = 0;
  let right = sorted.length - 1;

  while (left < right) {
    sum += sorted[left];

    left += 2;
  }

  return sum;
}
console.log(arrayPartition2([1, 4, 3, 2]));
console.log(arrayPartition2([6, 2, 6, 5, 1, 2]));
console.log(arrayPartition2([5, 3, 5, 3]));

// without using sort method how to solve the problem using two pointer approach (3) :
function arrayPartition3(nums) {
  let sum = 0;
  let n = nums.length;
  let used = Array(n).fill(false);

  for (let i = 0; i < n / 2; i++) {
    let min1 = Infinity,
      min2 = Infinity;
    let idx1 = -1,
      idx2 = -1;

    for (let j = 0; j < n; j++) {
      if (!used[j] && nums[j] < min1) {
        min2 = min1;
        idx2 = idx1;
        min1 = nums[j];
        idx1 = j;
      } else if (!used[j] && nums[j] < min2) {
        min2 = nums[j];
        idx2 = j;
      }
    }
    sum += min1;
    used[idx1] = true;
    used[idx2] = true;
  }
  return sum;
}

console.log(arrayPartition3([1, 4, 3, 2]));
console.log(arrayPartition3([6, 2, 6, 5, 1, 2]));

// approach 4:
function arrayPartition4(nums) {
  let maxNum = nums.length;
  let count = new Array(maxNum + 1).fill(0);
  let sum = 0;
  let is_min_turn = true;

  for (let num of nums) {
    count[num] += 1;
  }

  for (let i = 1; i <= maxNum; i++) {
    while (count[i] > 0) {
      console.log("5", count[i]);

      if (is_min_turn) {
        sum += i;
      }
      count[i] -= 1;
      console.log("count", count);
      is_min_turn = !is_min_turn;
      console.log(is_min_turn);
    }
  }

  return sum;
}

console.log(arrayPartition4([4, 3, 2, 1]));
