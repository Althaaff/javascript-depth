// Find number n in sorted array ar
// Returns array index if found or -1 if not found

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let position = findNumber(90, arr);
console.log(position);

function findNumber(n, ar) {
  return _findNumber(n, ar, 0, ar.length - 1);
}

// Find number n in sorted array ar in between indexes i1 and i2
// using recursive approach
function _findNumber(n, ar, i1, i2) {
  if (i2 < i1) return -1;

  var mid = i1 + Math.floor((i2 - i1) / 2);

  if (n === ar[mid]) return mid;

  if (n < ar[mid]) return _findNumber(n, ar, i1, mid - 1);

  return _findNumber(n, ar, mid + 1, i2);
}
