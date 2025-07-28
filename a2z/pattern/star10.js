function printStar(n) {
  let star = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    star += "\n";
  }

  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    star += "\n";
  }

  return star;
}

console.log(printStar(5));
