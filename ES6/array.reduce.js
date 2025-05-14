// reduce method in js:
/* 
  The function has 4 parameters, (previousValue, currentValue, currentIndex, array).

  previousValue – The value returned from the last call of the same function or the initial value at the beginning.
  currentValue – Current value of the array.
  currentIndex – Current index position of the iteration.
  array – The array itself
*/

// Aggregation logic using javascript (example 1):

const array = [1, 2, 3, 4, 5, 6];

const sum = array.reduce((previousValue, currentValue, currentIndex, array) => {
  const nextValue = previousValue + currentValue;

  return nextValue;
}, 4);

console.log(sum);

// example 2 :

const product = array.reduce(
  (previousValue, currentValue, currentIndex, array) => {
    const nextValue = previousValue * currentValue;

    return nextValue;
  },
  2
);

console.log(product);

// seggregation logic using javascript (reduce method) :

const arr = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4];

const segg = arr.reduce((previousValue, currentValue) => {
  const floored = Math.floor(currentValue);

  if (!previousValue[floored]) {
    previousValue[floored] = [];
  }

  previousValue[floored].push(currentValue);

  return previousValue; // finally return previous values object //
}, {});

const seggregatedObject = segg;

console.log(seggregatedObject);
// console.log(seggregatedObject["1"]);
// console.log(seggregatedObject["2"]);

// Problem :
// Let’s say we have an array of functions and a value, the value has to be passed through these functions in a pipe.
// Like the initial value has to be passed to the first
// function and then the returned value from the first function has to be passed to the next function and so on.

// uppercase function
// reverse function
// uppend function

// uppercase :
function uppercase(str) {
  return str.toUpperCase();
}

// reverse :
function reverse(str) {
  return str.split("").reverse().join("");
}

// uppend :
function uppend(str) {
  return `Hello ${str} !`;
}

const arrOfFunctions = [uppercase, reverse, uppend];
// use reduce method :
const initialValue = "javascript";

const finalResult = arrOfFunctions.reduce((previousValue, currentFunc) => {
  const nextValue = currentFunc(previousValue);

  return nextValue;
}, initialValue);

console.log(finalResult);

// Problem : Run a promise in a sequence :
const asyncTask = (i) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), i * 100);
  });
};

// promises :
const promises = [asyncTask(3), asyncTask(2), asyncTask(1), asyncTask(8)];

const asyncExcutor = function (promises) {
  promises.reduce((prevPromiseFunc, currPromiseFunc) => {
    // return when the previous promise resolved :
    return prevPromiseFunc.then(() => {
      return currPromiseFunc.then((value) => {
        console.log(value);
      });
    });
  }, Promise.resolve());
};

console.log(asyncExcutor(promises));
