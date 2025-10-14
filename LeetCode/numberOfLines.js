function numberOfLines(width, s) {
  let lines = 1;
  let currentLineTotal = 0;

  for (let char of s) {
    const w = width[char.charCodeAt(0) - 97];

    if (currentLineTotal + w > 100) {
      lines++;
      currentLineTotal = w; // make new line again
    } else {
      currentLineTotal += w;
    }
  }

  return [lines, currentLineTotal];
}

console.log(
  numberOfLines(
    [
      4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10,
    ],
    "bbbcccdddaaa"
  )
);
