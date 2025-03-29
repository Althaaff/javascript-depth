// currying :
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      console.log(args.length);
      return func(...args);
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const curryFunction = curry(sum);

// const curriedFunction = curryFunction(1)(3, 8);
// const curriedFunction = curryFunction(1)(3)(5);
const curriedFunction = curryFunction(1, 3)(3);

console.log(curriedFunction);
