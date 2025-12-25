function canThreePartsEqualSum(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  console.log("log", sum % 3);

  if (sum % 3 !== 0) {
    console.log("logged");
    return false;
  }

  let target = sum / 3;
  let currentSum = 0;
  let partsFound = 0;

  for (let num of arr) {
    currentSum += num;
    // console.log(currentSum, "X", target);
    if (currentSum === target) {
      partsFound += 1; // 1 2 3
      currentSum = 0; // 0 // 0
    }
  }
  // console.log("currentSum", currentSum);
  // console.log("partsFound", partsFound);

  if (partsFound >= 3) {
    return true;
  } else {
    return false;
  }
}

console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]));
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]));
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]));
console.log(canThreePartsEqualSum([0, 0, 0, 0]));
