const gameBoard = document.getElementById("gameBoard");
const movesDisplay = document.getElementById("moves");
const winMessage = document.getElementById("winMessage");
const resetButton = document.getElementById("resetButton");

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
const totalPairs = 8; // 4x4 grid = 16 cards = 8 pairs

function initGame() {
  // Reset state
  cards = [];
  flippedCards = [];
  matchedPairs = 0;
  moves = 0;
  movesDisplay.textContent = moves;
  winMessage.classList.add("hidden");
  resetButton.classList.add("hidden");
  gameBoard.innerHTML = "";

  // Create pairs (1 to 8, duplicated)
  const values = Array.from({ length: totalPairs }, (_, i) => i + 1).flatMap(
    (i) => {
      console.log([i, i]);
      return [i, i];
    }
  );

  console.log("values", values);

  // Shuffle cards :
  for (let i = values.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    console.log("random", j);
    [values[i], values[j]] = [values[j], values[i]];

    console.log("shuffled", ([values[i], values[j]] = [values[j], values[i]]));
  }

  // Create card elements
  values.forEach((value) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">${value}</div>
        <div class="card-back"></div>
      </div>
    `;
    card.dataset.value = value;
    card.addEventListener("click", () => handleCardClick(card));
    gameBoard.appendChild(card);
    cards.push(card);
  });
}

function handleCardClick(card) {
  // Prevent clicking matched or already flipped cards, or more than 2 cards
  if (
    card.classList.contains("flipped") ||
    card.classList.contains("matched") ||
    flippedCards.length >= 2
  ) {
    return;
  }

  // Flip card
  card.classList.add("flipped");
  flippedCards.push(card);
  moves++;
  movesDisplay.textContent = moves;

  // Check for match when 2 cards are flipped
  if (flippedCards.length === 2) {
    const [card1, card2] = flippedCards;
    if (card1.dataset.value === card2.dataset.value) {
      // Match found
      card1.classList.add("matched");
      card2.classList.add("matched");
      matchedPairs++;
      flippedCards = [];
      checkWin();
    } else {
      // No match, flip back after delay
      setTimeout(() => {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        flippedCards = [];
      }, 1000);
    }
  }
}

function checkWin() {
  if (matchedPairs === totalPairs) {
    winMessage.classList.remove("hidden");
    resetButton.classList.remove("hidden");
  }
}

resetButton.addEventListener("click", initGame);

// Start game
initGame();
