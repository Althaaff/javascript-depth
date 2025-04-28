// Write a function to filter out all even numbers from an array using filter.
function filterEvenNumbers(arr) {
  return arr.filter((num) => {
    return num % 2 !== 0;
  });
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(filterEvenNumbers(arr));
