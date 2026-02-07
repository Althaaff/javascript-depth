function validPalindrome(str) {
  if (str.length === 0) return true;

  let cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
}

console.log(validPalindrome("0P"));

console.log(validPalindrome("A man, a plan, a canal: Panama"));
console.log(validPalindrome("race a car"));
console.log(validPalindrome("  "));
