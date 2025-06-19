function lengthOfLongestSubstring(s) {
  const charMap = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    if (charMap.has(s[right])) {
      left = Math.max(charMap.get(s[right]) + 1, left);
    }
    charMap.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength; // return the maximum length found //
}

const s = "aabbcdd";
const result = lengthOfLongestSubstring(s);
console.log(result);
