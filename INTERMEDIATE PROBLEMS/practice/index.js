function areAnagrams(str1, str2, str3) {
  // Step 1: Check if all lengths are equal
  if (str1.length !== str2.length || str2.length !== str3.length) return false;

  // Step 2: Create frequency map for str1
  let freqMap = {};

  // Count characters in str1
  for (let char of str1) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  // Step 3: Create frequency maps for str2 and str3
  let freqMap2 = {};
  let freqMap3 = {};

  for (let char of str2) {
    freqMap2[char] = (freqMap2[char] || 0) + 1;
  }

  for (let char of str3) {
    freqMap3[char] = (freqMap3[char] || 0) + 1;
  }

  // Step 4: Compare all frequency maps
  for (let char in freqMap) {
    if (freqMap[char] !== freqMap2[char] || freqMap[char] !== freqMap3[char]) {
      return false;
    }
  }

  // Step 5: Ensure no extra characters in str2 or str3
  for (let char in freqMap2) {
    console.log("char:", char);
    if (!(char in freqMap)) return false;
  }
  for (let char in freqMap3) {
    if (!(char in freqMap)) return false;
  }

  return true; // All frequencies match, so they are anagrams
}

// Example Usage:
console.log(areAnagrams("listen", "silent", "tnelis")); // Output: true
console.log(areAnagrams("rat", "tar", "car")); // Output: false
console.log(areAnagrams("", "", "")); // Output: true
