// Write a function to implement a partially applied function :
/*
  fn is like a callback function.

  It's a specific task or logic that you want to execute later, possibly with some preset arguments.

  You prepare it (partially apply arguments), and when you call it later, it completes the task.
*/

function partialFunc(fn, ...fixArgs) {
  return function (...remainArgs) {
    return fn(...fixArgs, ...remainArgs); // note: fn() callback function is like one task . that task should be excute //
  };
}

// fn() callback task :
function addition(a, b, c) {
  return a + b + c;
}

const partialAdd = partialFunc(addition, 2);

console.log(partialAdd(8, 1));
