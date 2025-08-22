function distributeCandies(candyType) {
  if (candyType.length === 0) {
    return;
  }

  const uniqueCandies = new Set(candyType);
  const candiesCanEat = candyType.length / 2;

  if (uniqueCandies.size > candiesCanEat) {
    return candiesCanEat;
  } else {
    return uniqueCandies.size;
  }
}

console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
console.log(distributeCandies([1, 1, 2, 3]));
console.log(distributeCandies([6, 6, 6, 6]));
