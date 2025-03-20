function findFibo(num) {
  if (num <= 0) {
    return [];
  }

  if (num === 1) {
    return [0, 1];
  }

  let fibo = [0, 1];

  for (let i = 2; i <= num; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);

    console.log("updating", i, "fibo", fibo);
  }

  return fibo;
}

console.log(findFibo(6));

// Approach 2 recursive function calls  :
function findFibo(num) {
  if (num <= 0) return [];

  if (num === 1) return [0, 1];

  let fib = findFibo(num - 1); /// *recursive function* //

  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);

  return fib;
}

console.log(findFibo(5));

// 🔹 4️⃣ Space Optimized Approach (Only Storing Last Two Values)

// function findFibo(num) {
//   if (num <= 0) return [];

//   if (num === 1) return [0];

//   let result = [0, 1];

//   let prev = 0,
//     curr = 1;
//   let next;

//   for (let i = 2; i <= num; i++) {
//     next = prev + curr;
//     result.push(next);

//     console.log(next);

//     prev = curr;
//     curr = next;
//   }

//   return result;
// }

// console.log(findFibo(4));
