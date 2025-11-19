function triangleArea(points) {
  let maxArea = 0;
  let n = points.length;

  for (let i = 0; i < n; i++) {
    // console.log("i", i);
    for (let j = i + 1; j < n; j++) {
      // console.log("j", j);
      for (let k = j + 1; k < n; k++) {
        // console.log("k", k);

        let [x1, y1] = points[i];
        let [x2, y2] = points[j];
        let [x3, y3] = points[k];

        let currentArea =
          0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));

        maxArea = Math.max(currentArea, maxArea);
      }
    }
  }

  return maxArea;
}

console.log(
  triangleArea([
    [0, 0],
    [0, 1],
    [1, 0],
    [0, 2],
    [2, 0],
  ])
);
