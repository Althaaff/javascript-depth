let timerDisplay = document.getElementById("timer");
let sessionDisplay = document.getElementById("session");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");

let timeLeft = 25 * 60;
let isRunning = false;
let isWorkSession = true;
let intervalId = null;

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  sessionDisplay.textContent = isWorkSession ? "Work" : "Break";
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;

    intervalId = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;

        updateDisplay();
      } else {
        clearInterval(intervalId);
        isRunning = false;
        alert(
          isWorkSession
            ? "Work session done! Time for a break."
            : "Break over! Back to work."
        );

        isWorkSession = !isWorkSession;
        timeLeft = isWorkSession ? 25 * 60 : 5 * 60;
        updateDisplay();
        startTimer();
      }
    }, 1000);
  }
}

function pauseTimer() {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
}

function resetTimer() {
  isWorkSession = true;
  isRunning = true;
  clearInterval(intervalId);
  timeLeft = 25 * 60;
  updateDisplay();
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

// intial display :
updateDisplay();
