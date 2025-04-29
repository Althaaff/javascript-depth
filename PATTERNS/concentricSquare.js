// concentricSquare :
function concentricSquare(n) {
  let size = 2 * n - 1;

  for (let i = 0; i < size; i++) {
    let row = "";

    for (let j = 0; j < size; j++) {
      let top = j;
      let left = i;
      let right = size - 1 - j;
      let bottom = size - 1 - i;

      let minDistance = Math.min(top, left, right, bottom);

      row += n - minDistance + " ";
    }

    console.log(row.trim());
  }
}

concentricSquare(4);

// Math.min example :
// const n1 = [2];
// const n2 = [4];
// const n3 = [5];
// const n4 = [1];

// const minValue = Math.min(n1, n2, n3, n4);

// console.log(minValue);
