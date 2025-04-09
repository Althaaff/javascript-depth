// classic fizz buzz solution :
function fizzBuzz(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);

// More Concise Version returning an array :
function findFizzBuzzArray(n) {
  let result = [];

  for (let i = 0; i <= n; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz ";
    if (i % 5 === 0) output += "Buzz";

    result.push(output || i);
  }

  return result;
}

console.log(findFizzBuzzArray(25));

// Using switch with modern JavaScript :
function fizzBuzzSwitch(n) {
  return Array.from({ length: n }, (_, i) => i).map((num) => {
    switch (true) {
      case num % 3 === 0 && num % 5 === 0:
        return "Fizz Buzz";

      case num % 3 === 0:
        return "Fizz";

      case num % 5 === 0:
        return "Buzz";

      default:
        return num;
    }
  });
}

console.log(fizzBuzzSwitch(25));
