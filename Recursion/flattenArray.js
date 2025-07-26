function flattenArray(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flattenArray(curr));
    } else {
      return acc.concat(curr);
    }
  }, []);
}

console.log(flattenArray([1, [2, [3, [4]]], 5]));
