// create one function called reverseString
// store sny string in input when calling function
// create one variable called reversedString with empty string
// run the for loop from str length -1 means end of the string
// then store all current string elements to the reversedString while looping
// finally return the string

// function reversedString(str) {
//   let reversedString = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
//   }

//   return reversedString;
// }

// console.log(reversedString("Hello"));

// Approach 2 :

// function reversedString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reversedString("Hello"));

// Approach 3 :
function reversedString(str) {
  if (str === "") return "";
  return reversedString(str.slice(1)) + str[0];
}

console.log(reversedString("Hello"));
