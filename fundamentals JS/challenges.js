// // CHALLENGES FOR YOU TO SOLVE
// // Challenge 1: Basic Pattern (Easy)

// // Create a function that prints this pattern using for loops:
// // *
// // **
// // ***
// // ****
// // *****

// function printStar(n) {
//   for (let i = 0; i < n; i++) {
//     let line = "";

//     for (let j = 0; j <= i; j++) {
//       line += "*";
//     }
//     console.log(line);
//   }
// }
// printStar(5);

// // Challenge 2: The Closure Trap (Medium)
// // Fix this code so it prints 0, 1, 2 instead of 3, 3, 3
// // test :
// // for (var i = 0; i < 3; i++) {
// //   function test() {
// //     console.log(i);
// //   }
// //   test();
// // }

// // Challenge 2: The Closure Trap (Medium)
// // If you use let instead of var, a new variable is created for each loop iteration:
// let func = [];

// for (let i = 0; i < 3; i++) {
//   func[i] = function () {
//     console.log(i);
//   };
// }
// func[0]();
// func[1]();
// func[2]();

// // Create a multiplication table using nested loops
// // Output should look like:
// // 1 x 1 = 1    1 x 2 = 2    1 x 3 = 3
// // 2 x 1 = 2    2 x 2 = 4    2 x 3 = 6
// // 3 x 1 = 3    3 x 2 = 6    3 x 3 = 9

// function multiplicationTable(size) {
//   // Your code here

//   for (let i = 1; i <= size; i++) {
//     for (let j = 1; j <= size; j++) {
//       console.log(`${i} x ${j} = ${i * j}`);
//     }
//   }
// }
// multiplicationTable(10);

// // Challenge 4: Algorithm Thinking (Hard)
// // Find all pairs in an array that sum to a target value
// // Example: [1, 2, 3, 4, 5], target = 5
// // Output: [[1,4], [2,3]]

// function findPairs(arr, target) {
//   // Your code here - use nested loops
//   // Bonus: Can you do it in O(n) time instead of O(n²)?
//   let res = [];

//   for (let i = 0, len = arr.length; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[i] + arr[j] === target) {
//         res.push([arr[i], arr[j]]);
//       }
//     }
//   }

//   return res;
// }

// console.log(findPairs([1, 2, 3, 4, 5], 5));

// // Bonus: Can you do it in O(n) time instead of O(n²)?
// function findPairs2(arr, target) {
//   let seen = new Set();
//   let res = [];

//   for (let num of arr) {
//     let complement = target - num;
//     console.log(complement);

//     if (seen.has(complement)) {
//       res.push([complement, num]);
//     }

//     // Add current number to seen set
//     seen.add(num);
//   }

//   return res;
// }

// console.log(findPairs2([1, 2, 3, 4, 5], 5));

// // While Loop Challenge :
// // CHALLENGES FOR YOU TO SOLVE
// // Challenge 1: Number Guessing Game (Easy)
// // Create a number guessing game using while loop
// // The computer picks a random number 1-100
// // User keeps guessing until they get it right
// // Give "higher" or "lower" hints

// function numberGuessingGame(simulatedGuess) {
//   let targetNumber = Math.floor(Math.random() * 100) + 1;
//   let attempts = 0;
//   let guessIndex = 0;

//   console.log("Simulated game - Target is", targetNumber);

//   while (guessIndex < simulatedGuess.length) {
//     const userGuess = simulatedGuess[guessIndex];
//     attempts++;

//     if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
//       console.log(`Invalid Guess: ${userGuess}. Skipping..`);
//       guessIndex++;
//       continue;
//     }

//     console.log(`Guess: ${attempts} - ${userGuess}`);

//     if (userGuess === targetNumber) {
//       return `Correct! You guessed ${targetNumber} in ${attempts} attempts.`;
//     } else if (userGuess < targetNumber) {
//       console.log("Too Low! Hint (try higher)");
//     } else {
//       console.log("Too High! Hint (try lower)");
//     }

//     guessIndex++;
//   }

//   return `Game over. Didn't guess ${targetNumber} in ${attempts} attempts.`;
// }

// // Test with simulated inputs:
// console.log(numberGuessingGame([76, 43, 40]));

// // Generate Fibonacci sequence using while loop
// // Stop when the next number would exceed a given limit
// // Example: limit = 50, output: [1, 1, 2, 3, 5, 8, 13, 21, 34]

// function fibonacciWhile(limit) {
//   // your code here :
//   let output = [0, 1];

//   let num = 1;

//   while (num <= limit) {
//     const next = output[output.length - 1] + output[output.length - 2];
//     console.log("next", next);

//     if (next > limit) break;

//     output.push(next);
//     num = next;
//   }
//   return output;
// }

// console.log(fibonacciWhile(56));

// // Challenge 3: Digital Root Calculator (Medium)
// // Calculate the digital root of a number
// // Keep summing digits until you get a single digit
// // Example: 9875 → 9+8+7+5 = 29 → 2+9 = 11 → 1+1 = 2

// function digitalRoot(num) {
//   let sum = 0;
//   let tempNum = Math.abs(num);
//   sum = tempNum;

//   while (sum >= 10) {
//     tempNum = sum;
//     sum = 0;
//     while (tempNum > 0) {
//       sum += tempNum % 10;
//       tempNum = Math.floor(tempNum / 10);
//     }
//   }

//   return sum;
// }

// console.log(digitalRoot(-9875)); // Should output: 2
// console.log(digitalRoot(123)); // Should output: 6
// console.log(digitalRoot(0)); // Should output: 6
// console.log(digitalRoot(9)); // Should output: 6

// // Challenge 4: Palindrome Checker with Processing (Medium)
// // Check if a string is a palindrome
// // But first, clean it: remove spaces, punctuation, make lowercase
// // Use while loop for the cleaning process
// // Example: "A man, a plan, a canal: Panama" → true

// function isPalindromeWhile(str) {
//   const convertedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   console.log(convertedStr.length);
//   let str1 = "";
//   let str2 = "";
//   let i = 0;
//   let j = convertedStr.length - 1;

//   while (i <= convertedStr.length && j >= 0) {
//     if (convertedStr[i] === convertedStr[j]) {
//       str1 += convertedStr[i];
//       i++;
//       str2 += convertedStr[j];
//       j--;
//     } else {
//       return false;
//     }
//   }

//   return str1 === str2;
// }

// console.log(isPalindromeWhile("A man, a plan, a canal: Panama"));
// console.log(isPalindromeWhile("MalaY!a:lam*"));

// console.log(isPalindromeWhile("race a car"));

// // Challenge 5: Prime Number Generator (Hard)
// // Generate the first N prime numbers using while loops
// // Use nested while loops for primality testing

// function generatePrimes(count) {
//   // your code here
//   // outer while: until you have 'count' primes
//   let primes = [];
//   let num = 2;
//   while (primes.length < count) {
//     let i = 2;
//     let isPrime = true;
//     // inner while: to check if a number is prime
//     while (i <= Math.sqrt(num)) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//       i++;
//     }

//     if (isPrime) {
//       primes.push(num);
//     }
//     num++;
//   }

//   return primes;
// }

// console.log(generatePrimes(10)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

// // For..Of Loop challenges
// // Challenge 1: Multi-Type Iterator (Medium)
// // Create a data structure that can iterate over different types of collections uniform
// class MultiCollection {
//   constructor() {
//     this.data = [];
//   }

//   add(collection) {
//     this.data.push(collection);
//   }

//   [Symbol.iterator]() {
//     let collectionIndex = 0;
//     let elementIterator = null;

//     return {
//       next: () => {
//         // If we don't have a current iterator or it's exhausted, get the next collection
//         while (collectionIndex < this.data.length) {
//           if (!elementIterator) {
//             const currentCollection = this.data[collectionIndex];

//             // Get the iterator for the current collection
//             elementIterator = currentCollection[Symbol.iterator]();
//           }

//           const elementResult = elementIterator.next();

//           if (!elementResult.done) {
//             return { value: elementResult.value, done: false };
//           } else {
//             collectionIndex++;
//             elementIterator = null;
//           }
//         }
//         // All collections exhausted
//         return { done: true };
//       },
//     };
//   }
// }

// const mc = new MultiCollection();
// mc.add([1, 2, 3]);
// mc.add("abc");
// mc.add(new Set([1, 2, 3, 4]));
// mc.add(
//   new Map([
//     [1, 2],
//     [3, 4],
//   ])
// );

// // iterating over multi colllection :
// for (let value of mc) {
//   console.log("value :", value);
// }

// Challenge 2: Smart Batch Processor

async function processBatches(dataSource, options = {}) {
  /*
    Challenge: Process iterable data in batches with smart error handling
    
    Parameters:
    - dataSource: Any iterable (array, generator, custom iterator)
    - options: {
        batchSize: 3,
        maxRetries: 2,
        onBatchComplete: (batch, results) => console.log('Batch done'),
        onError: (batch, error) => console.log('Batch failed'),
        processFunction: async (item) => item * 2
      }
    
    Requirements:
    1. Use for...of to iterate over dataSource
    2. Process items in batches of specified size
    3. If a batch fails, retry up to maxRetries times
    4. Continue with next batch even if previous batch fails completely
    5. Return summary: {total, processed, failed, batches}
    6. Handle any iterable input (arrays, generators, strings, etc.)
    
    Advanced: Make it work with infinite generators by using for...of properly
    */

  const {
    batchSize = 5,
    maxTries = 2,
    onBatchComplete = () => {},
    onError = () => {},
    processFunction = async () => {},
  } = options;

  // tracking variables :
  let total = 0;
  let processed = 0;
  let failed = 0;
  let batches = 0;
  let currentBatch = [];

  // Process each item from the data source

  for (let item of dataSource) {
    currentBatch.push(item);

    total++;

    // Process when batch is full or we've collected enough items
    if (currentBatch.length === batchSize) {
      await processBatchWithRetry(currentBatch);
      currentBatch = [];
    }
  }

  // Process any remaining items in the final partial batch
  if (currentBatch.length > 0) {
    await processBatchWithRetry(currentBatch);
  }

  // Helper function to process a single batch with retry logic :
  async function processBatchWithRetry(batch) {
    let lastError;
    let attempt = 0;

    // Retry loop :

    while (attempt <= maxTries) {
      try {
        // Process all items in the batch concurrently
        const results = await Promise.all(
          batch.map((item) => processFunction(item))
        );

        // Success - update counters and call callback
        processed += batch.length;
        batches++;
        onBatchComplete(batch, results);
        return;
      } catch (error) {
        lastError = error;
        attempt++;

        // If we've exhausted all retries, handle the failure
        if (attempt > maxRetries) {
          failed += batch.length;
          batches++;
          onError(batch, lastError);
          return;
        }
      }
    }
  }

  return {
    total,
    processed,
    failed,
    batches,
  };
}
// test with defferent iterables :
async function testBatchProcessor() {
  // test with array :
  const array = [1, 2, 3, 4, 5];

  // test with generators :
  function* numberGenerator(max) {
    for (let i = 1; i <= max; i++) {
      yield i;
    }
  }

  // test with string :
  const string = "abcdefghi";

  // Simulate processing function that occasionally fails :
  async function flakyProcessor(item) {
    if (Math.random() < 0.3) {
      throw new Error(`Failed to process ${item}!`);
    }

    return item.toString().toUpperCase();
  }

  const results = await processBatches(array, {
    batchSize: 3,
    maxTries: 2,
    processFunction: flakyProcessor,
    onBatchComplete: (batch, results) =>
      console.log(`Batch Processed: ${batch} --> ${results}`),
    onError: (batch, error) => console.log(`Batch Failed! ${batch}`),
  });

  console.log("Final results:", results);
}
