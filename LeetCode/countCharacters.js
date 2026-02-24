function countCharacters(words, chars) {
  let freqMap = {};
  let totalCount = 0;

  for (let char of chars) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  for (let word of words) {
    let tempFreqMap = { ...freqMap };
    let canForward = true;

    for (let char of word) {
      if (tempFreqMap[char] > 0) {
        tempFreqMap[char]--;
      } else {
        canForward = false;
        break;
      }
    }

    if (canForward) {
      totalCount += word.length;
    }
  }

  return totalCount;
}

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));
