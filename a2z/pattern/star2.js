function printStar(num) {
  let stars = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      stars += "*";
    }

    stars += "\n";
  }

  return stars;
}

console.log(printStar(4));
