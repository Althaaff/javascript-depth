document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("textInput");
  const counter = document.getElementById("counter");
  const error = document.getElementById("error");

  const state = {
    maxLimit: 250,
    warningThereshold: 20,
    count: 0,
  };

  function getCharCount(text) {
    // console.log("called");
    return text.length;
  }

  function truncateText(text) {
    console.log("called!");
    text = text.slice(0, state.maxLimit);
  }

  function updateCount() {
    let text = textInput.value;

    if (getCharCount(text) > state.maxLimit) {
      text = truncateText(text);
      textInput.value = text;
    }

    state.count = getCharCount(text);
  }

  function restrictInput(e) {
    if (
      state.count >= state.maxLimit &&
      !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(e.key)
    ) {
      e.preventDefault(); // prevents other keys //
      // console.log("blocked input!");
    } else {
      // console.log("unblocked input!");
    }
  }

  function renderCounter() {
    counter.textContent = `Characters: ${state.count} / ${state.maxLimit}`;
    counter.classList.remove("safe", "warning", "error");
    textInput.classList.remove("warning", "error");

    if (state.count >= state.maxLimit) {
      counter.classList.add("error");
      textInput.classList.add("error");
      error.classList.remove("hidden");
    } else if (state.count >= state.maxLimit - 20) {
      counter.classList.add("warning");
      textInput.classList.add("warning");
      error.classList.add("hidden");
    } else {
      counter.classList.add("safe");
      error.classList.add("hidden");
    }
  }

  function handleInput() {
    updateCount();
    renderCounter();
  }

  function handlePaste(e) {
    const pastedText = (e.clipboardData || window.clipboardData).getData(
      "text"
    );
    // console.log("pastedText", pastedText);
    const currentText = textInput.value;
    const newText =
      currentText.slice(0, textInput.selectionStart) +
      pastedText +
      currentText.slice(textInput.selectionEnd);

    // console.log("new text", newText);

    if (getCharCount(newText) > state.maxLimit) {
      e.preventDefault();
      textInput.value = truncateText(newText);
      handleInput();
    }
  }

  textInput.addEventListener("input", handleInput);
  textInput.addEventListener("keydown", restrictInput);
  textInput.addEventListener("paste", handlePaste);
});
