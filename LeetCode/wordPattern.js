function wordPattern(pattern, s) {
  const words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  const patternToWord = new Map();
  const wordToPattern = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const currentPatternChar = pattern[i];
    const currentWord = words[i];

    if (patternToWord.has(currentPatternChar)) {
      if (patternToWord.get(currentPatternChar) !== currentWord) {
        return false;
      }
    } else if (wordToPattern.has(currentWord)) {
      return false;
    } else {
      patternToWord.set(currentPatternChar, currentWord);
      wordToPattern.set(currentWord, currentPatternChar);
    }
  }

  return true;
}

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("aaaa", "dog cat cat dog")); // pattern does'nt match so // false
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("abba", "dog constructor constructor dog"));
