// Approach 1: Using for loop (Efficient Approach)
// function isPalindrome(str) {
//   let j = str.length - 1;

//   for (i = 0; i <= str.length / 2; i++) {
//     if (str[i] === str[j]) {
//       console.log("strings are palindrome!");
//       return true;
//     }
//       j--;
//   }
//   console.log("not a palindrome!");
//   return false;
// }

// console.log(isPalindrome("malayalam"));
// console.log(isPalindrome("yenepoya"));

// Approach 2: Checking the String from Last :
// function isPalindrome(str) {
//   let rev = "";

//   for (i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
//   }

//   if (rev === str) {
//     console.log("palidrome");
//     return true;
//   } else {
//     console.log("not palidrome!");
//     return false;
//   }
// }

// console.log(isPalindrome("Heyy"));
// console.log(isPalindrome("malayalam"));

// Approach 3: Using split(), reverse() and join() Methods
function isPalindrome(str) {
  let rev = str.split("").reverse().join("");
  console.log("rev", rev);

  if (rev === str) {
    console.log("palidrome");
    return true;
  } else {
    console.log("not palidrome");
    return false;
  }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("code"));
