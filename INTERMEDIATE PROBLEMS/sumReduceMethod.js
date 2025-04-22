// using reduce method sum of array elements :

function sumOfArrayElements(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

const arr = [1, 2, 3, 4, 5, 8];

console.log(sumOfArrayElements(arr));

// using map method sum of array elements :
function sumOfArrayElementss(arr) {
  let sum = 0;

  arr.map((num) => {
    sum += num;
    return num;
  });

  return sum;
}

const array = [2, 3, 4, 5, 6];
console.log(sumOfArrayElementss(array));
