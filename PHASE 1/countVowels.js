// Approach 1 :
// function countVowels(s) {
//   let vowels = "aeiouAEIOU";
//   let count = 0;

//   for (const char of s) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("Hello World U"));

// Approach 2 :
// function countVowels(s) {
//   let vowels = "aeiouAEIOU";

//   // intial reduce method count paramater is number 0 :
//   const count = [...s].reduce(
//     (count, char) => (vowels.indexOf(char) !== -1 ? count + 1 : count),
//     0
//   );

//   return count;
// }

// console.log(countVowels("Hello world"));

// Approach :
// function countVowels(s) {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

//   return s.split("").filter((char) => vowels.includes(char)).length;
// }

// console.log(countVowels("Hello world"));

//practice :
function countVowels(s) {
  const vowels = "aeiouAEIOU";

  const count = [...s].reduce(
    (count, char) => (vowels.indexOf(char) !== -1 ? count + 1 : count),
    0
  );

  return count;
}

console.log(countVowels("Hello world"));
