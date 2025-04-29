// pipe function allows you to compose multiple functions and execute them left to right, like a clean pipeline :

function pipe(...functions) {
  return function (initialValue) {
    return functions.reduce((acc, currentFunction) => {
      // console.log(acc);
      return currentFunction(acc);
    }, initialValue);
  };
}

function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

function substract(x) {
  return x - 2;
}

const piped = pipe(double, square, substract);

console.log(piped(2));
