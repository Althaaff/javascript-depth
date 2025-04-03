// check any number is prime number or not :

// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }
//   if (num === 2 || num === 3) {
//     return true;
//   }
//   if (num % 2 === 0 || num % 3 === 0) {
//     // eleminates even numbers and multiples of 3 //
//     return false;
//   }

//   for (i = 5; i * i <= num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(99));
// console.log(isPrime(34));

// Approach 2 :

let num = 23;

let isPrime = true;

if (num <= 1) {
  return false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log("number is :", isPrime);
