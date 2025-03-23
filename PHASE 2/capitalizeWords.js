// Approach 1 : for better understanding :
function capitalizeWords(sentences) {
  let result = "";

  for (let i = 0; i < sentences.length; i++) {
    if (i === 0 || sentences[i - 1] === " ") {
      result += sentences[i].toUpperCase();
    } else {
      result += sentences[i];
    }
  }

  return result;
}

console.log(capitalizeWords("hello javascript"));

// Approach 2 :  Uses built-in methods for cleaner, more readable code.
function capitalizeWordss(sentences) {
  return sentences
    .split(" ") //  splits the string at each space, creating an array of words.
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWordss("hello javascript Language!"));

// Approach 3 : using reduce method .
function capitalizeWord(sentences) {
  return sentences.split(" ").reduce((acc, word) => {
    // console.log("acc", acc);
    // console.log("word", word);

    // Add space if acc is not empty otherwise no space :
    return (
      acc + (acc ? " " : "") + word.charAt(0).toUpperCase() + word.slice(1)
    );
  }, "");
}

console.log(capitalizeWord("hello world from javascript!"));
