function reverseString(str) {
  // base case: if the string is empty or has only one character
  //  it's already reversed.
  if (str === "" || str.length === 1) {
    return str;
  } else {
    return reverseString(str.substring(1)) + str.charAt(0);
  }
}

console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));
