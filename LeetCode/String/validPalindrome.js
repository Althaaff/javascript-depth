function validPalindrome(str) {
  if (str.length === 0) return true;

  let newStr = "";
  str = str
    .replace(/[^A-Za-z]/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr === str;
}

console.log(validPalindrome("A man, a plan, a canal: Panama"));
console.log(validPalindrome("race a car"));
console.log(validPalindrome("  "));
