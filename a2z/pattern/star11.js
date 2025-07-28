function generateBinaryPyramid() {
  let rows = 5;
  let output = "";
  let pattern = 0;

  for (let i = 0; i < rows; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      const bitValue = (pattern + j) % 2;
      row += bitValue + " ";
    }
    output += row.trim();
    output += "\n";
    pattern = 1 - pattern;
  }
  return output;
}

console.log(generateBinaryPyramid());
