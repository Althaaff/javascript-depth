// double each elements using map method:
// problem: Write a function to double each element in an array using map.
function doubleElements(arr) {
  return arr.map((element) => {
    return element * 2;
  });
}

const arr = [1, 2, 3, 4, 5];

console.log(doubleElements(arr));
