function recLen(str) {
  // Base case: If the string is empty
  if (str === "") return 0;
  return 1 + recLen(str.substring(1));
}

let str = "Muhammad";
console.log(recLen(str));
