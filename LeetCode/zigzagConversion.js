/*
  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
  (you may want to display this pattern in a fixed font for better legibility) 
*/

/*
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
 */

// solution :

function convert(s, numRows) {
  if (numRows === 1 || numRows >= s.length) return s;

  const rows = new Array(numRows).fill("");
  let currentRow = 0;
  let goingDown = false;

  for (const char of s) {
    rows[currentRow] += char;
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown; // toggle direction
    }
    currentRow += goingDown ? 1 : -1;
  }

  return rows.join("");
}

const s = "PAYPALISHIRING";
const numRows = 3;
console.log(convert(s, numRows));
