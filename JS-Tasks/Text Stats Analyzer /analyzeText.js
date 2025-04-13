const inputText = document.getElementById("inputText");
const wordCountDisplay = document.getElementById("wordCount");
const charCountDisplay = document.getElementById("charCount");
const mostUsedDisplay = document.getElementById("mostUsed");

inputText.addEventListener("input", showStats);

function showStats() {
  let text = inputText.value.trim();

  // count words :
  let words = text ? text.split(/\s+/).filter((word) => word.length > 0) : [];
  let wordsCount = words.length;

  // Character count (no spaces) :
  let charCount = text.replace(/\s/g, "").length;

  // most used words :
  let mostUsed = "None";

  if (words.length > 0) {
    const wordFreq = {};

    words.forEach((word) => {
      word = word.toLowerCase();
      wordFreq[word] = (wordFreq[word] || 0) + 1;
    });

    let maxCount = 0;

    for (let word in wordFreq) {
      if (wordFreq[word] > maxCount) {
        mostUsed = word;
        maxCount = wordFreq[word];
      }
    }
  }

  wordCountDisplay.textContent = wordsCount;
  charCountDisplay.textContent = charCount;
  mostUsedDisplay.textContent = mostUsed;
}
