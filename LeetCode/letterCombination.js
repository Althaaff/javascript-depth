// function possibleWords(arr) {
//   if (arr.length === 0) {
//     return arr;
//   }

//   // Mapping digits to corresponding letters
//   const mp = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
//   let res = [];
//   let q = [];
//   q.push("");

//   while (q.length > 0) {
//     let prefix = q.shift();

//     if (prefix.length === arr.length) {
//       res.push(prefix);
//     } else {
//       // get the curresponding digit :
//       const digit = arr[prefix.length];

//       // skip invalid digits :
//       if (digit < 2 || digit > 9) {
//         continue;
//       }

//       // add all possible letters for this digit :
//       for (let letter of mp[digit]) {
//         q.push(prefix + letter);
//       }
//     }
//   }

//   return res;
// }

// const words = "23";
// const result = possibleWords(words);
// console.log(result);

var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return digits;
  }

  // Mapping digits to corresponding letters
  const mp = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let res = [];
  let q = [];
  q.push("");

  while (q.length > 0) {
    let prefix = q.shift();

    if (prefix.length === digits.length) {
      res.push(prefix);
    } else {
      // get the curresponding digit :
      const digit = digits[prefix.length];

      // skip invalid digits :
      if (digit < 2 || digit > 9) {
        continue;
      }

      // add all possible letters for this digit :
      for (let letter of mp[digit]) {
        q.push(prefix + letter);
      }
    }
  }

  return res;
};
console.log(letterCombinations("23"));
console.log(letterCombinations("12"));
