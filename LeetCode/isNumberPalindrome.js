// leetcode easy problem :

function isNumberPalindrome(x) {
  if (x < 0) {
    return false;
  }
  if (typeof x === "string") {
    return "input must be a number!";
  }

  let reverse = 0;
  let xCopy = x;

  // logic
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return reverse === xCopy;
}

console.log(isNumberPalindrome(-121));
console.log(isNumberPalindrome("althaf"));
console.log(isNumberPalindrome(121));
