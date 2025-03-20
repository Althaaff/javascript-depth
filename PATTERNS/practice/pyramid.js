function pyramidPattern(n) {
  let num = 2; // even numbers pattern //

  for (let i = 1; i <= n; i++) {
    let row = " ".repeat(n - i);

    for (j = 1; j <= i; j++) {
      row += num + " ";

      num += 2;
    }

    console.log(row);
  }
}

pyramidPattern(5);
