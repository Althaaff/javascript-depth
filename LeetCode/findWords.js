// find words leetcode problem (keyboard row)

function findWords(words) {
  let res = [];
  const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  for (let word of words) {
    let upperWord = word.toUpperCase();

    for (let row of rows) {
      if ([...upperWord].every((char) => row.includes(char))) {
        res.push(word);
        break;
      }
    }
  }

  return res;
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
