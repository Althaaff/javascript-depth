document.addEventListener("DOMContentLoaded", () => {
  const wordContainer = document.getElementById("wordContainer");
  const livesCount = document.getElementById("livesCount");
  const message = document.getElementById("message");
  const keyboard = document.getElementById("keyboard");
  const playAgain = document.getElementById("playAgain");

  const wordList = ["apple", "banana", "grape", "orange", "mango", "peach"];

  let state = {
    word: "",
    guessedLetters: new Set(),
    lives: 6,
    status: "playing",
  };

  function selectWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
  }

  function isValidLetter(letter) {
    return (
      /^[a-z]$/.test(letter) && !state.guessedLetters.has(letter.toLowerCase())
    );
  }

  function getDisplayWord() {
    return state.word
      .split("")
      .map((letter) => (state.guessedLetters.has(letter) ? letter : "_"))
      .join(" ");
  }

  function handleGuess(letter) {
    if (!isValidLetter(letter) || state.status !== "playing") return;

    letter = letter.toLowerCase();
    state.guessedLetters.add(letter);

    if (!state.word.includes(letter)) {
      state.lives--;
      wordContainer.classList.add("shake");
      setTimeout(() => wordContainer.classList.remove("shake"), 300);
    }

    if (state.lives === 0) {
      state.status = "Lost";
    } else if (!getDisplayWord().includes("_")) {
      state.status = "Won";
    }

    render();
  }

  function resetGame() {
    state = {
      word: selectWord(),
      guessedLetters: new Set(),
      lives: 6,
      status: "playing",
    };

    render();
  }

  function renderWord() {
    wordContainer.innerHTML = "";

    getDisplayWord()
      .split(" ")
      .forEach((letter) => {
        let span = document.createElement("span");
        span.className = "letter";
        span.textContent = letter;
        wordContainer.appendChild(span);
      });
  }

  function renderLives() {
    livesCount.textContent = "❤️".repeat(state.lives);
  }

  function renderKeyBoard() {
    keyboard.innerHTML = "";

    "abcdefghijklmnopqrstuvwxyz".split("").forEach((letter) => {
      const button = document.createElement("button");
      button.textContent = letter;
      button.dataset.letter = letter;
      button.disabled =
        state.guessedLetters.has(letter) || state.status !== "playing";

      if (state.guessedLetters.has(letter)) {
        button.classList.add(
          state.word.includes(letter) ? "correct" : "incorrect"
        );
      }

      keyboard.appendChild(button);
    });
  }

  function renderMessage() {
    message.classList.toggle("hidden", state.status === "playing");
    playAgain.classList.toggle("hidden", state.status === "playing");

    if (state.status === "won") {
      message.textContent = "You Win!";
      message.classList.add("success");
      message.classList.remove("failure");
    } else if (state.status === "lost") {
      message.textContent = `Game Over! Word was: ${state.word}`;
      message.classList.add("failure");
      message.classList.remove("success");
    }
  }

  function render() {
    renderWord();
    renderKeyBoard();
    renderLives();
    renderMessage();
  }

  keyboard.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (button && button.dataset.letter) {
      handleGuess(button.dataset.letter);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key.length === 1 && isValidLetter(e.key)) {
      handleGuess(e.key);
    }
  });

  playAgain.addEventListener("click", resetGame);

  resetGame();
});
