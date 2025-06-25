function longestPalindrome(s) {
  let longest = "";

  function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    return s.substring(left + 1, right);
  }

  if (s.length < 1) {
    return "";
  }

  for (let i = 0; i < s.length; i++) {
    const odd = expandAroundCenter(s, i, i);

    const even = expandAroundCenter(s, i, i + 1);

    if (odd.length > longest.length) longest = odd;

    if (even.length > longest.length) longest = even;
  }

  return longest;
}

console.log(longestPalindrome("leveltyhumalayalmarkram"));
