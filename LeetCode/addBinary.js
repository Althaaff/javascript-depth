function addBinary(a, b) {
  const decimal1 = BigInt("0b" + a);
  const decimal2 = BigInt("0b" + b);

  let sum = decimal1 + decimal2;

  return sum.toString(2);
}

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));

/*
 Note:
 Hexadecimal is a base-16 number system that uses 16 symbols: the numerals \(0-9\) and the letters \(A-F\), 
 which represent the decimal values \(10-15\).

*/
