function printStar(num) {
  let str = "";

  for (let i = num; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }

  return str;
}

console.log(printStar(5));
