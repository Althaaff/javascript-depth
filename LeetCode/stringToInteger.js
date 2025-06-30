function myAtoi(s) {
  let n = s.length;
  let i = 0;
  let result = 0;
  let sign = 1;

  while (i < n && s[i] === " ") {
    i++;
  }

  if ((i < n && s[i] === "+") || s[i] === "-") {
    sign = s[i] === "+" ? 1 : -1;
    i++;
  }

  while (i < n && s[i] >= "0" && s[i] <= "9") {
    const digit = parseInt(s[i]);

    if (result > Math.floor((2 ** 31 - 1 - digit) / 10)) {
      return sign === 1 ? 2 ** 31 - 1 : -(2 ** 31);
    }

    result = result * 10 + digit;
    i++;
  }

  result *= sign;
  if (result > 2 ** 31 - 1) return 2 ** 31 - 1;
  if (result < -(2 ** 31)) return -(2 ** 31);

  return result;
}

console.log(myAtoi("  -3555555555522"));
