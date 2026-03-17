function startCountDown() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log("Counting: " + i);
    }, i * 1000);
  }
}
startCountDown();

// Fix using `let` keyword :
function startCountDown() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log("Counting: " + i);
    }, i * 1000);
  }
}
startCountDown();
