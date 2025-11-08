function validPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "");
  str = str.toLowerCase();

  let n = str.length;

  for (let i = 0; i < n / 2; i++) {
    if (str.charAt(i) !== str.charAt(n - 1 - i)) {
      return false;
    }
  }

  return true;
}

console.log(validPalindrome("A man, a plan, a canal: Panama"));
