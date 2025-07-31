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

console.log(pascalsTriangle(5));
