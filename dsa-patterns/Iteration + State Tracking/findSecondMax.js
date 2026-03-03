function findSecondMax(arr) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > firstMax) {
      secondMax = firstMax; // -infi 12
      firstMax = num; // 12 18

      console.log("secondMax", secondMax);
    } else if (num > secondMax && secondMax !== firstMax) {
      secondMax = num;
    }
  }

  return secondMax;
}

console.log(findSecondMax([10, 8, -19, 3, 4, 5, 6, 18, 11]));
