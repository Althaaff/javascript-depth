function firstUniqChar(s) {
  let arr = s.split("");

  let firstUniqueChar = arr.findIndex((char, index) => {
    return arr.indexOf(char) === index && arr.lastIndexOf(char) === index;
  });

  return firstUniqueChar;
}

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
