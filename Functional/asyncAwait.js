/*
 In this example, fetchData is an async function. 
 The await keyword is used to pause the execution of fetchData until the fetch and response.json() Promises are resolved. 
 Meanwhile, the console.log("This will log...") statement can execute without waiting for fetchData to complete, 
 demonstrating the non-blocking nature of asynchronous operations.
*/

// In JavaScript, async is a keyword used to define an asynchronous function.
// This means the function will operate in a non-blocking manner, allowing other code to execute while the asynchronous operation is in progress.
// Key characteristics of async functions:
// Returns a Promise: An async function always implicitly returns a Promise.
// If the function's explicit return value is not a Promise, JavaScript automatically wraps it in a resolved Promise.
// Enables await: The async keyword is essential because it allows the use of the await keyword within the function's body.
// await can only be used inside async functions.
// Simplifies Asynchronous Code: async/await provides a more synchronous-looking syntax for working with Promises,
// making asynchronous code easier to read and manage compared to traditional callback-based or .then() chain approaches.

async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/test");

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// call the async function :
await fetchData(); // when await keyword used here it's just pauses the next consoles or some excution untill promise resolves
// if `await` not used there then while `fetchData` running console would happen before that

// it runs before fetch data completes excution:
console.log("This will log before the data from fetchData is available.");

/*
 In this example, fetchData is an async function. 
 The await keyword is used to pause the execution of fetchData until the fetch and response.json() Promises are resolved. 
 Meanwhile, the console.log("This will log...") statement can execute without waiting for fetchData to complete, 
 demonstrating the non-blocking nature of asynchronous operations.
*/

async function findName(name) {
  return name;
}

const res = await findName("muhammad althaf");
console.log(res);

const values1 = await Promise.all([fetchData(), findName("muhammad ansar")]);

// (promise.all()) returns fullfilled values in the array we can destructure those values :
const [res1, res2] = await Promise.all([
  fetchData(),
  findName("muhammad ansar"),
]);

// Both start immediately, total time ~2s (longest one), not 3s.

console.log(res1, res2);
console.log(values1);
console.log(Array.isArray(values1));

/*
 Yes, Promise.all() returns a Promise that, when fulfilled, 
 resolves with an array of the fulfillment values of the input promises, 
 in the same order as the input promises.
*/
const promise1 = Promise.resolve(3);
const promise2 = 42; // Not a promise, but treated as a resolved promise
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Expected output: [3, 42, "foo"]
});

/*
 If any of the input promises reject, 
 Promise.all() will immediately reject with the reason of the first promise that rejected. 
 In this case, it will not return an array of fulfillment values.
*/

/* 
 Yes, Promise.all() returns a single promise that, when resolved, yields an array. 
 This array contains the fulfillment values of all the promises in the input iterable, 
 in the same order as they were provided.
*/

const prom1 = Promise.resolve(1);
const prom2 = new Promise((resolve) => setTimeout(() => resolve(2), 100));
const prom3 = Promise.resolve(3);

Promise.all([prom1, prom2, prom3])
  .then(([val1, val2, val3]) => {
    console.log(val1, val2, val3); // Output: [1, 2, 3]
  })
  .catch((error) => {
    console.error(error);
  });
