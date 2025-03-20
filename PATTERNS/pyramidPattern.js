// Pyramid Patter printing Javascript Logic :

// function pyramidPattern(n) {
//   let num = 2;

//   for (let i = 1; i <= n; i++) {
//     let row = " ".repeat(n - i); // 1st iteration 3 spaces //
//     console.log(i);

//     for (let j = 1; j <= i; j++) {
//       console.log(j);
//       row += num + " ";
//       num += 2;
//     }

//     console.log(row);
//   }
// }

// pyramidPattern(4);

// pyramid pattern printing :
function pyramid(num) {
  let n = 2;

  for (let i = 1; i <= num; i++) {
    let row = " ".repeat(num - i); // decides spaces //

    for (let j = 1; j <= i; j++) {
      row += n + " "; // prints even numbers //
      n += 2; // updates even numbers
    }

    console.log(row);
  }
}

pyramid(5);
