function makeCounter(initialValue = 0) {
  let count = initialValue;
  return function increaseCount() {
    return count++;
  };
}
const counter = makeCounter(5);
console.log(counter());
console.log(counter());
console.log(counter());
