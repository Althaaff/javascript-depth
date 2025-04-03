function zigzagPattern(n) {
  let num = 1;

  for (let i = 0; i < n; i++) {
    let row = " ".repeat(i * 2); // every number of rows before space adding* //

    for (let j = 0; j < n - i; j++) {
      row += num + " "; // " " --> for every number after space* //
      num++;
    }

    console.log(row);
  }
}

zigzagPattern(4);

//  instead of printing the number print * ?
function zizagStarPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = " ".repeat(i * 2);

    for (j = 0; j < n - i; j++) {
      row += " *";
    }

    console.log(row);
  }
}

zizagStarPattern(4);
