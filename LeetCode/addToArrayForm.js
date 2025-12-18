var addToArrayForm = function (num, k) {
  let res = [];

  // Start from the last digit of num
  let i = num.length - 1;
  let carry = k;

  // Process digits from right to left
  while (i >= 0 || carry > 0) {
    // Add current digit of num (if exists) to carry
    if (i >= 0) {
      carry += num[i];
    }

    // Insert the last digit of carry at the beginning of result
    res.unshift(carry % 10);

    // Remove the last digit from carry
    carry = Math.floor(carry / 10);

    i--;
  }

  return res;
};

console.log(
  addToArrayForm(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
    516
  )
);
