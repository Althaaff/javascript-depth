function debounce(func, delay) {
  console.log(delay);
  let timer; // To store the timer reference

  return function (...args) {
    console.log(...args);
    clearTimeout(timer); // Clear the previous timer if it exists

    timer = setTimeout(() => {
      func.apply(this, args); // Execute the function after delay
    }, delay);
  };
}

// Example Usage:  debouce function hides the timer inside it :
const onSearch = debounce((query) => {
  console.log("Searching for:", query);
}, 500);

// Simulating fast typing:
onSearch("H");
onSearch("He");
onSearch("Hel");
onSearch("Hell");
onSearch("Hello"); // Only "Searching for: Hello" will be logged after 500ms
onSearch("Hello Althaf!");

// practice
function debounce2(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const onSearchh = debounce2((query) => {
  console.log("searching for :", query);
}, 500);

onSearch("M");
onSearch("Mu");
onSearch("Muh");
onSearch("Muha");
onSearch("Muham");
onSearch("Muhamm");
onSearch("Muhamma");
onSearch("Muhammad");

// rest paramater example :
function restParams(...restParams) {
  console.log(Array.isArray(restParams) ? true : false);

  return restParams;
}

console.log(restParams("Hello", "World"));

// test debounce
const debouce3 = (func, delay) => {
  let timer;

  return function (...args) {
    for (let char of args) {
      timer = setTimeout(() => {
        console.log(char);
      }, delay);
    }
  };
};

const excute = debouce3(2000);

excute(["heyy", "Hello"], 9);
