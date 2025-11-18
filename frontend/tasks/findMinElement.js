function minBy(array, iteratee) {
  if (!array || array.length === 0) return undefined;

  let minElement = null;
  let minValue = null;

  for (let item of array) {
    const currentValue = iteratee(item);

    if (currentValue < minValue) {
      minValue = currentValue;
      minElement = item;
    }
  }

  return minElement === null ? undefined : minElement;
}

console.log(minBy([2, 3, 1, 4]), iteratee);
