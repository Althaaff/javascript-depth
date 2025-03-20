// function findLargestNum(arr) {
//   let largest = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }

//   return largest;
// }

// console.log(findLargestNum([3, 2, 0, 4, 8]));

// using reduce method :
// function findLargestNum() {
//   let arr = [3, 4, 5, 6, 7, 11];

//   return arr.reduce((largest, current) =>
//     current > largest ? current : largest
//   );
// }

// console.log(findLargestNum());

// using forEach loop :
function findLargestNum(arr) {
  let largest = arr[0];
  arr.forEach((element) => {
    if (element > largest) {
      largest = element;
    }
  });

  return largest;
}

console.log(findLargestNum([3, 4, 5, 6, 3]));
