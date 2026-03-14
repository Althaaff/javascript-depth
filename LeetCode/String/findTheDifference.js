function findTheDifference(s, t) {
  let freqMap = new Map();
  for (let c of s) {
    freqMap.set(c, (freqMap.get(c) || 0) + 1);
  }

  for (let c of t) {
    if (freqMap.has(c) && freqMap.get(c) > 0) {
      freqMap.set(c, freqMap.get(c) - 1);
    } else if (!freqMap.has(c) || freqMap.get(c) === 0) {
      return c;
    }
  }
}

console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("", "y"));
