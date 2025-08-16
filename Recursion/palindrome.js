const test = (text) => {
  console.log("text", text);
  if (typeof text !== "string") {
    return "String should not be empty!";
  }

  if (text.length <= 1) {
    return true;
  }

  if (text[0] !== text[text.length - 1]) {
    return false;
  } else {
    return test(text.slice(1, text.length - 1));
  }
};

console.log(test("madam"));
console.log(test("abdb"));
console.log(test("bab"));
console.log(test("a"));
