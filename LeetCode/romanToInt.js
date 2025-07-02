// 13. Roman to Integer :
/*

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000


Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

*/

// brute force solution :
function romanToInt(s) {
  console.log(s.length);
  // Mapping of Roman numerals to integers
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let prevValue = 0;

  // Iterate through each character in the string
  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanMap[s[i]];

    // If the current value is less than the previous value, subtract it
    if (currentValue < prevValue) {
      total -= currentValue;
    } else {
      // Otherwise, add it
      total += currentValue;
    }

    // Update the previous value
    prevValue = currentValue;
  }

  return total;
}

// Example usage:
console.log(romanToInt("L")); // Output: 50
console.log(romanToInt("XC"));

// optimized

function romanToInt(s) {
  if (s.length === 0) return "";

  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (romanMap[s[i]] < romanMap[s[i + 1]]) {
      result -= romanMap[s[i]];
    } else {
      result += romanMap[s[i]];
    }
  }

  return result + romanMap[s[s.length - 1]];
}

console.log(romanToInt("LM"));
