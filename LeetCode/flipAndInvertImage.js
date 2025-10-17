function flipAndInvertImage(image) {
  for (let row of image) {
    let i = 0,
      j = row.length - 1;
    while (i <= j) {
      if (i === j) {
        row[i] ^= 1;
      } else {
        [row[i], row[j]] = [row[j] ^ 1, row[i] ^ 1];
      }
      i++;
      j--;
    }
  }
  return image;
}

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
