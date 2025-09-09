// challenge:print n to 1 without using loop:

function printNto1(n) {
  if (n > 0) {
    console.log(n);
    return printNto1(n - 1);
  }

  return;
}

printNto1(5);
