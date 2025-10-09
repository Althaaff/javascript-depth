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
    freqMap.delete(bannedWord);
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
