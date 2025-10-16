// Input: s = "loveleetcode", c = "e"
// Output: [3,2,1,0,1,0,0,1,2,2,1,0]

function shortestToChar(s, c) {
  const n = s.length;
  let results = new Array(n).fill(n); // Initialize with a large value

  // First pass: Left to right
  let lastSeen = -1;
  for (let i = 0; i < n; i++) {
    if (s[i] === c) {
      lastSeen = i;
      results[i] = 0; // Distance to itself
    } else if (lastSeen !== -1) {
      results[i] = Math.min(results[i], i - lastSeen);
    }
  }

  // Second pass: Right to left
  lastSeen = -1; // Reset for the second pass
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) {
      lastSeen = i;
      results[i] = 0; // Already set, but ensure
    } else if (lastSeen !== -1) {
      results[i] = Math.min(results[i], lastSeen - i);
    }
  }

  return results;
}

console.log(shortestToChar("loveleetcode", "e"));

// solution 2 easy approach :
function shortestToChar2(s, c) {
  let res = [];
  res.length = s.length;

  let index = s.indexOf(c);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      index = i;
      res[i] = 0;
    } else {
      res[i] = Math.abs(index - i);
    }
  }

  index = s.lastIndexOf(c);

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) {
      index = i;
      // res[i] = 0; // donned to do again
    } else {
      res[i] = Math.min(res[i], Math.abs(index - i));
    }
  }

  return res;
}

console.log(shortestToChar2("loveleetcode", "e"));
