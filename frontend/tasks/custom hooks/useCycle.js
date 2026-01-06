// const { useState } = require("react");

// solutions :
// example 1:
function useCycle(...values) {
  let index = 0;

  function cycle() {
    index = (index + 1) % values.length;
    return values[index];
  }
  return [values[index], cycle];
}

let [mode1, cycle1] = useCycle("low", "medium", "high");
console.log(mode1);
mode1 = cycle1();
console.log(mode1);
mode1 = cycle1();
console.log(mode1);
mode1 = cycle1();
console.log(mode1);

// example 2:
function useCycle(...values) {
  let index = 0;

  const state = {
    get current() {
      return values[index];
    },
  };

  function cycle() {
    index = (index + 1) % values.length;
    return state.current;
  }

  return [state, cycle];
}

const [mode2, cycle2] = useCycle("low", "medium", "high");
console.log(mode2.current);
cycle2();
console.log(mode2.current);
cycle2();
console.log(mode2.current);

// // example 3 (using useState):
function useCycle(...values) {
  const [index, setIndex] = useState(0);

  function cycle() {
    setIndex((prevIndex) => (prevIndex + 1) % values.length);
  }

  return [values[index], cycle];
}

const [mode3, cycle3] = useCycle("low", "medium", "high");
