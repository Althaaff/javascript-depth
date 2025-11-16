// find is it last character ends with 0?
// The input array always ends with 0
/*
  If you see 0 → eat 1 bit
  If you see 1 → eat 2 bits (must be 10 or 11)
*/

function isOneBitChar(bits) {
  let n = bits.length;
  let i = 0;

  while (i < n - 1) {
    if (bits[i] === 0) {
      i += 1;
    } else {
      i += 2;
    }
  }

  return i === n - 1;
}

console.log(isOneBitChar([1, 0, 0]));
console.log(isOneBitChar([1, 1, 1, 0]));
