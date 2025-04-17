const daysDisplay = document.getElementById("days");
const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const endMessage = document.getElementById("endMessage");

const targetDate = new Date("2026-01-01T00:00:00").getTime();

console.log(targetDate);

function updateCountDown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    clearInterval(intervalId);

    daysDisplay.textContent = "0";
    hoursDisplay.textContent = "0";
    minutesDisplay.textContent = "0";
    secondsDisplay.textContent = "0";
    endMessage.classList.remove("hidden");

    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // console.log("days", days);
  // console.log("hours", hours);
  // console.log("minutes", minutes);
  // console.log("seconds", seconds);

  daysDisplay.textContent = days;
  hoursDisplay.textContent = hours.toString().padStart(2, "0");
  minutesDisplay.textContent = minutes.toString().padStart(2, "0");
  secondsDisplay.textContent = seconds.toString().padStart(2, "0");
}

// run immediately and every seconds :
updateCountDown();

const intervalId = setInterval(() => {
  updateCountDown();
}, 1000);
