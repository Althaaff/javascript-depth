// series in reverse order.
function fiboReverse(n, a, b) {
  if (n > 0) {
    // recursive happens :
    fiboReverse(n - 1, b, a + b);

    // print result:
    console.log(a + " ");
  }
}

let N = 10;
fiboReverse(N, 0, 1);
