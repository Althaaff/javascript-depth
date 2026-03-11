function reverseString(str) {
  if (str.length < 1) {
    return null;
  }

  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    [str[i], str[j]] = [str[j], str[i]];

    i++;
    j--;
  }

  return str;
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
