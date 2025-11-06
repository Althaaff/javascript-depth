function floodFill(img, sr, sc, color) {
  const rows = image.length;
    const cols = image[0].length;
    const oldColor = image[sr][sc];

    if (image[sr][sc] === color) return image;

    function dfs(r,c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols) return;
        if (image[r][c] !== oldColor) return;


        image[r][c] = color;

        dfs(r-1, c);
        dfs(r+1, c);
        dfs(r, c-1);
        dfs(r, c+1);
    }

    dfs(sr, sc);

    return image;
}

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
