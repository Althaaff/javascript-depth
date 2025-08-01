//  brute force solution :
function pascalsTriangle2(rowIndex) {
  const rows = [];

  for (let i = 0; i < rowIndex + 1; i++) {
    let row = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row[j] = rows[i - 1][j - 1] + rows[i - 1][j];
      }
    }

    rows.push(row);
  }

  return rows[rowIndex];
}

console.log(pascalsTriangle2(3));

// optimized solution for above problem :
function generatePascals2(rowIndex) {
  if (rowIndex === 0) return [1]; // base case 1 row
  if (rowIndex === 1) return [1, 1]; // base case 2 rows

  const prevRows = generatePascals2(rowIndex - 1);
  const newRow = new Array(rowIndex + 1).fill(1);

  for (let i = 1; i < rowIndex; i++) {
    newRow[i] = prevRows[i - 1] + prevRows[i];
  }

  return newRow;
}

console.log(generatePascals2(4));
