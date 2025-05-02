function diamondStarPattern(n) {
  // upperhalf :
  for (let i = 0; i < n; i++) {
    const spaces = " ".repeat(n - i - 1);
    const stars = "*".repeat(2 * i + 1);

    console.log(spaces + stars);
  }

  // lowerhalf :

  for (let i = n - 2; i >= 0; i--) {
    const spaces = " ".repeat(n - i - 1);
    const stars = "*".repeat(2 * i + 1);

    console.log(spaces + stars);
  }
}

diamondStarPattern(5);
