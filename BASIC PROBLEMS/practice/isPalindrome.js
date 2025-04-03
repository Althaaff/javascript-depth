function isPalindrome(str) {
  let j = str.length;

  for (let i = 1; i <= str.length / 2; i++) {
    if (str[i] === str[j]) {
      console.log("strings are palidrome!");
      return true;
    }
    j--;
  }

  return false;
}
console.log(isPalindrome("malayalam"));
