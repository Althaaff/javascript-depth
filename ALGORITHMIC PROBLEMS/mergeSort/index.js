// merge sort using javascript :

function mergeSort(arr) {
  // base case :
  if (arr.length <= 1) {
    return arr;
  }

  // divide :
  const mid = Math.floor(arr.length / 2);
  // console.log(mid);
  const left = arr.slice(0, mid);
  // console.log(left);
  const right = arr.slice(mid);
  console.log(right);

  // recursively sort both halves :
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // merge the sorted halves :
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  // console.log("left :", left, "right :", right);
  // Compare elements of both arrays and merge them in order
  let result = []; // final merged sorted array store here
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);

      i++;
    } else {
      result.push(right[j]);

      j++;
    }
  }

  // if there are remaining elements in either half then add them :
  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([4, 3, 2, 9, 8, 6, 1, -1, 0]));

// find numberOfInversions :
function numberOfInversions(a) {
  let cnt = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        console.log(a[i]);
        cnt++;
      }
    }
  }

  return cnt;
}

const a = [5, 4, 3, 2, 1, 2];

console.log(numberOfInversions(a));
