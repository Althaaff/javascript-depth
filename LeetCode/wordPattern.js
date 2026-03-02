function wordPattern(pattern, s) {
  const words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  const patternToWord = {};
  const wordToPattern = {};

  for (let i = 0; i < pattern.length; i++) {
    const currentPatternChar = pattern[i];
    const currentWord = words[i];

    if (patternToWord[currentPatternChar]) {
      if (patternToWord[currentPatternChar] !== currentWord) {
        return false;
      }
    } else {
      if (wordToPattern[currentWord]) {
        return false;
      }

      patternToWord[currentPatternChar] = currentWord;
      wordToPattern[currentWord] = currentPatternChar;
    }
  }

  return true;
}

console.log(wordPattern("abba", "dog cat cat dog"));
