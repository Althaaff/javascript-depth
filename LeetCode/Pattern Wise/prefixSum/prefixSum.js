function letterCombinations(digits) {
  if (digits.length === 0) return [];

  let map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let res = [];
  let q = [];

  q.push("");

  while (q.length > 0) {
    const prefix = q.shift();

    if (prefix.length === digits.length) {
      res.push(prefix);
    } else {
      const digit = digits[prefix.length];

      if (digit < 2 || digit > 9) {
        continue;
      }

      for (let letter of map[digit]) {
        q.push(prefix + letter);
      }
    }
  }

  return res;
}

console.log(letterCombinations("23"));
