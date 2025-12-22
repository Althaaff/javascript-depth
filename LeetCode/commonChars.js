function commonChars(words) {
  function countChars(firstWord) {
    // console.log(firstWord);
    let freqObj = {};

    for (let char of firstWord) {
      freqObj[char] = (freqObj[char] || 0) + 1;
    }

    return freqObj;
  }

  const firstWordCounts = countChars(words[0]);

  let minFreq = {};
  for (let char in firstWordCounts) {
    minFreq[char] = firstWordCounts[char];
  }

  for (let i = 1; i < words.length; i++) {
    const currentCounts = countChars(words[i]);
    let temp = {};

    for (let char in currentCounts) {
      if (char in minFreq) {
        temp[char] = Math.min(minFreq[char], currentCounts[char]);
      }
    }
    minFreq = temp;
  }

  let result = [];
  for (let char in minFreq) {
    for (let j = 0; j < minFreq[char]; j++) {
      result.push(char);
    }
  }
  return result;
}

console.log(commonChars(["bella", "label", "roller"]));
console.log(commonChars(["cool", "lock", "cook"]));
