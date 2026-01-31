function reverseString(str) {
  let reversedStr = "";

  while (str.length > 0) {
    reversedStr += str[str.length - 1];
    str = str.slice(0, str.length - 1);
  }

  return reversedStr;
}

console.log(reverseString("malayalaM"));
