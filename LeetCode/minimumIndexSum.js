function minimumIndexSum(list1, list2) {
  if (!list1.some((str) => list2.includes(str))) return "not found!";

  const foundString = [];
  let minSum = Infinity;

  const hashmap = new Map();
  for (let i = 0; i < list1.length; i++) {
    hashmap.set(list1[i], i);
  }

  let tempSum = 0;
  for (let i = 0; i < list2.length; i++) {
    if (hashmap.has(list2[i])) {
      tempSum = i + hashmap.get(list2[i]);

      if (tempSum < minSum) {
        minSum = tempSum;
        foundString.length = 0;
        foundString.push(list2[i]);
      } else if (tempSum === minSum) {
        foundString.push(list2[i]);
      }
    }
  }

  return foundString;
}

console.log(
  minimumIndexSum(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  )
);

console.log(
  minimumIndexSum(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]
  )
);

console.log(
  minimumIndexSum(["happy", "sad", "good"], ["sad", "happy", "good"])
);

console.log(minimumIndexSum(["happy", "sad", "good"], ["mood", "not", "set"]));
console.log(minimumIndexSum(["S", "TEXP", "BK", "KFC"], ["KFC", "BK", "S"]));
