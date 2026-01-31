function findSqrt(x) {
  if (x < 2) return x;

  let left = 1;
  let right = Math.floor(x / 2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // rounds down to the nearest integer
    let square = mid * mid;

    if (square === x) return mid;
    else if (square < x) left = mid + 1;
    else right = mid - 1;
  }

  return right;
}

const x1 = 8;
const x2 = 4;
const x3 = 9;
const x4 = 1;

console.log(findSqrt(x1));
console.log(findSqrt(x2));
console.log(findSqrt(x3));
console.log(findSqrt(x4));
