function printStar(num) {
  let stars = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      stars += "*";
    }

    stars += "\n";
  }

  return stars;
}

console.log(printStar(4));
