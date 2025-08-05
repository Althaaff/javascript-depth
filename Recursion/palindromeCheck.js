function isPalindromeUtil(s, left, right) {
  // base case
  if (left >= right) return true;

  if (s[left] !== s[right]) return false;

  return isPalindromeUtil(s, left + 1, right - 1);
}

function isPalindrome(s) {
  let left = 0,
    right = s.length - 1;
  return isPalindromeUtil(s, left, right);
}

let s = "abbac";
if (isPalindrome(s)) {
  console.log("Yes");
} else {
  console.log("No");
}
