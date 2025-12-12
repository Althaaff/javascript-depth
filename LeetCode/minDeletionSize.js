// // method 1:
function transposeStrings(arr) {
  return Array.from({ length: arr[0].length }, (_, colIndex) => {
    return arr.map((row) => row[colIndex]).join("");
  });
}

console.log(transposeStrings(["cba", "daf", "ghi"]));

// method 2:
function minDeletionSize(arr) {
  let cols = arr[0].length;
  let rows = arr.length;

  // console.log("access", arr[1][0]);

  let res = [];

  for (let col = 0; col < cols; col++) {
    let newStr = "";
    for (let row = 0; row < rows; row++) {
      newStr += arr[row][col] || "";
    }
    res.push(newStr);
  }

  function getUnsortedStrings(arr) {
    // method 1:
    // let unsorted = [];
    // for (let str of arr) {
    //   for (let i = 1; i < str.length; i++) {
    //     if (str[i] < str[i - 1]) {
    //       unsorted.push(str);
    //     }
    //   }
    // }
    // return unsorted;

    // method 2: filter out descending remove ascending for deletion count
    const array = arr.filter((str) => {
      for (let i = 1; i < str.length; i++) {
        if (str[i] < str[i - 1]) {
          return true;
        }
      }
      return false;
    });
    return array;
  }

  return getUnsortedStrings(res).length;
}

console.log(minDeletionSize(["cba", "daf", "ghi"]));
console.log(minDeletionSize(["zyx", "wvu", "tsr"]));
console.log(minDeletionSize(["a", "b"]));
console.log(minDeletionSize(["rrjk", "furt", "guzm"]));
