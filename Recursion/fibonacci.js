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
/*
   Each call to fiboRecursion(n) waits for the results of fiboRecursion(n-1) and fiboRecursion(n-2).
   The base case stops the recursion when 
   is 0 or 1, allowing the function to return values back up the call stack.
*/
function fiboRecursion(n) {
  //  base case :
  if (n <= 1) {
    return n;
  }

  // if base case doesnt hit return the main() function recursively :
  return fiboRecursion(n - 1) + fiboRecursion(n - 2);
}

console.log(fiboRecursion(7));
