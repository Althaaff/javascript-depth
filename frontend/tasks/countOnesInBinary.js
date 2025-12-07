function countOnesInBinary(num) {
  return num.toString(2).split(1).length - 1;
}

console.log(countOnesInBinary(8));
console.log(countOnesInBinary(20));
console.log(countOnesInBinary(30));
