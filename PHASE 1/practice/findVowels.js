// function findVowels(str) {
//   let vowels = "aeiouAEIOU";
//   let count = 0;

//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(findVowels("Hello world"));

// Approach 2 using reduce :

// function countVowels(str) {
//   const vowels = "aeiouAEIOU";

//   return [...str].reduce(
//     (count, char) => (vowels.indexOf(char) !== -1 ? count + 1 : count),
//     0
//   );
// }

// console.log(countVowels("Hello world"));

function countVowels(str) {
  const vowels = "aeiouAEIOU";

  return str.split("").filter((char) => vowels.includes(char)).length;
}

console.log(countVowels("heloo world"));
