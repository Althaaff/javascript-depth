const debounce = (func, wait, immediate) => {
  let timeout;

  /* arguments = a basket that holds all the things you pass to a function.
     this (context) = tells who is calling the function. */

  return function () {
    let context = this,
      args = arguments;

    const callNow = immediate && !timeout; // call immediately
    clearTimeout(timeout); // clearing the older timer if exist

    // set a new timer
    timeout = setTimeout(function () {
      timeout = null;
      // console.log("call now working (immediate true)!");

      if (!immediate) {
        func.apply(context, args);
        console.log("call now not working (immediate false)!");
      }
    }, wait);

    if (callNow) func.apply(context, args);
  };
};

const debouncedSearch = debounce(
  () => console.log("Searching..."),
  1000,
  false
);

debouncedSearch();
debouncedSearch();
debouncedSearch();

// function onMouseMove(e) {
//   console.clear();
//   console.log(e.x, e.y);
// }

// const debouncedMouseMove = debounce(onMouseMove, 50, true);

// window.addEventListener("mousemove", debouncedMouseMove);

// arguments test
// arguments behaves like array but its object
// function arguments() {
//   console.log(arguments);
// }

// arguments("development", "dsa", "communication");

// function arguments() {
//   console.log(arguments);
// }

// // convert `arguments` to array :
// const convertToArray = Array.from(arguments);
// console.log(convertToArray.push("Hello"));
// console.log(convertToArray);
