function isAlienSorted(words, order) {
  let alienOrder = new Map();

  for (let i = 0; i < order.length; i++) {
    alienOrder.set(order[i], i);
  }

  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];

    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      if (word1[j] !== word2[j]) {
        if (alienOrder.get(word1[j]) > alienOrder.get(word2[j])) {
          return false;
        }

        break;
      }
    }

    if (word1.length > word2.length && word1.startsWith(word2)) {
      // console.log("excuted");
      return false;
    }
  }

  return true;
}

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
console.log(
  isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
);
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));
console.log(isAlienSorted(["ubg", "kwh"], "qcipyamwvdjtesbghlorufnkzx"));
