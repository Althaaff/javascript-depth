function isAnagram(s, t) {
  const arrS = s.split("");
  const arrT = t.split("");

  const sortedStr = arrS.sort().join("");

  return arrT.sort().join("") === sortedStr;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
