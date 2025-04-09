// sieveOfEratosthenes Algorithm :

function sieveOfEratosthenes(n) {
  const isPrime = new Array(n + 1).fill(true);

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      // Mark all multiples of i as false :
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
        console.log("not a prime", j);
      }
    }
  }

  // extract all prime numbers :
  let primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      console.log("prime", i);
      primes.push(i);
    }
  }

  return primes;
}

console.log(sieveOfEratosthenes(10));
