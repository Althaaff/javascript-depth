let longestPalindromicSubstring = function (s) {
  if (!s) return "";

  let start = 0;
  let maxLength = 1;

  // helper function to expand around center
  const expandAroundCenter = (left, right) => {
    console.log(left, right);
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return [left + 1, right - 1];
  };

  for (let i = 0; i < s.length; i++) {
    let [left, right] = expandAroundCenter(i, i);
    if (right - left + 1 > maxLength) {
      start = left;
      maxLength = right - left + 1;
    }

    [left, right] = expandAroundCenter(i, i + 1);
    if (right - left + 1 > maxLength) {
      start = left;
      maxLength = right - left + 1;
    } else {
      console.log("logged");
    }
  }

  // Return the longest palindromic substring
  return s.slice(start, start + maxLength);
};

console.log(longestPalindromicSubstring("babad"));
