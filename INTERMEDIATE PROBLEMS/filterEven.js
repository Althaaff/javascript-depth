// using filter method :
function filterEvenNumber(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const arr = [2, 1, 4, 2, 11, 14];

const filterEven = filterEvenNumber(arr);
console.log(filterEven);

// using map method :
function filterEvenNumUsingMap(arr) {
  return arr.map((num) => {
    if (num % 2 === 0) {
      return num;
    } else {
      return null;
    }
  });
}

const array = [12, 3, 4, 6, 5, 1];

const filtered = filterEvenNumUsingMap(array);
console.log(filtered);

// without using any builtin method :
function findEvenNum(arr) {
  let evenNums = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num % 2 === 0) {
      evenNums.push(num);
    }
  }

  return evenNums;
}

const arrs = [23, 4, 5, 12, 1];

const evenNums = findEvenNum(arrs);

console.log(evenNums);
