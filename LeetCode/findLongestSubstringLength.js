// Longest Substring Without Repeating Characters :

let lengthOfLongestSubstring = function (s) {
  let seen = new Map();

  let start = 0,
    maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (seen.has(char) && seen.get(char) >= start) {
      start = seen.get(char) + 1;
    }

    seen.set(char, i);
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("fghjkllkjhgf"));
