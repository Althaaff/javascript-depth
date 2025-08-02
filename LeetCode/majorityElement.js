// // finding majority element fromt the array input //
// // brute-force solution :
function majorityElement(nums) {
  if (nums.length === 0) return [];

  let candidate = -1;
  let count = 0;

  // phase 1: find the potential candidate :
  nums.forEach((num) => {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count += 1;
    } else {
      count -= 1;
    }
  });

  // phase 2: verify the candidate (if needed) :
  let finalCount = 0;
  nums.forEach((num) => {
    if (num === candidate) {
      finalCount += 1;
    }
  });

  if (finalCount > nums.length / 2) {
    return candidate;
  } else {
    return "No majority element found!";
  }
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1, 3, 3, 4]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

function findMajorityEle(nums) {
  let n = nums.length;
  const thersHold = Math.floor(n / 2);
  console.log("thersHold", thersHold);

  for (let i = 0; i < n; i++) {
    let count = 0;

    for (let j = 0; j < n; j++) {
      if (nums[j] === nums[i]) {
        count++;
      }
    }

    if (count > thersHold) return nums[i];
  }

  return "No Majority Element Found!";
}

console.log(findMajorityEle([1, 3, 3, 4]));

// Optimized solutions :
// Frequency Map (HashMap) :
function findMajorityOfElement(nums) {
  if (nums.length === 0) return [];

  let freqMap = {};
  const thersHold = Math.floor(nums.length / 2);

  for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;

    console.log("num", freqMap[num], thersHold);

    if (freqMap[num] > thersHold) {
      return num;
    }
  }
}

console.log(findMajorityOfElement([1, 3, 3, 4]));

// Boyer-Moore Voting Algorithm (Most Optimized):

function majorityOfElement(nums) {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else {
      count += num === candidate ? 1 : -1;
    }
  }

  return candidate;
}

console.log(majorityOfElement([1, 2, 3, 3, 4]));
