function diStringMatch(str) {
  let n = str.length;
  let result = Array(n + 1).fill();

  let low = 0;
  let high = n;

  for (let i = 0; i < n; i++) {
    if (str[i] === "I") {
      result[i] = low;
      low = low + 1;
    } else if (str[i] === "D") {
      result[i] = high;
      high = high - 1;
    }
  }
  result[n] = low;

  return result;
}

console.log(diStringMatch("IDID"));
console.log(diStringMatch("III"));
console.log(diStringMatch("DDI"));
