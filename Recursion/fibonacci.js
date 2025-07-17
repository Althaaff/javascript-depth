// using for loop :
function fibo(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
}

console.log(fibo(7));

// using recursion :
function fiboRecursion(n) {
  //  base case :
  if (n <= 1) {
    return n;
  }

  // if base case doesnt hit return the main() function recursively :
  return n * fiboRecursion(n - 1) + fiboRecursion(n - 2);
}

console.log(fiboRecursion(7));
