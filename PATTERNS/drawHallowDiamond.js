function drawHollowDiamond(n) {
  const totalRows = 2 * n - 1;
  const totalCols = 2 * n - 1;

  for (let i = 0; i < totalRows; i++) {
    let row = "";

    for (let j = 0; j < totalCols; j++) {
      // Top half
      if (i < n) {
        if (j === i || j === totalCols - 1 - i) {
          row += "*";
        } else {
          row += " ";
        }
      }
      // Bottom half
      else {
        const mirror = totalRows - 1 - i;
        if (j === mirror || j === totalCols - 1 - mirror) {
          row += "*";
        } else {
          row += " ";
        }
      }
    }

    console.log(row);
  }
}

drawHollowDiamond(5);
