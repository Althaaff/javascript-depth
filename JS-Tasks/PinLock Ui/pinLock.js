document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dot");
  const dotContainer = document.querySelector(".dots");
  const message = document.getElementById("message");
  const keyPad = document.querySelector(".keypad");
  const deleteButton = document.getElementById("delete");

  console.log(dots, dotContainer, message, keyPad, deleteButton);

  const CORRECT_PIN = "1234";
  let pin = "";
  let isProcessing = false;

  function addDigit(digit) {
    if (isProcessing || pin.length >= 4) return;

    pin += digit;
    renderDots();

    if (pin.length === 4) {
      validatePin();
    }
  }

  function validatePin() {
    isProcessing = true;

    const status = pin === CORRECT_PIN ? "success" : "error";

    showFeedBack(status);

    setTimeout(() => {
      if (status === "error") {
        pin = "";
        renderDots();
        clearFeedback();
      }

      isProcessing = false;
    }, 1000);
  }

  function deleteDigit() {
    pin = pin.slice(0, -1);

    renderDots();
    clearFeedback();
  }

  function renderDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle("filled", index < pin.length);
    });
  }

  function showFeedBack(status) {
    dots.forEach((dot) => {
      dot.classList.remove("success", "error");
      dot.classList.add(status);
    });

    if (status === "error") {
      dotContainer.classList.add("shake");

      setTimeout(() => dotContainer.classList.remove("shake"), 400);
    }

    message.textContent = status === "success" ? "Unlocked" : "Incorrect PIN";
    message.classList.remove("hidden", "success", "error");
    message.classList.add(status);
  }

  function clearFeedback() {
    dots.forEach((dot) => {
      dot.classList.remove("success", "error");
    });

    message.classList.add("hidden");
    message.textContent = "";
  }

  keyPad.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (!button) return;

    if (button === deleteButton) {
      deleteDigit();
    } else {
      const digit = e.target.dataset.digit;

      if (digit) addDigit(digit);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (isProcessing) return;

    if (e.key >= "0" && e.key <= "9") {
      addDigit(e.key);
    } else if (e.key === "Backspace") {
      deleteDigit();
    }
  });

  renderDots();
});
