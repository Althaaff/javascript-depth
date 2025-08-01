// brute force logic :

function pascalsTriangle(numRows) {
  let rows = [];

  for (let i = 0; i < numRows; i++) {
    // create empty array in each outer loop iterations
    let row = [];

    for (let j = 0; j <= i; j++) {
      // set first and last element (1) :
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        // Middle elements are sum of two elements from previous row
        row.push(rows[i - 1][j - 1] + rows[i - 1][j]);
      }
    }
    rows.push(row);
  }

  return rows;
}

// console.log(pascalsTriangle(5));

// optimized approach using recursion :
function generatePascalsTriangle(numRows) {
  if (numRows === 0) return [];

  if (numRows === 1) {
    console.log("found");
    return [[1]];
  }

  const prevRows = generatePascalsTriangle(numRows - 1);

  console.log("prevRows", prevRows);

  const newRow = new Array(numRows).fill(1);

  for (let i = 1; i < numRows - 1; i++) {
    newRow[i] = prevRows[numRows - 2][i - 1] + prevRows[numRows - 2][i];

    console.log("newRow", newRow);
  }

  prevRows.push(newRow);

  return prevRows;
}

console.log(generatePascalsTriangle(4));
