function object(obj) {
  return (this.obj = obj);
}
console.log(object({ name: "muhammad Althaf", age: 21 }));

// debounce explaination in simple terms :

// Create a function debounce(fn, delay) that:

// Waits for delay milliseconds after the last call.

// If the function is called again before the delay ends, reset the timer.

// Use setTimeout to create the delay.

// Use clearTimeout to cancel the previous timer if a new action happens before the timeout finishes.

// Inside the delayed function, call your actual API.

function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// example simulate Api Call :
function apiCall(query) {
  console.log("API called with query :", query);
}

const debouncedApi = debounce(apiCall, 500);

debouncedApi("H");
debouncedApi("He");
debouncedApi("Hell");
debouncedApi("Hello!");
debouncedApi("Hello Althaf!");
