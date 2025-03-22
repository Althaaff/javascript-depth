// Approach 1 :
// function mergeSortedArray(arr1, arr2) {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 4, 5, 6];

// console.log(mergeSortedArray(arr1, arr2));

// Approach 2 :
// function mergeSortedArrays(arr1, ar2) {
//   let i = 0,
//     j = 0;
//   let mergedArray = [];

//   // compare both array (arr1, arr2) and insert the smallest elements first to mergedArray :
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       mergedArray.push(arr1[i]);
//       i++;
//     } else {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
//   }

//   // add remaining elements to merged Array :
//   while (i < arr1.length) {
//     mergedArray.push(arr1[i]);
//     i++;
//   }

//   // add remaining elements to merged Array :
//   while (j < arr2.length) {
//     mergedArray.push(arr2[j]);
//     j++;
//   }

//   return mergedArray;
// }

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 4, 5, 6];

// console.log(mergeSortedArrays(arr1, arr2));

function mergeSortedArrays(arr1, arr2) {
  function customSort(arr) {
    return arr.reduce((sortedArr, num) => {
      // console.log(sortedArr);
      let i = 0;
      while (i < sortedArr.length && sortedArr[i] < num) {
        i++;
      }
      sortedArr.splice(i, 0, num); // Insert num at the correct position
      return sortedArr;
    }, []);
  }

  let sortedArr1 = customSort(arr1); // Here i will get this function --> customSort() returned value
  // console.log("sorted ?", sortedArr1);
  let sortedArr2 = customSort(arr2); // Here i will get this function --> customSort() returned value

  // console.log("sorted ?", sortedArr2);

  let i = 0,
    j = 0;
  let mergedArray = [];

  while (i < sortedArr1.length && j < sortedArr2.length) {
    if (sortedArr1[i] < sortedArr2[j]) {
      mergedArray.push(sortedArr1[i++]);
    } else {
      mergedArray.push(sortedArr2[j++]);
    }
  }

  while (i < sortedArr1.length) mergedArray.push(sortedArr1[i++]);
  while (j < sortedArr2.length) mergedArray.push(sortedArr2[j++]);

  return mergedArray;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 4, 5, 6];

console.log(mergeSortedArrays(arr1, arr2));
