// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to generate first 'count' prime numbers
function generatePrimes(count) {
  // count for how much prime numbers we should print
  let primes = [];
  let num = 2;
  while (primes.length < count) {
    // console.log("primes :", primes);

    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  return primes;
}

// Function to print the diamond prime pattern
function primeDiamondPattern(n) {
  let totalRows = 2 * n - 1; // Total rows including upper and lower half
  console.log(totalRows);
  let primes = generatePrimes((n * (n + 1)) / 2); // Enough prime numbers for the pattern
  let index = 0;

  // Print upper half including the middle row
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat((n - i) * 2);
    let row = [];
    for (let j = 0; j < i; j++) {
      row.push(primes[index++]);
    }
    console.log(spaces + row.join(" "));
  }

  // Print lower half (mirror of upper)
  index -= n;

  // console.log(index); // Adjust index to print mirror image correctly
  for (let i = n - 1; i >= 1; i--) {
    let spaces = " ".repeat((n - i) * 2);
    let row = [];
    for (let j = 0; j < i; j++) {
      row.push(primes[index++]);

      // console.log(primes[10]);
    }
    console.log(spaces + row.join(" "));
    index -= 2 * i; // Adjust index for mirroring effect
  }
}

// Call the function with n = 4
primeDiamondPattern(7);
