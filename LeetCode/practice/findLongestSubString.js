function lengthOfLongestSubString(s) {
  let charMap = new Map();
  let left = 0;
  let longestStr = "";
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    if (charMap.has(s[right])) {
      left = Math.max(charMap.get(s[right]) + 1, left);
    }
    console.log(left);

    charMap.set(s[right], right);

    const currentLength = right - left + 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
      longestStr = s.substring(left, right + 1);
    }
  }

  console.log("longest str", longestStr);

  return maxLength;
}

console.log(lengthOfLongestSubString("bb"));
