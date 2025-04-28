// It immediately checks once,

// If the check fails, it waits 1 second and checks again,

// It repeats this until:

// The condition succeeds .. (then resolves),

// Or timeout happens .. (then rejects).

function pollingFunction(checkFunction, interval, timeout) {
  const startTime = Date.now();

  return new Promise((resolve, reject) => {
    function checkCondition() {
      const result = checkFunction();

      if (result) {
        resolve("Polling success!");
      } else if (Date.now() - startTime >= timeout) {
        reject("Polling timed out.");
      } else {
        setTimeout(checkCondition, interval);
      }
    }

    checkCondition();
  });
}

// usage of the polling function :
let count = 0;

function exampleCheck() {
  count++;

  console.log("counting...", count);

  return count > 5; // this function returns count if count is greater than 5 //
}

// here polling function checks each time . `exampleCheck` excutes if exampleCheck returned the value then log the resolve message .
// otherwise try again after 1 second delay.
pollingFunction(exampleCheck, 1000, 10000)
  .then((message) => console.log(message))
  .catch((error) => console.log(error.message));
