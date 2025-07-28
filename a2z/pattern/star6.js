function printStar(n) {
  let num = "";

  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      num += j;
    }
    num += "\n";
  }

  return num;
}

console.log(printStar(5));
