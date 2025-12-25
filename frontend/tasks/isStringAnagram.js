function isStringAnagram1(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freqObj1 = {};
  let freqObj2 = {};

  for (let char of str1) {
    freqObj1[char] = (freqObj1[char] || 0) + 1;
  }

  for (let char of str2) {
    freqObj2[char] = (freqObj2[char] || 0) + 1;
  }

  for (let key in freqObj1) {
    if (freqObj1[key] !== freqObj2[key]) {
      return false;
    }
  }

  return true;
}

console.log(isStringAnagram1("abcd", "dcba"));
console.log(isStringAnagram1("hello", "bella"));
console.log(isStringAnagram1("listen", "silent"));

// solution 2:
function isStringAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freq = {};

  for (let i = 0; i < str1.length; i++) {
    freq[str1[i]] = (freq[str1[i]] || 0) + 1;
    freq[str2[i]] = (freq[str2[i]] || 0) - 1;
  }

  return Object.values(freq).every((val) => val === 0);
}

console.log(isStringAnagram2("abcd", "dcba"));
console.log(isStringAnagram2("hello", "bella"));
console.log(isStringAnagram2("listen", "silent"));
