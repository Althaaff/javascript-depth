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

// easy solution for flip and invert image ( solution 2 ) :
function flipAndInvertImage2(image) {
  let m = image.length;
  let n = image[0].length;

  for (let i = 0; i < m; i++) {
    image[i].reverse();
    console.log("reversed", image[i]);

    for (let j = 0; j < n; j++) {
      image[i][j] = 1 - image[i][j];
    }
  }

  return image;
}

console.log(
  flipAndInvertImage2([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
