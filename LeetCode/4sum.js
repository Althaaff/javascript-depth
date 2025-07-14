// 4sum brute force approach //

function fourSum(arr, target) {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let res = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (k = j + 1; k < n; k++) {
        for (l = k + 1; l < n; l++) {
          if (arr[i] + arr[j] + arr[k] + arr[l] === target) {
            const curr = [arr[i], arr[j], arr[k], arr[l]];

            curr.sort((a, b) => a - b);

            if (!res.some((x) => x.join() === curr.join())) {
              res.push(curr);
            }
          }
        }
      }
    }
  }

  return res;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
