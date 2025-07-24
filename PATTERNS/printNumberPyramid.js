function printNumberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i); // add leading spaces
    let numbers = (i + " ").repeat(i).trim(); // create repeated numbers
    console.log(spaces + numbers); // print line
  }
}
printNumberPyramid(5);
