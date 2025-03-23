function debounce(func, delay) {
  console.log(delay);
  let timer; // To store the timer reference

  return function (...args) {
    clearTimeout(timer); // Clear the previous timer if it exists

    timer = setTimeout(() => {
      func.apply(this, args); // Execute the function after delay
    }, delay);
  };
}

// Example Usage:
const onSearch = debounce((query) => {
  console.log("Searching for:", query);
}, 500);

// Simulating fast typing:
onSearch("H");
onSearch("He");
onSearch("Hel");
onSearch("Hell");
onSearch("Hello"); // Only "Searching for: Hello" will be logged after 500ms
