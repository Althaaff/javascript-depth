function longestSubstringWithoutRepeating(str) {
  if (!str) {
    return 0;
  }

  if (str.length === 1) {
    return 1;
  }

  // Iterate through each character in the string
  // Check if current character exists in currentSubstring
  // If character not found, add it to currentSubstring
  // If character found, update maxLength if needed
  // Remove characters up to and including the repeated character
  // Final check for maxLength after loop ends

  let maxLength = 0;
  let currentSubString = "";

  for (let char of str) {
    const currentCharIndex = currentSubString.indexOf(char);

    if (currentCharIndex === -1) {
      currentSubString += char;
    } else {
      maxLength = Math.max(maxLength, currentSubString.length);

      currentSubString = currentSubString.slice(currentCharIndex + 1) + char;
    }
  }

  maxLength = Math.max(maxLength, currentSubString.length);

  return maxLength;
}

console.log(longestSubstringWithoutRepeating("abcabcbb"));
