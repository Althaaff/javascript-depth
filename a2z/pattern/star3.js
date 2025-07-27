function printPattern(num) {
  let count = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      count += j;
    }
    count += "\n";
  }

  return count;
}

console.log(printPattern(7));
