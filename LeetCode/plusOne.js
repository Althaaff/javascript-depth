// // var plusOne = function (digits) {
// //   if (digits.length === 0) return;

// //   let carry = 1;
// //   for (let i = digits.length - 1; i >= 0; i--) {
// //     let sum = digits[i] + 1;

// //     if (sum < 10) {
// //       digits[i] = sum;

// //       return digits;
// //     } else {
// //       digits[i] = 0;

// //       // console.log("digit", digits);
// //       carry = 1;
// //     }
// //   }

// //   if (carry > 0) {
// //     digits.unshift(carry);
// //     return digits;
// //   }
// // };
// // // console.log(plusOne([1, 2, 3]));
// // // console.log(plusOne([9, 9]));
// // console.log(plusOne([1, 2, 9]));

// var plusOne = function (digits) {
//   if (digits.length === 0) return;

//   let carry = 1;
//   for (let i = digits.length - 1; i >= 0; i--) {
//     let sum = digits[i] + 1;

//     if (sum < 10) {
//       digits[i] = sum;

//       return digits;
//     } else {
//       digits[i] = 0;
//       carry = 1;
//     }
//   }

//   if (carry > 0) {
//     digits.unshift(carry);
//   }
// };
// console.log(plusOne([1, 2, 3]));

var plusOne = function (digits) {
  if (digits.length === 0) return;

  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + 1;

    if (sum < 10) {
      digits[i] = sum;

      return digits;
    } else {
      digits[i] = 0;
      carry = 1;
    }
  }

  if (carry > 0) {
    digits.unshift(carry);

    return digits;
  }
};
console.log(plusOne([9]));
