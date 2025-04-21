// using builtin method called map() :-

function doubleElements(arr) {
  return arr.map((num) => num * 2);
}

const originalArray = [2, 3, 0, 5, 1];
const doubledElements = doubleElements(originalArray);

console.log(doubledElements);

// // No builtin Method :
function doubleElements(arr) {
  let result = [];
  let doubled;
  arr.forEach((num) => {
    doubled = num * 2;

    result.push(doubled);
  });

  return result;
}

const arrays = [3, 2, 1, 4, 5, 3];

const doubledArrayElements = doubleElements(arrays);
console.log(doubledArrayElements);

function doubleEle(arr) {
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    const doubled = arr[i] * 2;

    results.push(doubled);
  }

  return results;
}

const arr = [2, 3, 4, 0, 5, 6];

const doubled = doubleEle(arr);

console.log(doubled);
