function findLengthOfLastWord(words) {
  words = words.trim();
  words = words.split(" ");

  let str = "";

  for (let word of words) {
    str = word;
  }

  return str.length;
}

console.log(findLengthOfLastWord("Hello World"));
console.log(findLengthOfLastWord("  fly me   to   the moon  "));
console.log(findLengthOfLastWord("luffy is still joyboy"));
