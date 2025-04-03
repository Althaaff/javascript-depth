// Approach 1 :
// function findFibonacci(num) {
//   if (num < 0) return [];

//   if (num === 1) {
//     return [0, 1];
//   }

//   let fibo = [0, 1];

//   for (i = 2; i <= num; i++) {
//     fibo.push(fibo[i - 1] + fibo[i - 2]);
//   }

//   return fibo;
// }

// console.log(findFibonacci(6));

// Approach 2 swapping :
// function findFibonacci(num) {
//   if (num <= 0) return [];

//   if (num === 1) {
//     return [0, 1];
//   }

//   let result = [0, 1];

//   let prev = 0,
//     curr = 1;
//   let next;

//   for (let i = 2; i <= num; i++) {
//     next = prev + curr;

//     result.push(next);

//     prev = curr;
//     curr = next;
//   }

//   return result;
// }

// console.log(findFibonacci(6));

// Approach 3  recursion:
function findFibo(num) {
  if (num <= 0) return [];

  if (num === 1) return [0, 1]; // once updated then updated array numbers will give not the same number //

  let fibo = findFibo(num - 1);

  fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);

  return fibo;
}

console.log(findFibo(6));
