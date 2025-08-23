function printStar(n) {
  let space = 2 * (n - 1);

  for (let i = 1; i <= n; i++) {
    let line = "";
    // numbers
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    // spaces
    for (let j = 1; j <= space; j++) {
      line += " ";
    }

    // numbers
    for (let j = i; j >= 1; j--) {
      line += j;
    }
    console.log(line);

    space -= 2;
  }
}

printStar(5);
