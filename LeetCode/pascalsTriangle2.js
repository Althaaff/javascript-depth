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
