// // without using recursion :

// function capitalizeFirstLetter(sentence, index, result = []) {
//   if (result.length === 0) {
//     sentence = sentence.split(" ");
//   }

//   sentence.forEach((s) => {
//     console.log(s.charAt(0).toUpperCase() + s.slice(1));
//   });
// }

// capitalizeFirstLetter("im react js lover");

// with using recursion :
function capitalizeFirstLetterRecursion(sentence, index = 0, result = []) {
  if (index >= sentence.length) {
    return result.join(" ");
  }

  if (result.length === 0) {
    sentence = sentence.split(" ");
    console.log(sentence);
  }

  const word = sentence[index];
  console.log(word);
  let capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1);
  result.push(capitalizeWord);

  return capitalizeFirstLetterRecursion(sentence, index + 1, result);
}

let input = "im javascript lover";

let output = capitalizeFirstLetterRecursion(input);

console.log(output);
