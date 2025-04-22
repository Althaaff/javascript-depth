/* Symmetric Alphabet Pattern */

// function symmetricAlphabetic(n) {
//   const A = "A".charCodeAt(0);

//   // ASCII based character

//   for (let i = 0; i < n; i++) {
//     let line = "";

//     // Left increasing A to (n - i - 1)
//     for (let j = 0; j < n - i; j++) {
//       line += String.fromCharCode(A + j) + " ";
//     }

//     // Middle spaces (2*i - 1) if i > 0 :
//     const spaceCount = i === 0 ? 0 : 2 * i - 1;
//     line += "  ".repeat(spaceCount);

//     // console.log(spaceCount);

//     // Right decreasing (n - i - 1) to A :
//     for (let j = n - i - 1; j >= 0; j--) {
//       line += String.fromCharCode(A + j) + " ";
//     }

//     console.log(line.trim());
//   }
// }

// symmetricAlphabetic(5);

// practice :
function printPattern(n) {
  const A = "A".charCodeAt(0); // ascii code 65 --> if it converted to char --> its becomes `A` //

  for (let i = 0; i < n; i++) {
    let line = "";

    for (let j = 0; j < n - i; j++) {
      line += String.fromCharCode(A + j) + " ";
    }

    const spaceCount = i === 0 ? 0 : 2 * i - 1;
    line += "  ".repeat(spaceCount);

    for (let j = n - i - 1; j >= 0; j--) {
      line += String.fromCharCode(A + j) + " "; // + " " --> for after every character need one space //
    }

    console.log(line.trim());
  }
}

printPattern(5);
