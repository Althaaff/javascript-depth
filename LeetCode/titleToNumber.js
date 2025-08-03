// Excel Sheet Column Number
// Given a string columnTitle that represents the column title as appears in an Excel sheet,
// return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:

// Input: columnTitle = "A"
// Output: 1

// brute force solution :
// find "AA" char code :
// "A" <--> "Z"

function titleToNumber(columnTitle) {
  if (!columnTitle) {
    return;
  }

  let result = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    result = result * 26 + (columnTitle.charCodeAt(i) - 64);
  }

  return result;
}

console.log(titleToNumber("AB"));
