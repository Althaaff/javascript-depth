const passwordInput = document.getElementById("password");
const strengthDisplay = document.getElementById("strength");

passwordInput.addEventListener("input", checkPasswordStrength);

function checkPasswordStrength() {
  const password = passwordInput.value;
  let strength = "None";

  if (!password) {
    strengthDisplay.textContent = "Strength: None";
    strengthDisplay.className = "strength";

    return;
  }

  // calculating score base on user password strength :
  let score = 0;

  console.log(score++);

  if (password.length >= 6) {
    console.log("fired! 1");
    score++;
  }

  if (password.length >= 10) {
    console.log("fired! 2");
    score++;
  }

  if (/[a-z]/.test(password)) {
    console.log("fired 3");
    score++;
  }

  if (/[A-Z]/.test(password)) {
    console.log("fired 4");
    score++;
  }

  if (/[0-9]/.test(password)) {
    console.log("fired 5");
    score++;
  }

  if (/[^a-zA-Z0-9]/.test(password)) {
    console.log("fired 6");
    score++;
  }

  // determine strength based one score :
  if (score <= 2) {
    strength = "Weak!";
    strengthDisplay.className = "strength weak";
  } else if (score <= 4) {
    strength = "Medium!";
    strengthDisplay.className = "strength medium";
  } else {
    strength = "Strong!";
    strengthDisplay.className = "strength strong";
  }

  strengthDisplay.textContent = `Strength ${strength}`;
}
