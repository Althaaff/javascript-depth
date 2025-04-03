function areAnagrams(str1, str2) {
  let freqMap = {};
  let store = [];
  for (let char of str1) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  console.log(freqMap);

  // if str2 characters not in the freqMap Object then return false otherwise make key's value 0 and return true
  for (let char of str2) {
    if (!freqMap[char]) {
      return false;
    } else {
      if (freqMap[char]) {
        store.push(char);
        freqMap[char]--;
      }
    }
  }
  console.log(store); // if characters are there characters stores here
  return true;
}

console.log(areAnagrams("racecar", "care"));

// test :
// let freqMaps = { l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 };

// let char = "M";

// freqMaps[char] = freqMaps[char] || 0 + 1; // setting value to object key
// console.log(freqMaps);

function checkAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  let freqMap = {};

  for (let char of str1) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!freqMap[char]) {
      return false;
    } else freqMap[char]--;
  }

  return true;
}

console.log(checkAnagrams("malayalam", "lamayalam"));
