function printStar(n) {
  let str = "";

  for (let i = 1; i <= n; i++) {
    str += " ".repeat(n - i);
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }
    str += "\n";
  }

  for (let i = n; i >= 1; i--) {
    str += " ".repeat(n - i);
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }
    str += "\n";
  }

  return str;
}

console.log(printStar(5));
