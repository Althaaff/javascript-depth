function reverseVowels(s) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsArr = [];
  let positions = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      vowelsArr.push(s[i]);
      positions.push(i);
    }
  }
  vowelsArr = vowelsArr.reverse();
  s = s.split("");
  let i = 0;

  for (let position of positions) {
    s[position] = vowelsArr[i++];
  }

  return s.join("");
}

console.log(reverseVowels("IceCreAm"));
