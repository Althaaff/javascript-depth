// function isPrimeNum(num) {
//   if (num < 2) {
//     console.log("entered number is not prime number!");
//     return false;
//   }

//   if (num === 2 || num === 3) {
//     console.log("prime number!");
//     return true;
//   }

//   if (num % 2 === 0 || num % 3 === 0) {
//     console.log("not prime number!");
//     return false;
//   }

//   for (let i = 5; i * i <= num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) {
//       console.log("entered number is not prime number!");
//       return false;
//     }
//   }

//   console.log("entered number is prime number!");
//   return true;
// }

// console.log(isPrimeNum(2));

// Approach 2 :
let isPrime = true;
let num = 23;

if (num < 2) {
  return false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0 || num % (i + 2) === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log("isPrime or not  :", isPrime);
