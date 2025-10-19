function uniqueMorseCodeRepresentation(words) {
  const code = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  let seen = new Set();

  for (let word of words) {
    let morse = "";

    for (let char of word) {
      morse += code[char.charCodeAt(0) - 97];
    }

    seen.add(morse);
  }

  return seen.size;
}

console.log(uniqueMorseCodeRepresentation(["gin", "zen", "gig", "msg"]));
