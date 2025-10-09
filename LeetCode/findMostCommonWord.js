function findMostCommonWord(paragraph, banned) {
  const cleanedPara = paragraph.replace(/[^a-zA-Z0-9]/g, " ").toLowerCase();
  // console.log("cleanedPara", cleanedPara);
  const paraArr = cleanedPara.split(/\s+/).filter((word) => word.length > 0);
  let mostCommonWord = "";
  let maxFrequency = 0;
  const freqMap = new Map();

  for (let word of paraArr) {
    // console.log("word", word);
    freqMap.set(word, (freqMap.get(word) || 0) + 1);
  }

  for (let bannedWord of banned) {
    freqMap.delete(bannedWord.toLowerCase());
  }

  for (let [word, frequency] of freqMap) {
    if (maxFrequency < frequency) {
      maxFrequency = frequency;
      mostCommonWord = word;
    }
  }

  return mostCommonWord;
}

console.log(
  findMostCommonWord(
    "Bob hit a ball, the hit BALL flew far after it was hit.",
    ["hit"]
  )
);
console.log(findMostCommonWord("a.", []));
console.log(findMostCommonWord("Bob. hIt, baLl", ["bob", "hit"]));
console.log(findMostCommonWord("a b.b", []));

// Alternative Approach :
function findMostCommonWord2(paragraph, banned) {
  // regex does: removes all punctuation, symbols, and spaces, keeping only words and numbers
  const words = paragraph
    .toLowerCase()
    .split(/\W+/)
    .filter((word) => word.length > 0);

  const freqMap = new Map();
  const bannedSet = new Set(
    banned.map((bannedWord) => bannedWord.toLowerCase())
  );

  for (let word of words) {
    if (!bannedSet.has(word)) {
      freqMap.set(word, (freqMap.get(word) || 0) + 1);
    }
  }
  // .entries method returns an iterable of key, value pairs for every entry in the map.
  return [...freqMap.entries()].reduce((arr1, arr2) =>
    arr1[1] < arr2[1] ? arr2 : arr1
  )[0];
}

console.log(
  findMostCommonWord2(
    "Bob hit a ball, the hit BALL flew far after it was hit.",
    ["hit"]
  )
);
// console.log(findMostCommonWord2("a.", []));
// console.log(findMostCommonWord2("Bob. hIt, baLl", ["bob", "hit"]));
// console.log(findMostCommonWord2("a b.b", []));
