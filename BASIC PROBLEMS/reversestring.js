// Approach 1 :
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("123"));

// Approach 2 :
// function reverseString(str) {
//   let reversedStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }

//   return reversedStr;
// }

// console.log(reverseString("hameed"));

// Approach 2 :
// 1. Using Recursion
// function reverseString(str) {
//   if (str === "") return "";
//   return reverseString(str.slice(1)) + str[0];
// }

// console.log(reverseString("Hello"));

// Approach 3 :
// 2. Using Array (Push + Join)
// function reverseString(str) {
//   let arr = [];

//   for (i = str.length - 1; i >= 0; i--) {
//     arr.push(str[i]);
//   }

//   return arr.join("");
// }
// console.log(reverseString("Hello"));

// Approach 4 :
function reverseString(str) {
  let arr = [...str];

  console.log("length", arr.length - 1);
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++; //decrement
    right--;
  }

  return arr.join("");
}

console.log(reverseString("Book"));
