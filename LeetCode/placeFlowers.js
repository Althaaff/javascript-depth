// using recusrion :
function canPlaceFlowers(flowerbed, n) {
  function canPlant(index, n) {
    if (n === 0) {
      return true;
    }
    if (index >= flowerbed.length) {
      return false;
    }
    if (flowerbed[index] === 0) {
      const leftEmpty = index === 0 || flowerbed[index - 1] === 0;
      const rightEmpty =
        index === flowerbed.length - 1 || flowerbed[index + 1] === 0;

      if (leftEmpty && rightEmpty) {
        flowerbed[index] = 1;
        if (canPlant(index + 1, n - 1)) {
          return true;
        }
        flowerbed[index] = 0;
      }
    }

    return canPlant(index + 1, n);
  }

  return canPlant(0, n);
}

const flowerbed1 = [1, 0, 0, 0, 1];
const n1 = 1;
console.log(canPlaceFlowers(flowerbed1, n1));

const flowerbed2 = [1, 0, 0, 0, 1];
const n2 = 2;
console.log(canPlaceFlowers(flowerbed2, n2));

// Approach 2 ( using while loop ) :
function canPlaceFlowers(flowerbed, n) {
  let count = 0;
  let i = 0;
  while (i < flowerbed.length) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
      i += 2;
    } else {
      i++;
    }
  }

  // console.log("count", count);
  return count >= n;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
