function convertToTitle(columnNumber) {
  let res = "";

  while (columnNumber > 0) {
    columnNumber--; // decrement by 1 to make it 0-indexed

    // get remainder (0-25)
    let remainder = columnNumber % 26;

    // convert to character (0 = 'A', 25 = 'Z')
    let char = String.fromCharCode(65 + remainder);

    res = char + res;

    // move to the next digit:
    columnNumber = Math.floor(columnNumber / 26);
  }

  return res;
}

console.log(convertToTitle(701));
console.log(convertToTitle(1));
console.log(convertToTitle(28));
