function printNumber(num) {
  let number = "";

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      number += i;
    }
    number += "\n";
  }

  return number;
}

console.log(printNumber(5));
