function teemoAttacking(timeSeries, duration) {
  let total = 0;

  for (let i = 0; i < timeSeries.length - 1; i++) {
    total += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
  }

  return total + duration;
}

console.log(teemoAttacking([1, 2], 2));

// approach 2:

function teemoAttacking2(timeSeries, duration) {
  const n = timeSeries.length;

  let totalDuration = 0;

  if (n === 0) return n.length;

  for (let i = 0; i < timeSeries.length - 1; i++) {
    let timeDefference = timeSeries[i + 1] - timeSeries[i];

    totalDuration += Math.min(duration, timeDefference);
  }

  totalDuration += duration;

  return totalDuration;
}

console.log(teemoAttacking2([1, 2, 3], 2)); // poinsons seconds --> 1 -- 2 -- 3 -- 4 // overlapped both 2 and 3
console.log(teemoAttacking2([1, 2, 6], 2));
