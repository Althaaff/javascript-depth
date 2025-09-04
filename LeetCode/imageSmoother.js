function imageSmoother(img) {
  const m = img.length,
    n = img[0].length;
  const res = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    // console.log("i", i);
    for (let j = 0; j < n; j++) {
      let sum = 0,
        count = 0;

      // console.log("j", j);

      for (let x = i - 1; x <= i + 1; x++) {
        // console.log("x", x);
        for (let y = j - 1; y <= j + 1; y++) {
          // console.log("y", y);

          if (x >= 0 && x < m && y >= 0 && y < n) {
            sum += img[x][y];
            count++;
          }
        }
      }

      res[i][j] = Math.floor(sum / count);
    }
  }

  return res;
}
console.log(
  imageSmoother([
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 100],
  ])
);

console.log(
  imageSmoother([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
