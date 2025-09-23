function isPalindrome(str) {
  let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  function checkIsPalindrome(s, start = 0, end = s.length - 1) {
    // case case: if pointers meet or cross, it's a palindrome :
    if (start >= end) {
      return true;
    }
    // check if characters at current positions match :
    if (s[start] !== s[end]) {
      return false;
    }

    // recursively check the next inner characters :
    return checkIsPalindrome(s, start + 1, end - 1);
  }

  return checkIsPalindrome(cleanStr);
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("malayalam"));
console.log(isPalindrome("kerala"));
