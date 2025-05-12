/* 
 In simple terms, closure is a bundling of two or more functions where inner functions have access to the 
 properties and methods of the outer functions even after the execution of the external function is done.
*/

function example1() {
  let blog = "learn coding!";

  function displayBlog() {
    console.log(blog);
  }

  return displayBlog;
}

const excuteBlogFunc = example1();

excuteBlogFunc();

// example 2 :
function example2() {
  // outer scoped variable :
  let blog = "learn python!";

  // inner function :
  function displayBlog() {
    // new variable with the same name
    // declared in a new scope
    // this will be printed
    // Note: Preference is always given to the nearest declared one.

    let blog = "learn javascript!";
    console.log(blog);
  }

  displayBlog();
}

example2();

// example 3 :
/*
  This feature makes the closures extremely powerful as even if we return the inner function, 
  it will have access to the variables (it will be alive) in the outer scope and perform all sorts of operations.
*/

function sum() {
  let a = 10;

  function add(b) {
    return a + b;
  }

  return add;
}

let fn = sum(); // returns add function //

let total = fn(90); // excutes tasks and returns total //

console.log(total);

// example 4 :
function x(a) {
  function y(b) {
    function z(c) {
      return a + b + c;
    }

    return z;
  }

  return y;
}

const a = x(10); // returns `y`

const b = a(20); // returns `z`

const c = b(30); // returns result

console.log(c);
