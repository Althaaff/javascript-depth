function longestCommonPrefix(arr) {
  if (arr.length === 0) return "";

  let prefix = "";
  for (let i = 0; i < arr[0].length; i++) {
    const char = arr[0][i];
    for (const str of arr) {
      if (i >= str.length || str[i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
