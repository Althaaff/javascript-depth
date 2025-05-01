function generatePassword() {
  const length = parseInt(document.getElementById("length").value) || 12;
  const includeUpperCase = document.getElementById("uppercase").checked;
  const includeLowerCase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let charPool = "";

  if (includeLowerCase) {
    charPool += lowercaseChars;
  }

  if (includeUpperCase) {
    charPool += uppercaseChars;
  }

  if (includeNumbers) {
    charPool += numberChars;
  }

  if (includeSymbols) {
    charPool += symbolChars;
  }

  if (charPool === "") {
    document.getElementById("result").textContent =
      "Please Select At Least One Option..";

    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }

  document.getElementById("result").textContent = `🔐 ${password}`;
}
