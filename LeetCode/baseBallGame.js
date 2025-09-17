function baseBallGame(operations) {
  let totalSum = 0;
  let records = [];

  operations.forEach((item) => {
    let convertedToNum = Number(item);

    if (!isNaN(convertedToNum)) {
      records.push(convertedToNum);
    }

    // logics should goes here :
    if (item === "C") {
      records.pop();
    } else if (item === "D") {
      records[records.length] = records[records.length - 1] * 2;
    } else if (item === "+") {
      records[records.length] =
        records[records.length - 1] + records[records.length - 2];
    }
  });

  if (records.length === 0) {
    records.push(0);
  }

  return records.reduce((a, b) => a + b, 0);

  // or you can use (for loop)
  // for (let i = 0; i < records.length; i++) {
  //   totalSum += records[i];
  // }

  // return totalSum;
}

console.log(baseBallGame(["5", "2", "C", "D", "+"]));
console.log(baseBallGame(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(baseBallGame(["1", "C"]));
