// curried function takes `a` as a paramater also curried function returns another paramater it taked `b` as a paramater
// second return function returns `a + b`

function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(1)(2));

// Infinite Currying functions:
function add(a) {
  return function next(b) {
    if (b === undefined) return a;

    a += b;

    return next;
  };
}

console.log(add(3)(4)()); // here empty paramater calls `next` function again

// Infinite Currying with ES6 Arrow Function :
const adds = (a) => (b) => b !== undefined ? add(a + b) : a;

console.log(adds(2)(3)());
