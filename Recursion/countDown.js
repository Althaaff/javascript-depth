function countDown(num) {
  if (num <= 1) {
    return num;
  }

  console.log(num);
  return countDown(num - 1);
}

console.log(countDown(5));
