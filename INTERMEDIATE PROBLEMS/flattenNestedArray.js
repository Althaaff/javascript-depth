function flatten(arr) {
  return arr.reduce((acc, val) => {
    console.log("acc", acc, "val", val);
    return Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val);
  }, []);
}

console.log(flatten([1, [2, [3, [4]], 5]]));
